/**
 *  정수 배열 `arr`와 2차원 정수 배열 `queries`이 주어집니다. `queries`의 원소는 각각 하나의 `query`를 나타내며, `[i, j]` 꼴입니다.

각 `query`마다 순서대로 `arr[i]`의 값과 `arr[j]`의 값을 서로 바꿉니다.

위 규칙에 따라 `queries`를 처리한 이후의 `arr`를 return 하는 solution 함수를 완성해 주세요.
 */

function solution(arr, queries) {
  const nums = [...arr];
  for (let i = 0; i < queries.length; i++) {
    let a = queries[i][0];
    let b = queries[i][1];
    [nums[a], nums[b]] = [nums[b], nums[a]];
  }
  return nums;
}

// foreach 활용
function solution(arr, queries) {
  const nums = [...arr];
  queries.forEach(([a, b]) => {
    // element를 array로 감싸서 보내
    console.log(a, b);
    [nums[a], nums[b]] = [nums[b], nums[a]];
  });
  return nums;
}
