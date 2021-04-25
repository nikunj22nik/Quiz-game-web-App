const moongoose=require('mongoose')


const easySchema=new moongoose.Schema({
    question:String,
    op1:String,
    op2:String,
    op3:String,
    op4:String,
    ans:String


})
const easy=new moongoose.model('easy',easySchema);

module.exports= easy;
