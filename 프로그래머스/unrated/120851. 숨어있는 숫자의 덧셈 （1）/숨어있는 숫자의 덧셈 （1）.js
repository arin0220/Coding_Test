function solution(my_string) {
    var num = my_string.split("");
    var answer = 0;
    for(let i=0; i<num.length; i++){
        if(Number(num[i])){
            answer += Number(num[i]);
        }
    }
    return answer;
}