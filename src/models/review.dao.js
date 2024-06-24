import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { getUserID, insertReview } from "./review.sql.js";

export const addReview = async (data) => {
    try{
        const conn = await pool.getConnection();
        
        const confirm = await pool.query(getUserID);

        if(confirm == null){
            conn.release();
            return -1;
        }

        const result = await pool.query(insertReview, [data.member_id, data.store_id, data.article, data.score]);

        conn.release();
        return result[0].insertReview;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
