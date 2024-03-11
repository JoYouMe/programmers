/**
문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.
**/

function solution(myString, pat) {
  // myString의 A를 B로 B를 A로
  const switchSwith = [...myString]
    .map((e) => (e === "A" ? "B" : "A"))
    .join("");
  // 연속하는 부분 문자열 중 pat이 있으면 1 아니면 0
  return switchSwith.includes(pat) ? 1 : 0;
}

console.log(solution("ABBAA", "AABB"));
