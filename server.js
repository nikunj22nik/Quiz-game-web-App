

const express=require('express');
const path=require('path');
const app=express();
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/quiz', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(()=>{
console.log("succesfully");
  }).catch((err)=>{
console.log(err);
  });
  
//require('./db/conn');
const easy=require('./models/easy');
 const medium=require('./models/medium');


const hard=require('./models/hard');
const port=process.env.PORT||3112;


app.set('view engine','ejs');

app.set("views",path.join(__dirname,'views'));

app.use(express.static('public'));


app.use(express.json());
app.use(express.urlencoded({extended:true}));



const createDocument=async()=>{
    try{
        console.log("in a try");
const q2=new hard({
    question:"Tsunamis are not caused by ",
    op1:"Hurricanes",

    op2:"Earthquakes",
    op3:"Undersea landslides",
    op4:"Volcanic eruptions", 
    ans:"Hurricanes"
})
const result=await q2.save();
console.log(result);
    }catch(err){
        console.log(err);
    }
}

//createDocument();

const getDocument=async()=>{
  let s=Math.ceil(Math.random()*10);

    console.log(s+"bhjgjhgggjhgjhgjhgjh");
    let e;
    if(s<=5){
        s=s-1;
    e=s+6;
    }else{
        e=s+1;
        s=e-6;
    
    }
    console.log(s+"start is"+e+"end is ");
const result=await medium.find({$and: [ { num: { $gt: s } }, { num: { $lt: e } } ]});
console.log(result);
return result;
}

app.get('/',async (req,res)=>{
    res.render('index');
})
 app.get('/gamestartfirst/:id',async(req,res)=>{
    //  let yu=req.params.id;
    //  const allques=await getDocument();
    //  res.send({'questions':allques,'i':yu});
    res.render('start');
 })
app.get('/gamestart/:id',async(req,res)=>{
    let yu=req.params.id;
const allques=await getDocument();
//console.log(req.body.number);
res.send({'questions':allques})
 //res.render('start',{'questions':allques,'i':yu});
})
app.get('/homepage',(req,res)=>{
    console.log("hello homepage");
    res.render('index');
})

app.listen(port,()=>{
    console.log("server is up on Port"+3112);
})






























































































































