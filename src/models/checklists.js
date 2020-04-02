const mongoose = require ('mongoose')

const checklistsSchema = mongoose.Schema({
    name: {type: String, required: true},
    tasks: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tasks'
    }]
})

module.exports = mongoose.model('Checklists',  checklistsSchema)