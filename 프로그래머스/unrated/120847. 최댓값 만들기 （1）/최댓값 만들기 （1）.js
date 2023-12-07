function solution(numbers) {
    numbers.sort((a,b) => b - a);
    var twomax = numbers.splice(0, 2);
    var answer = twomax[0] * twomax[1];
    return answer;
}