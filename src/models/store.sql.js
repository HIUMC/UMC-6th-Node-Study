
export const existReview = "SELECT EXISTS(SELECT 1 FROM review WHERE user_id = ? and store_id = ?) as isExistStore";

export const insertReviewSql = "INSERT INTO review(user_id, store_id, article, score) VALUES (?, ?, ?, ?);";

export const getReviewID = "SELECT * FROM review WHERE review_id = ?";

export const insertMissionSql = "INSERT INTO mission(store_id, reward, mission_spec) VALUES (?, ?, ?);";

export const getMissionId = "SELECT * FROM mission WHERE mission_id = ?";