/**
 *  정수 배열 `arr`와 2차원 정수 배열 `queries`이 주어집니다. `queries`의 원소는 각각 하나의 `query`를 나타내며, `[s, e, k]` 꼴입니다.

각 `query`마다 순서대로 `s` ≤ `i` ≤ `e`인 모든 `i`에 대해 `k`보다 크면서 가장 작은 `arr[i]`를 찾습니다.

각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.

단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.
 */

function solution(arr, queries) {
  let result = [];
  queries.forEach(([s, e, k]) => {
    let found = arr
      .filter((v, i) => i >= s && i <= e && v > k)
      .sort((a, b) => a - b)[0];
    result.push(found ? found : -1);
  });
  return result;
}
