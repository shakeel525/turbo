const router = require("express").Router();


router.get('/', (req, res) => {
  res.send('Get all tasks')
})
router.get('/get:id' ,(req, res) => {
  res.send('Get tasks byID')
})


module.exports = router;
