// services/region.service.js

import { addStoreToRegion } from "../models/region.dao.js";
import { AddStoreToRegionDTO } from "../dtos/region.dto.js";

export const addNewStoreToRegion = async (regionId, store) => {
    const storeData = AddStoreToRegionDTO(regionId, store);
    const storeId = await addStoreToRegion(storeData);
    if (storeId === -1) {
        throw new BaseError(status.NOT_FOUND);
    }
    return storeId;
}
