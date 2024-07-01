// controllers/region.controller.js

import { addRegion, getRegions, getRegionById, updateRegion, deleteRegion } from "../models/region.dao.js";
import { AddRegionDTO, RegionDTO, UpdateRegionDTO } from "../dtos/region.dto.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";

// 새로운 지역 추가
export const addNewRegion = async (req, res, next) => {
    try {
        const regionData = AddRegionDTO(req.body);
        const regionId = await addRegion(regionData);
        res.status(201).json({ id: regionId });
    } catch (err) {
        next(err);
    }
}

// 모든 지역 조회
export const fetchAllRegions = async (req, res, next) => {
    try {
        const regions = await getRegions();
        res.status(200).json(regions.map(RegionDTO));
    } catch (err) {
        next(err);
    }
}

// 특정 지역 조회
export const fetchRegionById = async (req, res, next) => {
    try {
        const region = await getRegionById(req.params.id);
        if (region === -1) {
            throw new BaseError(status.NOT_FOUND);
        }
        res.status(200).json(RegionDTO(region[0]));
    } catch (err) {
        next(err);
    }
}

// 특정 지역 업데이트
export const modifyRegion = async (req, res, next) => {
    try {
        const regionData = UpdateRegionDTO(req.body);
        const updatedId = await updateRegion(req.params.id, regionData);
        if (updatedId === -1) {
            throw new BaseError(status.NOT_FOUND);
        }
        res.status(200).json({ id: updatedId });
    } catch (err) {
        next(err);
    }
}

// 특정 지역 삭제
export const removeRegion = async (req, res, next) => {
    try {
        const deletedId = await deleteRegion(req.params.id);
        if (deletedId === -1) {
            throw new BaseError(status.NOT_FOUND);
        }
        res.status(200).json({ id: deletedId });
    } catch (err) {
        next(err);
    }
}

// 미션 1

import { addNewStoreToRegion } from "../services/region.service.js";

export const addStoreToRegion = async (req, res, next) => {
    try {
        const regionId = req.params.regionId;
        const store = req.body;
        const storeId = await addNewStoreToRegion(regionId, store);
        res.status(201).json({ id: storeId });
    } catch (err) {
        next(err);
    }
}
