"""Key verify middleware."""

from functools import wraps

from flask import request

from server.utils.rot13 import encrypt


def key_verify(func):
    """Verify key."""

    @wraps(func)
    def wrapper(*args, **kwargs):
        key = encrypt(request.headers.get("X-USER-KEY"), 13)
        user_key = request.json["data"]["key"]
        if key != user_key:
            request.key_verify = False
        else:
            request.key_verify = True
        return func(*args, **kwargs)

    return wrapper
