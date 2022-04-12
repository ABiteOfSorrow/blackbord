var mongoose = require('mongoose');

var options = {
    connectTimeoutMs: 5000,
}
mongoose.connect('mongodb+srv://blackboard:KRsEro8HYOIzopFX@cluster.dq2na.mongodb.net/blackboard',
options,function(error){
    if(error){
        console.log(error);
    } else{
        console.log("connection OK")
    }}
);




