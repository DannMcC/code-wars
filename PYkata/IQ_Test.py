def iq_test(numbers):
    odds = 0
    evens = 0
    count = 0
    nums = map(int, numbers.split(' '))
    for x in nums:
        if x % 2 == 0:
            evens += nums.index(x)
            count += 1
        else:
            odds += nums.index(x)
    return odds + 1 if count > 1 else evens + 1
