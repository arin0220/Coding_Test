function solution(sides) {
    var max = Math.max(...sides);
    const sum = sides.reduce((a,b) => (a+b));
    var answer = 0;
    if(max < (sum-max)){
        answer = 1
    }else{
        answer = 2
    }
    return answer;
}