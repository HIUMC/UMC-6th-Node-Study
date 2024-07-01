// models/region.dao.js

import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { 
    insertRegionSql, 
    selectAllRegions, 
    selectRegionById, 
    updateRegionSql, 
    deleteRegionSql 
} from "./region.sql.js";

// 새로운 지역을 데이터베이스에 삽입
export const addRegion = async (data) => {
    try {
        const conn = await pool.getConnection();
        const result = await pool.query(insertRegionSql, [data.name, data.createdAt, data.updatedAt]);
        conn.release();
        return result[0].insertId;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 모든 지역을 조회
export const getRegions = async () => {
    try {
        const conn = await pool.getConnection();
        const [regions] = await pool.query(selectAllRegions);
        conn.release();
        return regions;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 특정 지역을 ID로 조회
export const getRegionById = async (regionId) => {
    try {
        const conn = await pool.getConnection();
        const [region] = await pool.query(selectRegionById, regionId);
        conn.release();
        if (region.length == 0) {
            return -1;
        }
        return region;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 특정 지역을 업데이트
export const updateRegion = async (regionId, data) => {
    try {
        const conn = await pool.getConnection();
        const result = await pool.query(updateRegionSql, [data.name, data.updatedAt, regionId]);
        conn.release();
        if (result[0].affectedRows == 0) {
            return -1;
        }
        return result[0].insertId;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 특정 지역을 삭제
export const deleteRegion = async (regionId) => {
    try {
        const conn = await pool.getConnection();
        const result = await pool.query(deleteRegionSql, regionId);
        conn.release();
        if (result[0].affectedRows == 0) {
            return -1;
        }
        return result[0].insertId;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}


// 미션 1
import { insertStoreToRegionSql, selectRegionByIdSql } from "./region.sql.js";

export const addStoreToRegion = async (data) => {
    try {
        const conn = await pool.getConnection();

        const [region] = await pool.query(selectRegionByIdSql, data.regionId);
        if (region.length === 0) {
            conn.release();
            return -1;
        }

        const result = await pool.query(insertStoreToRegionSql, [data.regionId, data.name, data.address, data.score]);
        conn.release();
        return result[0].insertId;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
