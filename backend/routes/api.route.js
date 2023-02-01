const router = require('express').Router()
const { getUserId }  = require('../services/getUserID')

router.get('/timeline', async (req, res, next) => {
  const username = req.query.username
  const timeline = await getUserId(username) 
   
  res.send(timeline)
})

module.exports = router
