// models/mission.dao.js

//특정 가게에 미션 추가
import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { insertMissionToStoreSql, selectStoreByIdSql } from "./mission.sql.js";

export const addMissionToStore = async (data) => {
    try {
        const conn = await pool.getConnection();

        const [store] = await pool.query(selectStoreByIdSql, data.storeId);
        if (store.length === 0) {
            conn.release();
            return -1;
        }

        const result = await pool.query(insertMissionToStoreSql, [data.storeId, data.reward, data.deadline, data.missionSpec]);
        conn.release();
        return result[0].insertId;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
