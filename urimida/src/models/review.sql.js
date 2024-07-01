// models/review.sql.js

export const insertReviewSql = `
INSERT INTO reviews (user_id, content, rating, timestamp, store_id)
VALUES (?, ?, ?, ?, ?);
`;

export const getReviewByIdSql = `
SELECT * FROM reviews WHERE review_id = ?;
`;

export const updateReviewSql = `
UPDATE reviews SET content = ?, rating = ?, timestamp = ?, store_id = ? WHERE review_id = ?;
`;

export const deleteReviewSql = `
DELETE FROM reviews WHERE review_id = ?;
`;
