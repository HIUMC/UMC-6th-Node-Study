import { response } from "../config/response.js";
import { status } from "../config/response.status.js";

import { joinUser, userPushMission,userGetReview, userGetMission } from "../services/user.service.js";

export const userSignin = async (req, res, next) => {
    console.log("회원가입을 요청하였습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await joinUser(req.body)));
}

export const userNewMission = async (req,res,next) => {
    console.log("새로운 미션 추가 요청");
    console.log("body:", req.body);

    res.send(response(status.SUCCESS, await userPushMission(req.body)));
}

export const userReviewSee = async(req, res, next) => {
    console.log("사용자가 리뷰조회를 요청했습니다.");
    res.send(response(status.SUCCESS, await userGetReview(req.params.userId, req.query)));
}

export const userMissionSee = async(req,res,next) => {
    console.log("사용자가 진행중인 미션 조회를 요청했습니다.");
    res.send(response(status.SUCCESS, await userGetMission(req.params.userId, req.query)));
}