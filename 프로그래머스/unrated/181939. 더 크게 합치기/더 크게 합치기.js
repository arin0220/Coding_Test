function solution(a, b) {
    var answer = 0;
    var word1 = String(a) + String(b);
    // word1.concat(a,b);
    var word2 = String(b) + String(a);
    // word2.concat(b,a);
    if(Number(word1) > Number(word2)){
        answer = Number(word1);
    }else{
        answer = Number(word2);
    }
    return answer;
}