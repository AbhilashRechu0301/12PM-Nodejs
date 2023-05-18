var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
       imageUrl: {
            type: String,
        },
        logo: {
            type: String
        }

    }
)
module.exports = new mongoose.model('Category', CategorySchema);