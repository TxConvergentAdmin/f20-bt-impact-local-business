from script import get_rec
def main(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    request_json = request.get_json()
    if request.args and 'user_id' and 'user_friends' in request.args:
        return get_rec(request.args.get('user_id'), request.args.get('user_friends'))
    elif 'user_id' in request_json:
        return get_rec(request_json['user_id'])
    else:
        return f'Incorrect Data'



