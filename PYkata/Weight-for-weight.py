def order_weight(strng):
    nums = strng.split(" ")

    nums.sort(compWeights)
    return " ".join(nums)


def compWeights(a, b):
    if digit_sum(a) == digit_sum(b):
        if a < b:
            return -1
        return 1
    elif digit_sum(a) > digit_sum(b):
        return 1
    return -1


def digit_sum(a_string):
    return sum([int(char) for char in a_string])
