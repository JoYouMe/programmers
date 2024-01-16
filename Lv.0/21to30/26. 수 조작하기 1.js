/**
 *  정수 `n`과 문자열 `control`이 주어집니다. `control`은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, `control`의 앞에서부터 순서대로 문자에 따라 `n`의 값을 바꿉니다.
    위 규칙에 따라 `n`을 바꿨을 때 가장 마지막에 나오는 `n`의 값을 return 하는 solution 함수를 완성해 주세요.
 */

function solution(n, control) {
  const str = [...control];
  let result;
  return str.reduce((result, c) => {
    switch (c) {
      case "w":
        return result + 1;
      case "s":
        return result - 1;
      case "d":
        return result + 10;
      case "a":
        return result - 10;
    }
    return result;
  }, n);
}
