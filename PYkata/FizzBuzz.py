def solution(number):
    number -= .5
    fizz = int(number//3 - number//15)
    buzz = int(number//5 - number//15)
    fizzbuzz = int(number//15)
    return [fizz, buzz, fizzbuzz]
