import express from 'express';
import { tempException } from '../controllers/temp.controller.js';

export const tempRouter = express.Router();

tempRouter.get('/exception/:flag',tempException);