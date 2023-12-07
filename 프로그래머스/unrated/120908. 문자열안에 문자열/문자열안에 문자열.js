function solution(str1, str2) {
    var answer = 1;
    var result = str1.indexOf(str2);
    if (result === -1){
        answer = 2
    }
    return answer;
}