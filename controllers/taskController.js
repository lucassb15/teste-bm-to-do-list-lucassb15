const Task = require('../models/userModel');



// CAD SECTION
const loadToDoCad = async (req,res)=>{

    try {
    
        res.render('todoCad');

    } catch (error) {
        console.log(error)
    }

}

const insertTask = async (req, res) => {

    try {
        
        const task = new Task({
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            dateExpiration: req.body.dateExpiration,
            executionStep: req.body.executionStep
        });

        const userData = await task.save();

        if(userData) {
            res.render('todoCad', { message: 'Seu cadastro foi realizado com sucesso! ' });
        }
        else {
            res.render('todoCad', { message: 'Seu cadastro falhou! ' });
        }
    } catch (error) {
        console.log('Error insert: ',error.message)
    }

}





//  TASK SECTION
const loadToDoTask = async (req,res)=>{

    try {
        const id = req.query.id;
        const taskData = await Task.find({id});
        res.render('todoTask', {task: taskData});

    } catch (error) {
        console.log('loadToDoTask error: ',error.message)
    }

}

module.exports = {
    loadToDoCad,
    loadToDoTask,
    insertTask
}