// services/memberMission.service.js

import { addMemberMission } from "../models/memberMission.dao.js";
import { AddMemberMissionDTO } from "../dtos/memberMission.dto.js";

export const addNewMemberMission = async (memberId, missionId) => {
    const memberMissionData = AddMemberMissionDTO(memberId, missionId);
    const result = await addMemberMission(memberMissionData);

    if (result === -1) {
        throw new Error('Mission already in progress');
    }

    return result;
}
