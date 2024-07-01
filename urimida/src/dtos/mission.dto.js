// dtos/mission.dto.js

// 새로운 미션을 추가하기 위한 DTO
export const AddMissionDTO = (mission) => {
    return {
        storeId: mission.storeId,      // 스토어 ID
        reward: mission.reward,        // 보상
        deadline: mission.deadline,    // 마감일
        missionSpec: mission.missionSpec, // 미션 설명
        createdAt: mission.createdAt,  // 생성일
        updatedAt: mission.updatedAt   // 업데이트일
    };
}

// 조회된 미션을 반환하기 위한 DTO
export const MissionDTO = (mission) => {
    return {
        id: mission.id,                // 미션 ID
        storeId: mission.store_id,     // 스토어 ID
        reward: mission.reward,        // 보상
        deadline: mission.deadline,    // 마감일
        missionSpec: mission.mission_spec, // 미션 설명
        createdAt: mission.created_at, // 생성일
        updatedAt: mission.updated_at  // 업데이트일
    };
}

// 특정 미션을 업데이트하기 위한 DTO
export const UpdateMissionDTO = (mission) => {
    return {
        storeId: mission.storeId,      // 스토어 ID
        reward: mission.reward,        // 보상
        deadline: mission.deadline,    // 마감일
        missionSpec: mission.missionSpec, // 미션 설명
        updatedAt: mission.updatedAt   // 업데이트일
    };
}

// 특정 가게에 미션 추가

export const AddMissionToStoreDTO = (storeId, mission) => {
    return {
        storeId: storeId,
        reward: mission.reward,
        deadline: mission.deadline,
        missionSpec: mission.missionSpec,
    };
}

