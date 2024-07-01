import { BaseError } from "../config/error.js";
import { status } from "../config/response.status.js";
import { signinResponseDTO, userPushMissionResponseDTO, userGetReviewResponseDTO, userGetMissionResponseDTO } from "../dtos/user.dto.js"
import { addUser, getUser, getUserPreferToUserID, setPrefer, userAddMission, getuserMission, userSeeReview, userSeeMission } from "../models/user.dao.js";

export const joinUser = async (body) => {
    const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
    const prefer = body.prefer;

    const joinUserData = await addUser({
        'email': body.email,
        'name': body.name,
        'gender': body.gender,
        'birth': birth,
        'addr': body.addr,
        'specAddr': body.specAddr,
        'phone': body.phone
    });

    if(joinUserData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        for (let i = 0; i < prefer.length; i++) {
            await setPrefer(joinUserData, prefer[i]);
        }
        return signinResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
    }
}

export const userPushMission = async(body) => {
    const userPushMissionData = await userAddMission({
        'user_id' : body.user_id,
        'mission_id' : body.mission_id,
        'status' : body.status
    })

    if(userPushMissionData == -1){
        throw new BaseError(status.MISSION_ALREADY_EXITS);
    }else{
        return userPushMissionResponseDTO(await(getuserMission(userPushMissionData)));
    }
}


export const userGetReview = async(userId, query) => {
    const {reviewId, size =3} = query;
    return userGetReviewResponseDTO(await userSeeReview(reviewId, size, userId));
}

export const userGetMission = async(userId, query) => {
    const {missionId, size=3} = query;
    return userGetMissionResponseDTO(await userSeeMission(missionId, size, userId));
}