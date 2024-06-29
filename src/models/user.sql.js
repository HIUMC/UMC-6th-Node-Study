// models/user.sql.js

export const insertUserSql = "INSERT INTO user (email, user_name, gender, birth, user_address, user_spec_address, user_phone) VALUES (?, ?, ?, ?, ?, ?, ?);";

export const getUserID = "SELECT * FROM user WHERE user_id = ?";

export const connectFoodCategory = "INSERT INTO user_favor_category (f_category_id, user_id) VALUES (?, ?);";

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistEmail";

export const getPreferToUserID =
"SELECT ufc.uf_category_id, ufc.f_category_id, ufc.user_id, fcl.f_category_name "
+ "FROM user_favor_category ufc JOIN food_category_list fcl on ufc.f_category_id = fcl.f_category_id "
+ "WHERE ufc.user_id = ? ORDER BY ufc.f_category_id ASC;";

export const confirmMission = "SELECT EXISTS(SELECT 1 FROM user_mission WHERE user_id = ? and mission_id = ?) as isExistMission";

export const userAddMissionSql ="INSERT INTO user_mission (user_id, mission_id, status) VALUES (?, ?, ?);";

export const getUserMissionId = "SELECT * FROM user_mission WHERE user_mission_id = ?";


export const getuserReviewByReviewId = 
"SELECT s.store_name, s.store_id, r.review_id, r.score, r.article "
+ "FROM review r JOIN store s on r.store_id = s.store_id "
+ "WHERE r.user_id = ? AND r.review_id < ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"

export const getuserReviewByReviewIdAtFirst = 
"SELECT s.store_name, s.store_id, r.review_id, r.score, r.article "
+ "FROM review r JOIN store s on r.store_id = s.store_id "
+ "WHERE r.user_id = ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"

export const getuserMissionByMissionId = 
"SELECT s.store_name, m.mission_spec, m.reward " +
"FROM user_mission um " +
"JOIN mission m ON um.mission_id = m.mission_id " +
"JOIN store s ON m.store_id = s.store_id " +
"WHERE um.user_id = ? " +
"AND um.mission_id < ? " +
"AND um.status = '진행중' " +
"ORDER BY um.user_mission_id DESC " +
"LIMIT ?;";

export const getuserMissionByMissionIdAtFirst = 
"SELECT s.store_name, m.mission_spec, m.reward " +
"FROM user_mission um " +
"JOIN mission m ON um.mission_id = m.mission_id " +
"JOIN store s ON m.store_id = s.store_id " +
"WHERE um.user_id = ? " +
"AND um.status = '진행중' " +
"ORDER BY um.user_mission_id DESC " +
"LIMIT ?;";