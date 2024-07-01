import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { saveReview } from "../services/review.service.js"; // 리뷰 서비스 함수 임포트

export const addReview = async (req, res, next) => {
    console.log("리뷰를 작성합니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    try {
        // req.body로부터 필요한 데이터 추출
        const { userId, content, rating, timestamp, storeId } = req.body;
        
        // 리뷰 서비스를 통해 리뷰 저장
        await saveReview({ userId, content, rating, timestamp, storeId });

        // 클라이언트에게 성공 응답 보내기
        res.send(response(status.SUCCESS, "리뷰가 성공적으로 작성되었습니다."));
    } catch (error) {
        console.error("리뷰 작성 중 에러 발생:", error);
        // 에러 발생 시 클라이언트에게 실패 응답 보내기
        res.send(response(status.INTERNAL_SERVER_ERROR, "리뷰 작성 중 에러 발생"));
    }
}

// 가게 리뷰 추가

import { addNewReviewToStore } from "../services/store.service.js";

export const addReviewToStore = async (req, res, next) => {
    try {
        const review = req.body;
        const reviewId = await addNewReviewToStore(review);
        res.status(201).json({ id: reviewId });
    } catch (err) {
        next(err);
    }
}
