// models/mission.sql.js

// 새로운 미션을 데이터베이스에 삽입하는 SQL 쿼리
export const insertMissionSql = `
INSERT INTO mission (store_id, reward, deadline, mission_spec, created_at, updated_at)
VALUES (?, ?, ?, ?, ?, ?);
`;

// 모든 미션을 조회하는 SQL 쿼리
export const selectAllMissions = `
SELECT * FROM mission;
`;

// 특정 미션을 ID로 조회하는 SQL 쿼리
export const selectMissionById = `
SELECT * FROM mission WHERE id = ?;
`;

// 특정 미션을 업데이트하는 SQL 쿼리
export const updateMissionSql = `
UPDATE mission SET store_id = ?, reward = ?, deadline = ?, mission_spec = ?, updated_at = ? WHERE id = ?;
`;

// 특정 미션을 삭제하는 SQL 쿼리
export const deleteMissionSql = `
DELETE FROM mission WHERE id = ?;
`;


// 특정 가게에 미션 추가

export const insertMissionToStoreSql = `
INSERT INTO mission (store_id, reward, deadline, mission_spec, created_at, updated_at)
VALUES (?, ?, ?, ?, NOW(), NOW());
`;

export const selectStoreByIdSql = `
SELECT * FROM store WHERE id = ?;
`;
