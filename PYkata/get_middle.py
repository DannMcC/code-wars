import math


def get_middle(s):
    arr = list(s)
    if len(arr) % 2 == 0:
        return arr[(len(arr)/2)-1] + arr[len(arr)/2]
    else:
        return arr[int(math.ceil(len(arr)/2))]
