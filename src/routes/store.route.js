import express from "express";
import asyncHandler from 'express-async-handler';
import {addNewReview, addNewMission} from '../controllers/store.controller.js';

export const storeRouter = express.Router();

storeRouter.post('/review/user', asyncHandler(addNewReview));
storeRouter.post('/mission', asyncHandler(addNewMission));