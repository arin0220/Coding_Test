function solution(array) {
    var answer = 0;
    const arr = Array.from({length: 1001}, () => 0);
    for(var i=0; i<array.length; i++){
        arr[array[i]]++;
    }
    answer = Math.max(...arr);
    if(arr.filter(value => value === answer).length > 1){
        return -1
    }
    return arr.indexOf(answer);
}