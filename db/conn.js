const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/quiz', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
  