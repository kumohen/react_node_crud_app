const express = require("express")
const bodyParser =   require("body-parser");
const morgan = require("morgan");
const path = require("path");
const User = require("./modals/user");
const Post = require("./modals/post");

const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://mahen:12345a@ds259577.mlab.com:59577/auth_example_mean",
            {  useCreateIndex: true, useNewUrlParser: true })
        .then(()=> { console.log("mongodb is connetced") }).catch(err => console.log())

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type:'*/*'}));

app.get("/users",(req,res)=>{
   User.find({},function(err,users){
       if(err){
           console.log(err)
       }
       res.json(users)
   })
})
app.get("/user/:id",(req,res)=>{
    User.findById(req.params.id,function(err,users){
        if(err){
            console.log(err)
        }
        res.json(users)
    })
 })

app.post("/signup",(req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    if(!email || !password){
        return res.send("please add your email or password");
    }
    const user = new User({
        email,password
    })
   user.save((err)=>{
       if(err) {return next(err)};
       res.json(user)
   })
})

app.post("/signin",(req,res,done)=>{
    
    const {email,password} = req.body;
    if(!email || !password){
        return res.send("please add your email or password");
    }
     User.findOne({email:email},function(err,user){
         if(err){
             console.log(err);
         }
         if(user.password === password){
             res.json(user._id)
         }else{
             res.send("password or email is incorrect");
         }
     });

})

app.post("/createPost",(req,res)=>{
    const title=req.body.title;
    const description = req.body.description;
    let post = new Post({
        title,description
    })
    post.save(function(err,post){
        if(err){
            return res.status(404).json({msg:"something go worng"})
        }
        res.json(post)
    })
})

app.get("/getPost",(req,res)=>{
    Post.find({}).sort({created:-1}).exec((err,posts)=>{
        if(err){
            return res.status(404).json({msg:"something go worng"})
        }
        res.status(200).json(posts)
    })
})

// app.post("/api/post_update",(req,res)=>{
//     Post.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
//          if(err) return res.status(400).send(err);
//          res.json({
//              success:true,
//              doc
//          })
//     })
// });

app.get("/edit/:id",(req,res)=>{
    Post.findById(req.params.id,function(err,post){
        res.json(post)
    })
})

app.post("/post/:id",(req,res)=>{
    Post.findById(req.params.id,function(err,post){
        if(!post){
           return  res.status(404).send("data is not found");
        }
       
        else{
            post.title = req.body.title;
            post.description=req.body.description;

            post.save().then(data =>{
                if(err){
                    return res.status(404).json({msg:"something go worng"})
                }
                res.json(data)
            })
        }
    })
})
app.get("/post/:id",(req,res)=>{
    Post.findByIdAndRemove({_id:req.params.id},function(err){
        if (err) console.log(err);
        res.json("post is deletd")
    })
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}


const port = process.env.PORT || 5000;

app.listen(port ,()=>{
    console.log("everything is okk");
})