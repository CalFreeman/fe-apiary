const mongoose = require('mongoose');

const FarmSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        maxlength: [40, 'Name cannot be more than 40 characters']
    },
    location: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    }
})

module.exports = mongoose.models.Farm || mongoose.model('Farm', FarmSchema);