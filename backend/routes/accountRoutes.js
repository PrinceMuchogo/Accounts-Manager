import express from 'express';
const router = express.Router();
import { deleteAccount, getAccounts, updateAccountDetails } from '../controllers/accountController.js';


router.get('/all', getAccounts);
router.put('/update', updateAccountDetails);
router.delete('/delete', deleteAccount);

export default router;