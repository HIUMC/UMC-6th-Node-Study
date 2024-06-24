import express from 'express';
import asyncHandler from 'express-async-handler';
import { storeReview } from "../controllers/review.controller.js";

export const reviewRouter = express.Router();

reviewRouter.post('/review',asyncHandler(storeReview));