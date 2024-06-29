// models/user.dao.js

import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { connectFoodCategory, confirmEmail, getUserID, insertUserSql, getPreferToUserID, confirmMission, userAddMissionSql, getUserMissionId, getuserReviewByReviewId, getuserReviewByReviewIdAtFirst,
    getuserMissionByMissionIdAtFirst, getuserMissionByMissionId} from "./user.sql.js";

// User 데이터 삽입
export const addUser = async (data) => {
    try{
        const conn = await pool.getConnection();
        
        const [confirm] = await pool.query(confirmEmail, data.email);

        if(confirm[0].isExistEmail){
            conn.release();
            return -1;
        }

        const result = await pool.query(insertUserSql, [data.email, data.name, data.gender, data.birth, data.addr, data.specAddr, data.phone]);

        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 사용자 정보 얻기
export const getUser = async (userId) => {
    try {
        const conn = await pool.getConnection();
        const [user] = await pool.query(getUserID, userId);

        console.log(user);

        if(user.length == 0){
            return -1;
        }

        conn.release();
        return user;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 음식 선호 카테고리 매핑
export const setPrefer = async (userId, foodCategoryId) => {
    try {
        const conn = await pool.getConnection();
        
        await pool.query(connectFoodCategory, [foodCategoryId, userId]);

        conn.release();
        
        return;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);

    }
}

// 사용자 선호 카테고리 반환
export const getUserPreferToUserID = async (userID) => {
    try {
        const conn = await pool.getConnection();
        const prefer = await pool.query(getPreferToUserID, userID);

        conn.release();

        return prefer;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const userAddMission = async(data) => {
    try{
        const conn = await pool.getConnection();

        const [confirm] = await pool.query(confirmMission, [data.user_id, data.mission_id]);

        if(confirm[0].isExistMission){
            conn.release();
            return -1;
        }

        const result = await pool.query(userAddMissionSql, [data.user_id, data.mission_id, data.status]);

        conn.release();
        return result[0].insertId;

    }catch(err){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }   

}

export const getuserMission = async (user_mission_id) => {
    try{
        const conn = await pool.getConnection();

        const [user_mission] = await pool.query(getUserMissionId, user_mission_id);

        console.log(user_mission);

        if(user_mission.length == 0){
            return -1;
        }

        conn.release();
        return user_mission;

    }catch(err){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const userSeeReview = async (cursorId, size, userId)  => {
    try {
        const conn = await pool.getConnection();

        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            const [reviews] = await pool.query(getuserReviewByReviewIdAtFirst, [parseInt(userId), parseInt(size)]);
            conn.release();
            return reviews;
    
        }else{
            const [reviews] = await pool.query(getuserReviewByReviewId, [parseInt(userId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return reviews;    
        }
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const userSeeMission = async (cursorId, size, userId) => {
    try {
        const conn = await pool.getConnection();

        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            const [missions] = await pool.query(getuserMissionByMissionIdAtFirst, [parseInt(userId), parseInt(size)]);
            conn.release();
            return missions;
    
        }else{
            const [missions] = await pool.query(getuserMissionByMissionId, [parseInt(userId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return missions;    
        }
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}