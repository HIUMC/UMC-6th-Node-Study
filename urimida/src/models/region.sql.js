// models/region.sql.js

// 새로운 지역을 데이터베이스에 삽입하는 SQL 쿼리
export const insertRegionSql = `
INSERT INTO region (name, created_at, updated_at)
VALUES (?, ?, ?);
`;

// 모든 지역을 조회하는 SQL 쿼리
export const selectAllRegions = `
SELECT * FROM region;
`;

// 특정 지역을 ID로 조회하는 SQL 쿼리
export const selectRegionById = `
SELECT * FROM region WHERE id = ?;
`;

// 특정 지역을 업데이트하는 SQL 쿼리
export const updateRegionSql = `
UPDATE region SET name = ?, updated_at = ? WHERE id = ?;
`;

// 특정 지역을 삭제하는 SQL 쿼리
export const deleteRegionSql = `
DELETE FROM region WHERE id = ?;
`;

// 미션 1

export const insertStoreToRegionSql = `
INSERT INTO store (region_id, name, address, score, created_at, updated_at)
VALUES (?, ?, ?, ?, NOW(), NOW());
`;

export const selectRegionByIdSql = `
SELECT * FROM region WHERE id = ?;
`;

