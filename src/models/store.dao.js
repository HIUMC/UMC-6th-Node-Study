import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { insertReviewSql,existReview, getReviewID, insertMissionSql, getMissionId} from "./store.sql.js";

export const pushReview = async (data) => {
    try{
        const conn = await pool.getConnection();
        
        const [confirm] = await pool.query(existReview, [data.user_id, data.store_id]);

        if(confirm[0].isExistStore){
            conn.release();
            return -1;
        }

        const result = await pool.query(insertReviewSql, [data.user_id, data.store_id, data.article, data.score]);

        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getReview = async (reviewId) => {
    try {
        const conn = await pool.getConnection();
        const [review] = await pool.query(getReviewID, reviewId);

        console.log(review);

        if(review.length == 0){
            return -1;
        }

        conn.release();
        return review;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}


export const pushMission = async (data) => {
    try{
        const conn = await pool.getConnection();

        const result = await pool.query(insertMissionSql, [data.store_id, data.reward, data.mission_spec]);

        conn.release();
        return result[0].insertId;
    }

    catch(err){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getMission = async(missionId) => {
    try{
        const conn = await pool.getConnection();

        const [mission] = await pool.query(getMissionId, missionId);

        console.log(mission);

        if(mission.length==0){
            return -1;
        }

        conn.release();
        return mission;

    }

    catch(err){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}