import { Router } from 'express';
import { verifySignup } from '../middlewares/index.js';
import * as authController from '../controllers/auth.controller.js'

const router = Router();

router.post('/signup', [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], authController.signUp);
router.post('/signin', authController.signIn);

export default router;