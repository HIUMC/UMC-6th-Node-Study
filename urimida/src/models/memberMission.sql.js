// models/memberMission.sql.js

export const insertMemberMissionSql = `
INSERT INTO member_mission (member_id, mission_id, status, created_at, updated_at)
VALUES (?, ?, ?, NOW(), NOW());
`;

export const selectMemberMissionByMemberAndMissionSql = `
SELECT * FROM member_mission WHERE member_id = ? AND mission_id = ?;
`;
