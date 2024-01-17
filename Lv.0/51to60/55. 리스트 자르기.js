/**
 *  정수 `n`과 정수 3개가 담긴 리스트 `slicer` 그리고 정수 여러 개가 담긴 리스트 `num_list`가 주어집니다. `slicer`에 담긴 정수를 차례대로 a, b, c라고 할 때, `n`에 따라 다음과 같이 `num_list`를 슬라이싱 하려고 합니다.

- `n = 1` : `num_list`의 0번 인덱스부터 `b`번 인덱스까지
- `n = 2` : `num_list`의 `a`번 인덱스부터 마지막 인덱스까지
- `n = 3` : `num_list`의 `a`번 인덱스부터 `b`번 인덱스까지
- `n = 4` : `num_list`의 `a`번 인덱스부터 `b`번 인덱스까지 `c` 간격으로

올바르게 슬라이싱한 리스트를 return하도록 solution 함수를 완성해주세요.
 */

function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;

  let result;
  switch (n) {
    case 1:
      return (result = num_list.slice(0, b + 1));
    case 2:
      return (result = num_list.slice(a, num_list.length));
    case 3:
      return (result = num_list.slice(a, b + 1));
    case 4:
      const curStr = num_list.slice(a, b + 1);
      return (result = curStr.filter((_, i) => i % c === 0));
  }
}

console.log(solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
