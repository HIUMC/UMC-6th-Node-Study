// controllers/mission.controller.js

import { addMission, getMissions, getMissionById, updateMission, deleteMission } from "../models/mission.dao.js";
import { AddMissionDTO, MissionDTO, UpdateMissionDTO } from "../dtos/mission.dto.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";

// 새로운 미션 추가
export const addNewMission = async (req, res, next) => {
    try {
        const missionData = AddMissionDTO(req.body);
        const missionId = await addMission(missionData);
        res.status(201).json({ id: missionId });
    } catch (err) {
        next(err);
    }
}

// 모든 미션 조회
export const fetchAllMissions = async (req, res, next) => {
    try {
        const missions = await getMissions();
        res.status(200).json(missions.map(MissionDTO));
    } catch (err) {
        next(err);
    }
}

// 특정 미션 조회
export const fetchMissionById = async (req, res, next) => {
    try {
        const mission = await getMissionById(req.params.id);
        if (mission === -1) {
            throw new BaseError(status.NOT_FOUND);
        }
        res.status(200).json(MissionDTO(mission[0]));
    } catch (err) {
        next(err);
    }
}

// 특정 미션 업데이트
export const modifyMission = async (req, res, next) => {
    try {
        const missionData = UpdateMissionDTO(req.body);
        const updatedId = await updateMission(req.params.id, missionData);
        if (updatedId === -1) {
            throw new BaseError(status.NOT_FOUND);
        }
        res.status(200).json({ id: updatedId });
    } catch (err) {
        next(err);
    }
}

// 특정 미션 삭제
export const removeMission = async (req, res, next) => {
    try {
        const deletedId = await deleteMission(req.params.id);
        if (deletedId === -1) {
            throw new BaseError(status.NOT_FOUND);
        }
        res.status(200).json({ id: deletedId });
    } catch (err) {
        next(err);
    }
}


//특정 가게에 미션을 추가한다.

import { addNewMissionToStore } from "../services/mission.service.js";

export const addMission = async (req, res) => {
    const { storeId, mission } = req.body;

    try {
        const missionId = await addNewMissionToStore(storeId, mission);
        res.status(201).json({ missionId });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
