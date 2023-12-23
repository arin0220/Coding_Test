function solution(my_string, n) {
    var start = my_string.length - n;
    var answer = my_string.slice(start, my_string.length);
    return answer;
}