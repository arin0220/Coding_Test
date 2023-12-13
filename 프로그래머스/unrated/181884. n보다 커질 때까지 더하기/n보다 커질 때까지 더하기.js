function solution(numbers, n) {
    var answer = 0;
    var sum = 0;
    for(var i=0; i<numbers.length; i++){
        sum += numbers[i];
        if(sum > n){
            answer = sum;
            break;
        }
    }
    return answer;
}