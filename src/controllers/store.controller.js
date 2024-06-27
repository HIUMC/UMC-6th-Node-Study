import {response} from '../../config/response.js';
import {status} from '../../config/response.status.js';

import { pushNewReview, pushNewMission } from '../services/store.service.js';

export const addNewReview = async (req, res, next)=> {
    console.log('새로운 리뷰를 작성을 요청하였습니다.');
    console.log('body:', req.body);

    res.send(response(status.SUCCESS, await pushNewReview(req.body)));
}

export const addNewMission = async (req, res, next) => {
    console.log('가게에 새로운 미션 추가를 요청하였습니다.');
    console.log('body:', req.body);

    res.send(response(status.SUCCESS, await pushNewMission(req.body)))
}