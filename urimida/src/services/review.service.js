// services/review.service.js
import mongoose from 'mongoose';
import ReviewModel from '../models/review.model';

export async function saveReviewTransaction(reviewDTO) {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        await saveReview(reviewDTO); // 여기서 saveReview는 트랜잭션을 받아야 함
        await session.commitTransaction();
        console.log('Review saved successfully in transaction!');
    } catch (error) {
        await session.abortTransaction();
        console.error('Transaction aborted due to error:', error);
        throw new Error('Failed to save review in transaction');
    } finally {
        session.endSession();
    }
}
