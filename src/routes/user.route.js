import express from 'express';
import authController from '../controllers/auth.controller';
// import AuthenticationMiddleware from '../middlewares/auth.middleware';
import bodyValidation from '../middlewares/validation/body.validation';

const router = express.Router();

router
  .get('/auth/verification/:token', authController.isVerified)
  .post('/auth/signup', [bodyValidation], authController.signup);


export default router;
