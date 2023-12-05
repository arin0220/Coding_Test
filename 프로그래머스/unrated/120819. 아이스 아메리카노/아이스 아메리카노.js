function solution(money) {
    var mn = parseInt(money / 5500);
    var rest = money % 5500;
    var answer = [mn, rest];
    return answer;
}