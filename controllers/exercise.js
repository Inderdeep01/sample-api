const Exercise = require('../models/exercise')

// post request controller
exports.post = (req,res)=>{
    const exercise = new Exercise({
        name:req.body.name,
        reps:req.body.reps,
        weight:req.body.weight,
        unit:req.body.unit,
        date:req.body.date
    })
    exercise.save()
        .then((result)=>{
            res.setHeader('content-type','application/json')
            .status(201).json({result})
        })
        .catch(err=>res.status(500).json({error:err}))
}

exports.get = (req,res)=>{
    Exercise.find()
        .then((result)=>{
            res.setHeader('content-type','application/json')
            .status(200).json({result})
        })
        .catch(err=>res.status(500).json({error:err}))
}

exports.getById = (req,res)=>{
    const exerciseId = req.params.id
    Exercise.findById(exerciseId)
        .then((result)=>{
            res.setHeader('content-type','application/json')
            .status(200).json({result})
        })
        .catch(err=>res.status(500).json({error:err}))
}

exports.put = (req,res)=>{
    const exerciseId = req.params.id
    const updatedExercise = {
        name:req.body.name,
        reps:req.body.reps,
        weight:req.body.weight,
        unit:req.body.unit,
        date:req.body.date
    }
    Exercise.findByIdAndUpdate(exerciseId,updatedExercise)
        .then(()=>{
            const result = Exercise.findById(exerciseId)
            res.status(200).json({result})
        })
}

exports.delete = (req,res)=>{
    const exerciseId = req.params.id
    Exercise.findByIdAndDelete(exerciseId)
        .then(()=>res.status(204))
}