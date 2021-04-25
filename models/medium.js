const moongoose=require('mongoose')


const mediumSchema=new moongoose.Schema({
    question:String,
    op1:String,
    op2:String,
    op3:String,
    op4:String,
    ans:String

})
const medium=new moongoose.model('medium',mediumSchema);

module.exports=medium;
