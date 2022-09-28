const questionsModel = require('../models/questions');

const questionsController = {


    async getQuestionById(req, res, next) {
        const id = req.params.id;
        const question = await questionsModel.findByPk(id);
        if (!question) {
            res.send(`Question not found`)
        } else {
            res.json(question);
        }

    },

    async getAllQuestions(req, res, next) {

        const questions = await questionsModel.findAll();
        console.log(questions);
        if (!questions) {
            res.send(`Questions not found`)
        } else {
            res.json(questions);
        }

    },

    async createQuestion(req, res, next) {

        const {content} = req.body;
 
        questionsModel.create(content);
             console.log('question created');
        res.send('question created');
     }







}

module.exports = questionsController;