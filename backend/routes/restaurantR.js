const router=require('express').Router()
const {authenticate}=require('../middleware/authMiddleware')
const {addRestaurant,getAllRestaurants}=require('../controllers/controller.restaurant/restaurantC')
const upload=require('../middleware/multer')
router.post('/restaurants',authenticate,upload.single('image'),addRestaurant)
router.get('/restaurants',authenticate,getAllRestaurants)

module.exports=router