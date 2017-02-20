def comp(arr1, arr2):
    try:
        return sorted(item**2 for item in arr1) == sorted(arr2)
    except TypeError:
        return False
