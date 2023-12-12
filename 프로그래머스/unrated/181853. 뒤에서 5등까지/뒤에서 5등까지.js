function solution(num_list) {
    var answer = num_list.sort((a,b) => a - b);
    answer = answer.slice(0,5); 
    return answer;
}