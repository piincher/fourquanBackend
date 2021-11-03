import express from 'express';
import {
	register,
	searchUser,
	getUniversities,
	getSingle,
	updateUniversity,
	deleteUniversity
} from '../controllers/university.js';
const router = express.Router();

router.post('/register', register);
router.get('/', getUniversities);
router.get('/edit/:_id', getSingle);
router.put('/edit-university/:_id', updateUniversity);
router.delete('/university/:_id', deleteUniversity);
router.get('/search-user/:query', searchUser);

export default router;
