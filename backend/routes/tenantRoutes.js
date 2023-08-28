import express from 'express'
import { getTenants, getTenantById } from '../controllers/tenantController.js';
const router = express.Router();

router.route('/').get(getTenants);
router.route('/:id').get(getTenantById);

export default router;