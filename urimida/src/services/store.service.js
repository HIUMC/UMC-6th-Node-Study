// 필요한 모듈과 함수를 가져옵니다.
import { BaseError } from "../../config/error.js"; // 사용자 정의 오류 클래스
import { status } from "../../config/response.status.js"; // 응답 상태 코드
import { 
    addProduct, 
    getProducts, 
    getProductById, 
    updateProduct, 
    deleteProduct 
} from "../models/store.dao.js"; // 상품 DAO 함수들

// 새로운 상품을 추가하는 비동기 함수 정의
export const addNewProduct = async (body) => {
    // body 객체에서 필요한 정보를 추출하여 addProduct 함수를 호출
    const newProductData = await addProduct({
        'name': body.name,        // 상품 이름
        'price': body.price,      // 상품 가격
        'description': body.description, // 상품 설명
        'category': body.category, // 상품 카테고리
        'stock': body.stock       // 상품 재고
    });

    // 새로운 상품 데이터가 유효하지 않은 경우 오류를 발생시킴
    if(newProductData == -1){
        throw new BaseError(status.PRODUCT_ALREADY_EXIST); // 상품 중복 오류
    } else {
        // 유효한 경우 추가된 상품 데이터를 반환
        return newProductData;
    }
}

// 모든 상품 목록을 조회하는 비동기 함수 정의
export const fetchAllProducts = async () => {
    // getProducts 함수를 호출하여 모든 상품 데이터를 가져옴
    const products = await getProducts();
    // 가져온 상품 데이터를 반환
    return products;
}

// 특정 상품을 ID로 조회하는 비동기 함수 정의
export const fetchProductById = async (productId) => {
    // getProductById 함수를 호출하여 특정 상품 데이터를 가져옴
    const product = await getProductById(productId);

    // 해당 상품이 없는 경우 오류를 발생시킴
    if(!product){
        throw new BaseError(status.PRODUCT_NOT_FOUND); // 상품 없음 오류
    } else {
        // 상품이 있는 경우 해당 상품 데이터를 반환
        return product;
    }
}

// 특정 상품을 업데이트하는 비동기 함수 정의
export const modifyProduct = async (productId, body) => {
    // updateProduct 함수를 호출하여 특정 상품 데이터를 업데이트
    const updatedProduct = await updateProduct(productId, {
        'name': body.name,        // 상품 이름
        'price': body.price,      // 상품 가격
        'description': body.description, // 상품 설명
        'category': body.category, // 상품 카테고리
        'stock': body.stock       // 상품 재고
    });

    // 업데이트된 상품 데이터가 유효하지 않은 경우 오류를 발생시킴
    if(updatedProduct == -1){
        throw new BaseError(status.PRODUCT_NOT_FOUND); // 상품 없음 오류
    } else {
        // 유효한 경우 업데이트된 상품 데이터를 반환
        return updatedProduct;
    }
}

// 특정 상품을 삭제하는 비동기 함수 정의
export const removeProduct = async (productId) => {
    // deleteProduct 함수를 호출하여 특정 상품 데이터를 삭제
    const deletedProduct = await deleteProduct(productId);

    // 삭제된 상품 데이터가 유효하지 않은 경우 오류를 발생시킴
    if(deletedProduct == -1){
        throw new BaseError(status.PRODUCT_NOT_FOUND); // 상품 없음 오류
    } else {
        // 유효한 경우 삭제된 상품 데이터를 반환
        return deletedProduct;
    }
}

// 가게 리뷰 추가

import { addReviewToStore } from "../models/store.dao.js";
import { AddReviewToStoreDTO } from "../dtos/store.dto.js";

export const addNewReviewToStore = async (review) => {
    const reviewData = AddReviewToStoreDTO(review);
    const reviewId = await addReviewToStore(reviewData);
    if (reviewId === -1) {
        throw new BaseError(status.NOT_FOUND);
    }
    return reviewId;
}
