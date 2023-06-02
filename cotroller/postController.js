const post = require('../model/post')

const getHomePage = (req, res) =>{
  post.find()
  .sort({creat_at : '-1'})
  .then((result) => res.render('index', {users : result}))
  .catch(err => console.log(err))
}

const addNew = (req, res)=>{
    post.find()
    .then((err) => res.render('add-new', {err : err.errors}))
    .catch(err => console.log(err))
    

}

const creatPost = (req, res) =>{
    let newPost = new post(req.body);
    newPost.save()
    .then((result)=> res.redirect('/feed'))
    .catch(err => res.render('add-new', {err : err.errors}))
}

const getFullArticle = (req, res)=>{
    post.findById(req.params.id)
    .then(result =>{
        res.render('fullArticle', {user: result})
    })
    .catch(err => console.log(err))
}

const deleteArticle = (req, res)=>{
    post.findByIdAndDelete(req.params.id)
    .then(()=>res.redirect('/feed'))
    .catch(err => console.log(err))
}

const editPage = (req, res)=>{
    post.findById(req.params.id)
    .then(result =>{
        res.render('edit',{
            user : result,
        })
    })
    .catch(err => console.log(err))
}

const updateArticle = (req, res)=>{
    post.findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.redirect(`/fullArticle/${result._id}`))
    .catch(err => console.log(err))
}

module.exports={
    getHomePage,
    addNew,
    creatPost,
    getFullArticle,
    deleteArticle,
    editPage,
    updateArticle
}