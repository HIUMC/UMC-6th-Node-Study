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