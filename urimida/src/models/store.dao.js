// models/store.dao.js

// 필요한 모듈과 함수를 가져옵니다.
import { pool } from "../../config/db.config.js"; // 데이터베이스 연결 풀
import { BaseError } from "../../config/error.js"; // 사용자 정의 오류 클래스
import { status } from "../../config/response.status.js"; // 응답 상태 코드
import { insertProductSql, selectAllProducts, selectProductById, updateProductSql, deleteProductSql } from "./store.sql.js"; // SQL 쿼리

// 새로운 상품을 데이터베이스에 삽입
export const addProduct = async (data) => {
    try {
        // 데이터베이스 연결
        const conn = await pool.getConnection();

        // insertProductSql 쿼리를 사용하여 새로운 상품 추가
        const result = await pool.query(insertProductSql, [data.name, data.price, data.description, data.category, data.stock]);

        // 연결 해제
        conn.release();
        // 삽입된 상품의 ID 반환
        return result[0].insertId;

    } catch (err) {
        // 오류 발생 시 사용자 정의 오류를 던짐
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 모든 상품을 조회
export const getProducts = async () => {
    try {
        // 데이터베이스 연결
        const conn = await pool.getConnection();

        // selectAllProducts 쿼리를 사용하여 모든 상품 조회
        const [products] = await pool.query(selectAllProducts);

        // 연결 해제
        conn.release();
        // 조회된 모든 상품 반환
        return products;

    } catch (err) {
        // 오류 발생 시 사용자 정의 오류를 던짐
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 특정 상품을 ID로 조회
export const getProductById = async (productId) => {
    try {
        // 데이터베이스 연결
        const conn = await pool.getConnection();

        // selectProductById 쿼리를 사용하여 특정 상품 조회
        const [product] = await pool.query(selectProductById, productId);

        // 연결 해제
        conn.release();

        // 상품이 없는 경우 -1 반환
        if (product.length == 0) {
            return -1;
        }

        // 조회된 상품 반환
        return product;

    } catch (err) {
        // 오류 발생 시 사용자 정의 오류를 던짐
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 특정 상품을 업데이트
export const updateProduct = async (productId, data) => {
    try {
        // 데이터베이스 연결
        const conn = await pool.getConnection();

        // updateProductSql 쿼리를 사용하여 특정 상품 업데이트
        const result = await pool.query(updateProductSql, [data.name, data.price, data.description, data.category, data.stock, productId]);

        // 연결 해제
        conn.release();

        // 업데이트된 상품이 없는 경우 -1 반환
        if (result[0].affectedRows == 0) {
            return -1;
        }

        // 업데이트된 상품 ID 반환
        return result[0].insertId;

    } catch (err) {
        // 오류 발생 시 사용자 정의 오류를 던짐
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 특정 상품을 삭제
export const deleteProduct = async (productId) => {
    try {
        // 데이터베이스 연결
        const conn = await pool.getConnection();

        // deleteProductSql 쿼리를 사용하여 특정 상품 삭제
        const result = await pool.query(deleteProductSql, productId);

        // 연결 해제
        conn.release();

        // 삭제된 상품이 없는 경우 -1 반환
        if (result[0].affectedRows == 0) {
            return -1;
        }

        // 삭제된 상품 ID 반환
        return result[0].insertId;

    } catch (err) {
        // 오류 발생 시 사용자 정의 오류를 던짐
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 미션 2 가게 리뷰 추가
import { insertReviewToStoreSql, selectStoreByIdSql } from "./store.sql.js";

export const addReviewToStore = async (data) => {
    try {
        const conn = await pool.getConnection();

        const [store] = await pool.query(selectStoreByIdSql, data.storeId);
        if (store.length === 0) {
            conn.release();
            return -1;
        }

        const result = await pool.query(insertReviewToStoreSql, [data.memberId, data.storeId, data.body, data.score]);
        conn.release();
        return result[0].insertId;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

