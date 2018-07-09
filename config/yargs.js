const {argv} = require("yargs").options({
    city:{
        alias:"c",
        desc:"City what you want to know the weather",
        demand:true
    },
    unit:{
        alias:"u",
        desc:"Unit for weather, use: standard for °K, metric for °C or imperial for °F, default °K",
        default:"standard"
    }
});

module.exports={
    argv
}