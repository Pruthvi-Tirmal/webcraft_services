const mongoose = require('mongoose');
// schema
const DomainSchema = mongoose.Schema({
    loggedUser: {
        type: String,
        required: true,
        trim: true,
    },
    domain: {
        type: String,
        required: true,

        trim: true,
    }
})
// modal
const DomainModal = mongoose.model("Domain", DomainSchema);
module.exports = DomainModal;