const router=require('express').Router();
const {menuCreater, menuGetter}=require('../controllers/menu.controller/menuC');
const upload=require('../middleware/multer');
const {authenticate}=require('../middleware/authMiddleware')

// Define the POST route for creating a menu
router.post('/menu', authenticate, upload.single('image'), menuCreater);
router.get('/menu', authenticate, menuGetter);

module.exports = router