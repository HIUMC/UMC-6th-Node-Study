import express from "express";
import asyncHandler from 'express-async-handler';
import {addNewReview, addNewMission, reviewPreview} from '../controllers/store.controller.js';

export const storeRouter = express.Router({mergeParams : true});

storeRouter.post('/:storeId/addreview', asyncHandler(addNewReview));
storeRouter.post('/:storeId/mission', asyncHandler(addNewMission));
storeRouter.get('/:storeId/review', asyncHandler(reviewPreview));