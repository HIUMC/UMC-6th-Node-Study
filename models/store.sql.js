
export const existReview = "SELECT EXISTS(SELECT 1 FROM review WHERE user_id = ? and store_id = ?) as isExistReview";

export const insertReviewSql = "INSERT INTO review(user_id, store_id, article, score) VALUES (?, ?, ?, ?);";

export const getReviewID = "SELECT * FROM review WHERE review_id = ?";

export const insertMissionSql = "INSERT INTO mission(store_id, reward, mission_spec) VALUES (?, ?, ?);";

export const getMissionId = "SELECT * FROM mission WHERE mission_id = ?";

// 새로 추가됨

export const getReviewByReviewId = 
"SELECT u.user_name, u.user_id, r.review_id, r.score, r.article "
+ "FROM review r JOIN user u on r.user_id = u.user_id "
+ "WHERE r.store_id = ? AND r.review_id < ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"

export const getReviewByReviewIdAtFirst = 
"SELECT u.user_name, u.user_id, r.review_id, r.score, r.article "
+ "FROM review r JOIN user u on r.user_id = u.user_id "
+ "WHERE r.store_id = ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"