// dtos/user.dto.js

// sign in response DTO
export const signinResponseDTO = (user, prefer) => {
    const preferFood = [];
    for (let i = 0; i < prefer[0].length; i++) {
        preferFood.push(prefer[0][i].f_category_name);
    }
    return {"email": user[0].email, "name": user[0].user_name, "preferCategory": preferFood};
}

export const userPushMissionResponseDTO = (user_mission) => {
    return {"user_id" : user_mission[0].user_id, "mission_id" : user_mission[0].mission_id}
}

export const userGetReviewResponseDTO = (data) => {
    const reviews = [];
    for(let i = - 0 ; i < data.length; i++){
      reviews.push({
        "store_name" : data[i].store_name,
        "score" : data[i].score,
        "article" : data[i].article,
      })
    }
    return {"reviewData" : reviews, "cusorId" : data[data.length-1].review_id};
}

export const userGetMissionResponseDTO = (data) => {
    const missions = [];
    for(let i = - 0 ; i < data.length; i++){
      missions.push({
        "store_name" : data[i].store_name,
        "mission_spec" : data[i].mission_spec,
        "reward" : data[i].reward
      })
    }

    return {"missionData" : missions, "cursorId" : data[data.length-1].mission_id};
}