
import Router from 'express'
const router = Router()

import AuthController from '../controllers/authController.js';
import UserController from '../controllers/userController.js';
import verifyToken from '../middleware/authjwt.js';
import TeamController from '../controllers/teamController.js';
import MemberController from '../controllers/memberController.js';
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)
router.get('/users/:id', [verifyToken], UserController.show)
router.put('/users/:id/password', [verifyToken], UserController.updatePassword)
router.delete('/users/:id', [verifyToken], UserController.destroy)

router.get('/teams', [verifyToken], TeamController.index);
router.get('/teams/:id',[verifyToken], TeamController.show);
router.post('/teams', [verifyToken], TeamController.store);
router.put('/teams/:id', [verifyToken], TeamController.update);
router.delete('/teams/:id', [verifyToken], TeamController.destroy);

router.get('/members', [verifyToken], MemberController.index);
router.get('/members/:id', [verifyToken], MemberController.show);
router.post('/members', [verifyToken], MemberController.store);
router.put('/members/:id', [verifyToken], MemberController.update);
router.delete('/members/:id', [verifyToken], MemberController.destroy);

export default router
