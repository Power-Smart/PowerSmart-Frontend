import {addFeedback, addReport} from '../controllers/report.controller.js';
import Express from 'express';  


const router = Express.Router();

router.post("/report",addReport);
router.post("/feedback",addFeedback);


export default router;