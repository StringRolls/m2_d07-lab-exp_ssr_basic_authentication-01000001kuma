const isLoggedin = (req, res, next) => {
    if(req.session.currentUser) next()
    else next(new Error("You must login"))
    
    //next()      //this test positively
    //next(new Error("Broken login")); //this test it negatively 
  };
  
  module.exports = {
    isLoggedin,
  };
  