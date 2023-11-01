def solution(array, commands):
    answer = []
    for command in commands:
        start, end, k = command
        sample = sorted(array[start - 1:end])
        answer.append(sample[k - 1])
    return answer