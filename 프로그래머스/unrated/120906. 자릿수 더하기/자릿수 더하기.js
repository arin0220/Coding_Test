function solution(n) {
    var answer = 0;
    const str = String(n);
    // element를 문자열에서 정수로 변경
    const mapfn = (arg) => Number(arg)
    // 문자열 -> 배열로 변경
    const newArr = Array.from(str, mapfn);
    for(let i=0; i<newArr.length; i++){
        answer += newArr[i];
    }
    return answer;
}