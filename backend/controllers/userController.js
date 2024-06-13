const mongoose = require('mongoose')
const User = require('../model/user')



const getUser = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such user'});
    }

    const user = await User.findById(id);
    if(!user){
        return res.status(404).json({message:'User by id does not exists'});
    }
    res.status(200).json(user);
}

const createUser =  async (req,res) => {
    const {name, email, age, username, password} = req.body;

    const user = new User({name, email, age, username, password});
    const saved = await user.save();

    try {
        if (saved) {
            res.status(200).json(user);
        }
    }catch(error){
        res.status(400).json({error:error.message});
    }
}

const welcome = (req,res) => {

    return res.status(200).json({message: "welcome to user service"});
}

module.exports = {getUser,createUser,welcome}