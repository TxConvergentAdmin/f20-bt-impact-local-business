# To add a new cell, type '# %%'
# To add a new markdown cell, type '# %% [markdown]'
# %%
import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

class RecommenderNet(keras.Model):
    def __init__(self, num_users, num_restaurants, embedding_size, **kwargs):
        super(RecommenderNet, self).__init__(**kwargs)
        self.num_users = num_users
        self.num_restaurants = num_restaurants
        self.embedding_size = embedding_size
        self.user_embedding = layers.Embedding(
            num_users,
            embedding_size,
            embeddings_initializer="he_normal",
            embeddings_regularizer=keras.regularizers.l2(1e-6),
        )
        self.user_bias = layers.Embedding(num_users, 1)
        self.restaurant_embedding = layers.Embedding(
            num_restaurants,
            embedding_size,
            embeddings_initializer="he_normal",
            embeddings_regularizer=keras.regularizers.l2(1e-6),
        )
        self.restaurant_bias = layers.Embedding(num_restaurants, 1)
        self.dense_user = layers.Dense(25, use_bias=True)
        self.dense_restaurant = layers.Dense(25, use_bias=True)
    def call(self, inputs):
        user_vector = self.user_embedding(inputs[:, 0])
        user_vector = self.dense_user(user_vector)
        user_bias = self.user_bias(inputs[:, 0])
        restaurant_vector = self.restaurant_embedding(inputs[:, 1])
        restaurant_vector = self.dense_restaurant(restaurant_vector)
        restaurant_bias = self.restaurant_bias(inputs[:, 1])
        dot_user_restaurant = tf.tensordot(user_vector, restaurant_vector, 2)
        tf.nn.relu(dot_user_restaurant)
        # Add all the components (including bias)
        x = dot_user_restaurant + user_bias + restaurant_bias
        
        # The sigmoid activation forces the rating to between 0 and 1
        return tf.nn.sigmoid(x)


# Let us get a user and see the top recommendations.
def recommendations(userid):
    data = pd.read_csv('smaller_set.csv')
    df = data[["userId","restaurantId", "rating"]]
    user_ids = df["userId"].unique().tolist()
    user2user_encoded = {x: i for i, x in enumerate(user_ids)}
    userencoded2user = {i: x for i, x in enumerate(user_ids)}
    restaurant_ids = df["restaurantId"].unique().tolist()
    restaurant2restaurant_encoded = {x: i for i, x in enumerate(restaurant_ids)}
    restaurant_encoded2restaurant = {i: x for i, x in enumerate(restaurant_ids)}
    df["user"] = df["userId"].map(user2user_encoded)
    df["restaurant"] = df["restaurantId"].map(restaurant2restaurant_encoded)
    num_users = len(user2user_encoded)
    num_restaurants = len(restaurant_encoded2restaurant)
    df["rating"] = df["rating"].values.astype(np.float32)
    # min and max ratings will be used to normalize the ratings later
    min_rating = min(df["rating"])
    max_rating = max(df["rating"])

    x = df[["user", "restaurant"]].values
    # Normalize the targets between 0 and 1. Makes it easy to train.
    y = df["rating"].apply(lambda x: (x - min_rating) / (max_rating - min_rating)).values
    EMBEDDING_SIZE = 50
    model = RecommenderNet(num_users, num_restaurants, EMBEDDING_SIZE)
    model.compile(loss=tf.keras.losses.BinaryCrossentropy(), optimizer=keras.optimizers.Adam(lr=0.001))
    model.load_weights('model_weights/weights')
    bis_df = pd.read_csv('yelp_business.csv')
    restaurant_df = bis_df[["business_id", "name"]]
    restaurant_df = restaurant_df.rename(columns={'business_id':'restaurantId', 'name':'title'})

    user_id = userid
    restaurants_watched_by_user = df[df.userId == user_id]
    restaurants_not_watched = restaurant_df[
        ~restaurant_df["restaurantId"].isin(restaurants_watched_by_user.restaurantId.values)
    ]["restaurantId"]
    restaurants_not_watched = list(
        set(restaurants_not_watched).intersection(set(restaurant2restaurant_encoded.keys()))
    )
    restaurants_not_watched = [[restaurant2restaurant_encoded.get(x)] for x in restaurants_not_watched]
    user_encoder = user2user_encoded.get(user_id)

    user_restaurant_array = np.hstack(
        ([[user_encoder]] * len(restaurants_not_watched), restaurants_not_watched)
    )

    ratings = model.predict(user_restaurant_array).flatten()

    top_ratings_indices = ratings.argsort()[-200:][::-1]
    top_ratings_indices = top_ratings_indices[np.random.choice(top_ratings_indices.shape[0], 100, replace = False)]
    recommended_restaurant_ids = [
        restaurant_encoded2restaurant.get(restaurants_not_watched[x][0]) for x in top_ratings_indices
    ]
    recommended_retur = np.copy(recommended_restaurant_ids)
    top_restaurants_user = (
        restaurants_watched_by_user.sort_values(by="rating", ascending=False)
        .head(5)
        .restaurantId.values
    )
    restaurant_df_rows = restaurant_df[restaurant_df["restaurantId"].isin(top_restaurants_user)]
    recommended_restaurants = restaurant_df[restaurant_df["restaurantId"].isin(recommended_restaurant_ids)]
    return recommended_retur

def aggregate_ratings(you, friends):
    #friends -> [["restaurant", "restaurant2"...], "friend2"...]
    friends.append(you)
    intersect = {}
    for friend in friends: 
        for restaurant in friend:
            val = intersect.get(restaurant, 0)
            intersect[restaurant] = val + 1
    return [v[0] for v in sorted(intersect.items(), key=lambda item: item[1])]

def get_rec(userid, friends = []):
    user_rec = recommendations(userid)
    friend_recs = [recommendations(i) for i in friends]
    recs = aggregate_ratings(user_rec, friend_recs)[:100]
    return " ".join(recs)

