import sys, json

lines = sys.stdin.readlines()
num = json.loads(lines[0])

total_sum = 0
for item in num:
    total_sum += item


print total_sum


