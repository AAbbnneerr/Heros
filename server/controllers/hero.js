import mongoose from 'mongoose'
import Heros from '../models/heros'


//create new hero function

export function createHero(req,res){
    const hero = new Heros({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        power: req.body.power,
        range: req.body.range,
        age: req.body.age
    });
return hero;
    .save()
    .then((newHero)=>{
        return res.status(201).json({
            success:true,
            message: 'New hero created',
            cause:newHero
        })
    })
    .catch((error)=>{
        res.status(500).json({
            success:false,
            message:'Server error',
            error:error.mensaje
        })
    })

}