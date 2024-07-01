// dtos/store.dto.js

// 새로운 상품을 추가하기 위한 DTO
export const AddProductDTO = (product) => {
    return {
        name: product.name,        // 상품 이름
        price: product.price,      // 상품 가격
        description: product.description, // 상품 설명
        category: product.category, // 상품 카테고리
        stock: product.stock       // 상품 재고
    };
}

// 조회된 상품을 반환하기 위한 DTO
export const ProductDTO = (product) => {
    return {
        productId: product.product_id, // 상품 ID
        name: product.name,            // 상품 이름
        price: product.price,          // 상품 가격
        description: product.description, // 상품 설명
        category: product.category,    // 상품 카테고리
        stock: product.stock           // 상품 재고
    };
}

// 특정 상품을 업데이트하기 위한 DTO
export const UpdateProductDTO = (product) => {
    return {
        name: product.name,        // 상품 이름
        price: product.price,      // 상품 가격
        description: product.description, // 상품 설명
        category: product.category, // 상품 카테고리
        stock: product.stock       // 상품 재고
    };
}


// 미션 2 가게 립뷰 추가

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
