const {verifyToken}=require('../service/auth');

function checkForAuthentication(req,res,next) {
    const authCookie = req.cookies?.uid;
    if(!authCookie) {
        req.user=null
        return next();}

    const token = authCookie;
    const user = verifyToken(token);

    req.user = user;
    next();
}

// async function restrictToLoggedInUser(req,res,next) {
//     const userUid = req.cookies?.uid;
//    if(!userUid) return res.redirect('/login');

//    const user = verifyToken(userUid);
//    if(!user) return res.redirect('/login');

//    req.user = user;
//    next();
// }

function restrictTo(role=[]){
    return function(req,res,next){
        if(!req.user) {
            return res.redirect('/login');
        }
 
        if(!req.user.role.some(r => role.includes(r))) {
            return res.json({message: "You are not authorized to access this resource"});
        }

        return next();
    }
}

async function checkAuth(req,res,next) {
    const userUid = req.cookies?.uid;
    const user = verifyToken(userUid);
    req.user = user;
    next();
}
module.exports = { checkForAuthentication,restrictTo,checkAuth };