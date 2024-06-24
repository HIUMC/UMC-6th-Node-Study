export const getUserID = "SELECT * FROM user WHERE user_id = ?";
export const insertReview = "INSERT INTO review (member_id, store_id, body, score) VALUES (?, ?, ?, ?);"