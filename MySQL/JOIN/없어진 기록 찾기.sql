-- 천재지변으로 인해 일부 데이터가 유실되었습니다. 입양을 간 기록은 있는데, 보호소에 들어온 기록이 없는 동물의 ID와 이름을 ID 순으로 조회하는 SQL문을 작성해주세요.

SELECT AO.ANIMAL_ID, AO.NAME
FROM ANIMAL_OUTS AS AO
LEFT JOIN ANIMAL_INS AS AI
ON AI.ANIMAL_ID = AO.ANIMAL_ID
WHERE AI.ANIMAL_ID IS NULL
ORDER BY AI.ANIMAL_ID DESC, AI.NAME
