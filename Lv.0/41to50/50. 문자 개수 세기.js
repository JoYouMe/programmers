/**
 *  알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수,
 *  my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.
 */

// ASCII 값 65 = A, 97 = a

function solution(my_string) {
  let result = new Array(52).fill(0);
  [...my_string].forEach(
    (
      e // 대문자와 소문자의 ASCII 값을 result 배열의 0-51 범위에 매핑
    ) =>
      result[e.charCodeAt() < 97 ? e.charCodeAt() - 65 : e.charCodeAt() - 71]++
  );
  return result;
}

console.log(solution("Programmers"));
