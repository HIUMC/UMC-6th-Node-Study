// dtos/memberMission.dto.js

export const AddMemberMissionDTO = (memberId, missionId) => {
    return {
        memberId: memberId,
        missionId: missionId,
        status: 'in_progress', // 기본 상태를 'in_progress'로 설정
    };
}
