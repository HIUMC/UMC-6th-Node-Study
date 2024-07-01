// routes/memberMission.route.js

import express from "express";
import { addMemberMission } from "../controllers/memberMission.controller.js";

const router = express.Router();

router.post("/member-missions", addMemberMission);

export default router;
