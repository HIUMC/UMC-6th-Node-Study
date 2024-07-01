// routes/mission.route.js

import express from "express";
import asyncHandler from 'express-async-handler';
import { addNewMission, fetchAllMissions, fetchMissionById, modifyMission, removeMission } from "../controllers/mission.controller.js";

// express 라우터 객체 생성
export const missionRouter = express.Router();

// 새로운 미션을 추가하는 경로
missionRouter.post('/add', asyncHandler(addNewMission));

// 모든 미션을 조회하는 경로
missionRouter.get('/all', asyncHandler(fetchAllMissions));

// 특정 미션을 ID로 조회하는 경로
missionRouter.get('/:id', asyncHandler(fetchMissionById));

// 특정 미션을 업데이트하는 경로
missionRouter.put('/:id', asyncHandler(modifyMission));

// 특정 미션을 삭제하는 경로
missionRouter.delete('/:id', asyncHandler(removeMission));


// 특정 가게에 미션을 추가하는 경로
import { addMission } from "../controllers/mission.controller.js";

const router = express.Router();

router.post("/missions", addMission);

export default router;
