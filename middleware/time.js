function time(req, res, next){
    let hour = new Date().getHours();
    let day = new Date().getDay();
    //from monday to friday
    if((hour < 9 || hour > 17) && (day > 1 && day < 6)){
        res.redirect('/user/closed');
    }else{
        next();
    }
}

module.exports = time;