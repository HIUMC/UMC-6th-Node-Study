// models/review.dao.js

import { pool } from "../../config/db.config.js"; // 데이터베이스 연결을 위한 pool 객체 import
import { BaseError } from "../../config/error.js"; // 커스텀 오류 클래스 import
import { status } from "../../config/response.status.js"; // HTTP 상태 코드 import
import { insertReviewSql, getReviewByIdSql, updateReviewSql, deleteReviewSql } from "./review.sql.js"; // SQL 쿼리들을 import

// 리뷰 추가 함수
export const addReview = async (userId, content, rating, timestamp, storeId) => {
    try {
        const conn = await pool.getConnection(); // 데이터베이스 커넥션 획득

        // 리뷰 추가를 위한 SQL 쿼리 실행
        const result = await pool.query(insertReviewSql, [userId, content, rating, timestamp, storeId]);

        conn.release(); // 커넥션 반환

        return result.insertId; // 추가된 리뷰의 ID 반환
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG); // 오류 발생 시 커스텀 에러 throw
    }
}

// 특정 리뷰 조회 함수
export const getReviewById = async (reviewId) => {
    try {
        const conn = await pool.getConnection(); // 데이터베이스 커넥션 획득

        // 특정 리뷰 ID로 리뷰 조회를 위한 SQL 쿼리 실행
        const [review] = await pool.query(getReviewByIdSql, reviewId);

        conn.release(); // 커넥션 반환

        if (review.length === 0) {
            return -1; // 리뷰가 존재하지 않을 경우 -1 반환
        }

        return review[0]; // 조회된 리뷰 반환
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG); // 오류 발생 시 커스텀 에러 throw
    }
}

// 리뷰 업데이트 함수
export const updateReview = async (reviewId, content, rating, timestamp, storeId) => {
    try {
        const conn = await pool.getConnection(); // 데이터베이스 커넥션 획득

        // 리뷰 업데이트를 위한 SQL 쿼리 실행
        const result = await pool.query(updateReviewSql, [content, rating, timestamp, storeId, reviewId]);

        conn.release(); // 커넥션 반환

        if (result.affectedRows === 0) {
            return -1; // 업데이트된 행이 없을 경우 -1 반환
        }

        return reviewId; // 업데이트된 리뷰의 ID 반환
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG); // 오류 발생 시 커스텀 에러 throw
    }
}

// 리뷰 삭제 함수
export const deleteReview = async (reviewId) => {
    try {
        const conn = await pool.getConnection(); // 데이터베이스 커넥션 획득

        // 리뷰 삭제를 위한 SQL 쿼리 실행
        const result = await pool.query(deleteReviewSql, reviewId);

        conn.release(); // 커넥션 반환

        if (result.affectedRows === 0) {
            return -1; // 삭제된 행이 없을 경우 -1 반환
        }

        return reviewId; // 삭제된 리뷰의 ID 반환
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG); // 오류 발생 시 커스텀 에러 throw
    }
}
