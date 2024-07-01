// services/mission.service.js

import { addMissionToStore } from "../models/mission.dao.js";
import { AddMissionToStoreDTO } from "../dtos/mission.dto.js";

export const addNewMissionToStore = async (storeId, mission) => {
    const missionData = AddMissionToStoreDTO(storeId, mission);
    const result = await addMissionToStore(missionData);

    if (result === -1) {
        throw new Error('Store not found');
    }
    
    return result;
}
