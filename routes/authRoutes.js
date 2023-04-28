const { Router } = require('express')
const {
    signup_get,
    signup_post,
    login_get,
    login_post,
    delete_all,
    logout_get
 } = require('./../controllers/authController')

const router = Router()

router.get('/signup', signup_get);
router.post('/signup', signup_post);
router.get('/login', login_get);
router.post('/login', login_post);
router.get('/logout', logout_get);
router.delete('/delete-all', delete_all);






module.exports = router;