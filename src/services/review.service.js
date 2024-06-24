import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { reviewAddDTO } from "../dtos/review.dto.js"
import { addReview } from "../models/review.dao.js";

export const pushReview = async (body) => {

    const pushReviewData = await addReview({
        "member_id" : body.member_id,
        "store_id" : body.store_id,
        "article" : body.article,
        "score" : body.score
    });

    if(pushReviewData == -1){
        throw new BaseError(status.REVIEW_ALREADY_EXIST);
    }else{
        return reviewAddDTO(await addReview(pushReviewData));
    }
}