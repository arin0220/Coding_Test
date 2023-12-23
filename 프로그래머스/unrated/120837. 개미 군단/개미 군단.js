function solution(hp) {
    var answer = 0;
    var remain = 0;
    answer =  Math.floor(hp/5);
    remain = hp%5;
    answer +=  Math.floor(remain/3) + remain%3;
    return answer;
}