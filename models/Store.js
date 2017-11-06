const mongoose = require('mongoose');
// ES6 Promise
mongoose.Promise = global.Promise;

// url friendly names to be created
const slug = require('slugs');
const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a store name.'
    },
    slug: String,
    description: {
        type: String,
        trim: true
    },
    tags: [String]
});

storeSchema.pre('save', function(next) {
    if(!this.isModified('name')) {
        next(); // skip it
        return; // stop this function from running
    }
    this.slug = slug(this.name);
    next();
    // TODO make for resilient so slugs are unique
});

module.exports = mongoose.model('Store', storeSchema);