import express from "express";
import asyncHandler from 'express-async-handler';
import { userSignin, userNewMission,userReviewSee, userMissionSee } from "../controllers/user.controller.js";

export const userRouter = express.Router({mergeParams : true});

userRouter.post('/signin', asyncHandler(userSignin));
userRouter.post('/mission', asyncHandler(userNewMission));
userRouter.get('/:userId/review', asyncHandler(userReviewSee));
userRouter.get('/:userId/mission', asyncHandler(userMissionSee));