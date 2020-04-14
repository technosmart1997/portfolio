const db = require('../config/db');

exports.getAboutMe = (req, res, next) =>{
    db.ref("/aboutMe")
    .once("value")
    .then(snapshot => {
        res.json({ status : true , data :  snapshot.val() });
    }).catch(err => {
        res.json({ status : false , msg :  "Network Error" });
    });
} 

