/**
  정수가 있을 때, 짝수라면 반으로 나누고, 홀수라면 1을 뺀 뒤 반으로 나누면, 마지막엔 1이 됩니다. 예를 들어 10이 있다면 다음과 같은 과정으로 1이 됩니다.
  - 10 / 2 = 5
  - (5 - 1) / 2 = 4
  - 4 / 2 = 2
  - 2 / 2 = 1
  위와 같이 4번의 나누기 연산으로 1이 되었습니다.
  정수들이 담긴 리스트 `num_list`가 주어질 때, `num_list`의 모든 원소를 1로 만들기 위해서 필요한 나누기 연산의 횟수를 return하도록 solution 함수를 완성해주세요.

1. 배열의 요소 하나씩 짝수인지 홀수인지 확인한다.
2. 확인 후 짝수라면 반으로 나누고 홀수라면 1을 뺀 뒤 반으로 나눈다.
3. 나누기 연산이 실행될 때 count++ 한다.
4. 1이 될 때까지 반복한다. 
*/

function solution(num_list) {
  let count = 0;
  num_list.forEach(e => {
    while (e !== 1){
      if(e % 2 === 0) {
        e = e / 2;
      } else if (e % 2 === 1) {
        e = (e - 1) / 2
      } else if (e === 1){
        return count
      }
      count++;
    }
  });
  return count
}

console.log(solution([12, 4, 15, 1, 14]))

// 배운점

function solution(num_list) {
    return num_list.map(v => v.toString(2).length - 1).reduce((a, c) => a + c);
}