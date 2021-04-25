const moongoose=require('mongoose')


const hardSchema=new moongoose.Schema({
    question:String,
    op1:String,
    op2:String,
    op3:String,
    op4:String,
    ans:String

})
const hard=new moongoose.model('hard',hardSchema);

module.exports= hard;
