/**
 *  1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.

- 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
- 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q) 점을 얻습니다.
    
    2
    
- 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
- 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
- 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.

네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 `a`, `b`, `c`, `d`로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
 */

function solution(a, b, c, d) {
  const nums = [a, b, c, d];
  const appear = {}; // 배열을 순회하며 등장 횟수를 기록할 예정

  for (let i = 0; i < 4; i++) {
    const num = nums[i];
    appear[num] = (appear[num] || 0) + 1;
  }

  // Object.values와 Math.max를 이용해, 가장 큰 값을 가져옴
  const count = Math.max(...Object.values(appear)); // 각각의 제일 많이 등장한 개수
  const entries = Object.entries(appear).sort((a, b) => a[1] - b[1]); // 등장횟수의 객체를 키와 값을 배열로 바꾸고 등장 횟수 순으로 내림차순

  let answer = 0;
  switch (count) {
    case 4:
      answer = 1111 * a;
      break;
    case 3:
      answer = (10 * Number(entries[1][0]) + Number(entries[0][0])) ** 2; // entries 배열에서 정렬된 첫번째 값이 p, 두번째 값이 q
      break;
    case 2:
      if (entries.length === 2) {
        // 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p,q라고 하면, count와 entries가 2개인 경우를 찾아 계산
        answer =
          (Number(entries[1][0]) + Number(entries[0][0])) *
          Math.abs(Number(entries[1][0]) - Number(entries[0][0]));
      }
      if (entries.length === 3) {
        // 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r이라면 등장 횟수가 3개이므로 count의 개수가 2개인 경우에 entries가 3개인 경우임
        const newEntries = entries.filter((el) => el[1] === 1);
        answer = Number(newEntries[1][0]) * Number(newEntries[0][0]);
      }
      break;
    case 1:
      answer = Math.min(...nums); // 기존의 nums 배열에서 가장 작은 최소값을 찾음
      break;
  }

  return answer;
}
