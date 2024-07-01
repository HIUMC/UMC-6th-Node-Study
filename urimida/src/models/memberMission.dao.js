// models/memberMission.dao.js

import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { insertMemberMissionSql, selectMemberMissionByMemberAndMissionSql } from "./memberMission.sql.js";

export const addMemberMission = async (data) => {
    try {
        const conn = await pool.getConnection();

        // 이미 도전 중인 미션인지 확인
        const [existingMission] = await pool.query(selectMemberMissionByMemberAndMissionSql, [data.memberId, data.missionId]);
        if (existingMission.length > 0) {
            conn.release();
            return -1;
        }

        const result = await pool.query(insertMemberMissionSql, [data.memberId, data.missionId, data.status]);
        conn.release();
        return result[0].insertId;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
