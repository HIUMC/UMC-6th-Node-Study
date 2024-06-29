export const pushNewReviewResponseDTO = (review) => {
    return {
        "article" : review[0].article,
        "score" : review[0].score
      }; 
}

export const pushNewMissionResponseDTO = (mission) => {
  return {
     "reward" : mission[0].reward,
     "mission_spec" : mission[0].mission_spec
  }
}

export const previewReviewResponseDTO = (data) => {
  const reviews = [];
  for(let i = - 0 ; i < data.length; i++){
    reviews.push({
      "user_name" : data[i].user_name,
      "score" : data[i].score,
      "article" : data[i].article,
    })
  }
  return {"reviewData" : reviews, "cusorId" : data[data.length-1].review_id};
}

