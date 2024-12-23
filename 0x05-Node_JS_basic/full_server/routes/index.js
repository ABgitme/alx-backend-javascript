// full_server/routes/index.js
import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = express.Router();

// Link the route / to AppController
router.get('/', AppController.getHomepage);

// Link the route /students and /students/:major to StudentsController
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
