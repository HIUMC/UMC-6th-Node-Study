export const reviewAddDTO = (review) => {
  return {
    "body" : review.article,
    "score" : review.score,
  }; 
};