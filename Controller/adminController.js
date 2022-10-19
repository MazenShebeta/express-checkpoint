function home(req, res){
    try{
        res.render('home');
    }
    catch(err){
        console.log(err.message);
    }
}

function service(req, res){
    try{
        res.render('service');
    }
    catch(err){
        console.log(err.message);
    }
}

function contact(req, res){
    try{
        res.render('contact');
    }
    catch(err){
        console.log(err.message);
    }
}


module.exports = { home, service, contact };