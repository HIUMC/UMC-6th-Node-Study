// models/store.sql.js

// 새로운 상품을 데이터베이스에 삽입하는 SQL 쿼리
export const insertProductSql = `
INSERT INTO products (name, price, description, category, stock)
VALUES (?, ?, ?, ?, ?);
`;

// 모든 상품을 조회하는 SQL 쿼리
export const selectAllProducts = `
SELECT * FROM products;
`;

// 특정 상품을 ID로 조회하는 SQL 쿼리
export const selectProductById = `
SELECT * FROM products WHERE product_id = ?;
`;

// 특정 상품을 업데이트하는 SQL 쿼리
export const updateProductSql = `
UPDATE products SET name = ?, price = ?, description = ?, category = ?, stock = ? WHERE product_id = ?;
`;

// 특정 상품을 삭제하는 SQL 쿼리
export const deleteProductSql = `
DELETE FROM products WHERE product_id = ?;
`;

// 미션2 가게 리뷰 추가

export const AddReviewToStoreDTO = (review) => {
    return {
        memberId: review.memberId,
        storeId: review.storeId,
        body: review.body,
        score: review.score,
        createdAt: review.createdAt,
        updatedAt: review.updatedAt
    };
}
