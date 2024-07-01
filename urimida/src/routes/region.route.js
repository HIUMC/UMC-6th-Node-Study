// routes/region.route.js

import express from "express";
import asyncHandler from 'express-async-handler';
import { addNewRegion, fetchAllRegions, fetchRegionById, modifyRegion, removeRegion } from "../controllers/region.controller.js";

// express 라우터 객체 생성
export const regionRouter = express.Router();

// 새로운 지역을 추가하는 경로
regionRouter.post('/add', asyncHandler(addNewRegion));

// 모든 지역을 조회하는 경로
regionRouter.get('/all', asyncHandler(fetchAllRegions));

// 특정 지역을 ID로 조회하는 경로
regionRouter.get('/:id', asyncHandler(fetchRegionById));

// 특정 지역을 업데이트하는 경로
regionRouter.put('/:id', asyncHandler(modifyRegion));

// 특정 지역을 삭제하는 경로
regionRouter.delete('/:id', asyncHandler(removeRegion));

// routes/region.route.js

// 미션 1
regionRouter.post('/region/:regionId/store', asyncHandler(addStoreToRegion));
