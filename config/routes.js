const express = require('express')
const route = express.Router()
const userCotroller = require('../cotroller/postController')

route.get('/feed',userCotroller.getHomePage)

route.get('/add-new', userCotroller.addNew)
route.post('/create-article', userCotroller.creatPost)
route.get('/fullArticle/:id', userCotroller.getFullArticle)
route.post('/delete-post/:id', userCotroller.deleteArticle)
route.get('/edit/:id',userCotroller.editPage)
route.post('/update-post/:id', userCotroller.updateArticle)

module.exports = route;