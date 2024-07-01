// controllers/memberMission.controller.js

import { addNewMemberMission } from "../services/memberMission.service.js";

export const addMemberMission = async (req, res) => {
    const { memberId, missionId } = req.body;

    try {
        const memberMissionId = await addNewMemberMission(memberId, missionId);
        res.status(201).json({ memberMissionId });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
