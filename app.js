const express  = require('express')
const path  = require('path')


// Bring in Models
// let Article = require('./models/index');

// init express

const app = express()

// load view engine

app.set('views'  , path.join(__dirname , 'views'))
app.set('view engine', 'pug')


// set public folder
app.use(express.static(path.join(__dirname , 'public')))


// home route

app.get('/' , (req , res) => {

  let articles = [
      {
          id: 1,
          title: 'article one',
          body : 'this is article one'
      },
      {
        id: 2,
        title: 'article two',
        body : 'this is article two'
    },
    {
        id: 3,
        title: 'article three',
        body : 'this is article three'
    }
  ]


    res.render('index' , {
        title : 'home to all articles',
        article : articles
    })
})

// get single article route
// fix the error
// app.get('/articles/:id', (req, res) => {

//     Article.findById(req.params.id , function(err , articles){

//         res.render('index' , {
//             articles:articles
//         })
        
//     } )
// })

// contact route

app.get('/contact', (req , res) => {
    res.render('contact' , {
        title : 'this is contact page'
    })
})



// start server

app.listen(3000 , () =>{
    console.log("server running on port 3000...");
    
})