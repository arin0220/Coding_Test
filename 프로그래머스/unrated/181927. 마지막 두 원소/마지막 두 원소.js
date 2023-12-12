function solution(num_list) {
    var answer = num_list;
    var a = num_list[num_list.length-1];
    var b = num_list[num_list.length-2];
    if(a>b){
        answer.push(a-b);
    }else{
        answer.push(a*2);
    }
    return answer;
}