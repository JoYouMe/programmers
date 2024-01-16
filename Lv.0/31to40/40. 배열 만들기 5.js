/**
 *  문자열 배열 `intStrs`와 정수 `k`, `s`, `l`가 주어집니다. `intStrs`의 원소는 숫자로 이루어져 있습니다.
    배열 `intStrs`의 각 원소마다 `s`번 인덱스에서 시작하는 길이 `l`짜리 부분 문자열을 잘라내 정수로 변환합니다. 이때 변환한 정수값이 `k`보다 큰 값들을 담은 배열을 return 하는 solution 함수를 완성해 주세요.
 */

function solution(intStrs, k, s, l) {
  return intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);
}
