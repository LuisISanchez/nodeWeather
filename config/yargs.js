const {argv} = require("yargs").options({
    city:{
        alias:"c",
        desc:"City what you want to know the weather",
        demand:true
    }
});

module.exports={
    argv
}