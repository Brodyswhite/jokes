const mongoose = require('mongoose');
    uri = "jokes"

mongoose.connect('mongodb://localhost/jokes',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("you're now in the mainframe..."))
    .catch((err) => console.log("Meltdwon",err))
    