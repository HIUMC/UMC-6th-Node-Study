// store.route.js

import express from "express";
import asyncHandler from 'express-async-handler';

import { 
    addNewProduct, 
    fetchAllProducts, 
    fetchProductById, 
    modifyProduct, 
    removeProduct 
} from "../controllers/store.controller.js";

// express 라우터 객체 생성
export const storeRouter = express.Router();

// 새로운 상품을 추가하는 경로
storeRouter.post('/add', asyncHandler(addNewProduct));

// 모든 상품 목록을 조회하는 경로
storeRouter.get('/all', asyncHandler(fetchAllProducts));

// 특정 상품을 ID로 조회하는 경로
storeRouter.get('/:id', asyncHandler(fetchProductById));

// 특정 상품을 업데이트하는 경로
storeRouter.put('/:id', asyncHandler(modifyProduct));

// 특정 상품을 삭제하는 경로
storeRouter.delete('/:id', asyncHandler(removeProduct));

// 가게 리뷰 추가

storeRouter.post('/store/review', asyncHandler(addReviewToStore));
