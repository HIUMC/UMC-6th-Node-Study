import { BaseError } from "../../config/error.js";
import {status} from "../../config/response.status.js";
import {pushNewReviewResponseDTO, pushNewMissionResponseDTO, previewReviewResponseDTO} from "../dtos/store.dto.js";
import { pushReview, getReview, pushMission, getMission, getPreviewReview } from "../models/store.dao.js";


export const pushNewReview = async(body, storeId) => {
    const newReviewData = await pushReview({
        'user_id' : body.user_id, // 원래라면 가져와야함 
        'store_id' : storeId, // 이것도 그렇고
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

export const pushNewMission = async(body, storeId) => {
    const newMissionData = await pushMission ({
        'store_id' : storeId,
        'reward' : body.reward,
        'mission_spec' : body.mission_spec
    });

    
    return pushNewMissionResponseDTO(await getMission(newMissionData));

}

export const getReviewByStore = async(storeId, query) =>{
    const {reviewId, size =3} = query;
    return previewReviewResponseDTO(await getPreviewReview(reviewId, size, storeId))
}