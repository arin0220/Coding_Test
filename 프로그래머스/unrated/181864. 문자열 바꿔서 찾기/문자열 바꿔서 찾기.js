function solution(myString, pat) {
    var answer = 0;
    var arr = "";
    for (var i = 0; i < myString.length; i++) {
    arr += myString[i] === "A" ? "B" : "A";
}
    
    
    answer = arr.includes(pat);
    if(answer === true){
        answer = 1;
    }else{
        answer = 0;
    }
    return answer;
}