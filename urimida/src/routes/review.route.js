import express from "express";
import asyncHandler from 'express-async-handler';
import { addReview } from "../controllers/review.controller.js"; // 리뷰 컨트롤러 임포트

export const reviewRouter = express.Router();

// 리뷰 작성 엔드포인트
reviewRouter.post('/add', asyncHandler(addReview));
