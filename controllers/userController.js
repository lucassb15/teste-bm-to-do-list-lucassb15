const User = require('../models/userModel');


const loadToDoCad = async (req,res)=>{

    try {
    
        res.render('todoCad');

    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    loadToDoCad
}