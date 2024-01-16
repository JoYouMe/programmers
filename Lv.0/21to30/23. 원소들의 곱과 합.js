/**
 *  정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.
 */

function solution(num_list) {
    const answer = 0;
    const res1 = 1;
    const res2 = 0;
    for(const i=0; i<num_list.length; i++){
        res1 *= num_list[i];
        res2 += num_list[i];
    }
    if(res1 < (res2)**2){
        answer = 1;
    }
    return answer;