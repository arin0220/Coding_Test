function solution(array) {
    var mid = Math.floor(array.length / 2)
    var arr = array.sort((a, b) => a - b);
    var answer = arr[mid];
    return answer;
}