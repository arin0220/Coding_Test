function solution(numbers) {
    var answer = 0;
    var sum = numbers.reduce((a,b) => (a+b));
    answer = sum / numbers.length;
    return answer;
}