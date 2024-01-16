/**
 *  문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다. queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다. my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution 함수를 작성해 주세요.
 */

function solutiondd(my_string, queries) {
  const str = [...my_string];
  queries.forEach(([s, e]) => {
    while (s < e) {
      // s부터 시작해서 e까지
      [str[s], str[e]] = [str[e], str[s]];
      s++;
      e--; // s, e가 같은 값이 되면 멈추도록
      console.log(s, e);
    }
  });
  return str.join("");
}
