function solution(my_string, is_suffix) {
    var answer = 0;
    var answer2 = my_string.split('');
    var arr = [''];

    for (var i = 0; i < answer2.length; i++) {
        arr.push(answer2.slice(i, answer2.length).join(''));
    }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === is_suffix) {
            answer = 1;
            break;  // 일치하는 부분을 찾으면 루프 종료
        }
    }

    return answer;
}
