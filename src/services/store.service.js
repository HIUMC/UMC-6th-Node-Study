import { BaseError } from "../../config/error.js";
import {status} from "../../config/response.status.js";
import {pushNewReviewResponseDTO, pushNewMissionResponseDTO} from "../dtos/store.dto.js";
import { pushReview, getReview, pushMission, getMission } from "../models/store.dao.js";


export const pushNewReview = async(body) => {
    const newReviewData = await pushReview({
        'user_id' : body.user_id, // 원래라면 가져와야함 
        'store_id' : body.store_id, // 이것도 그렇고
        'article' : body.article,
        'score' : body.score,
    })

    if(newReviewData==-1){
        throw new BaseError(status.REVIEW_ALREADY_EXIST);
    }
    else{
        return pushNewReviewResponseDTO(await getReview(newReviewData));
    }

}

export const pushNewMission = async(body) => {
    const newMissionData = await pushMission ({
        'store_id' : body.store_id,
        'reward' : body.reward,
        'mission_spec' : body.mission_spec
    });

    
    return pushNewMissionResponseDTO(await getMission(newMissionData));

}