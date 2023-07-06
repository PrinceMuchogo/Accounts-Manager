import mongoose from 'mongoose';

const accountsSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },

    gender: String,

    verified: {
        type: Boolean
    },
    notified: {
        type: Boolean
    },
    isSent: Boolean,

    status: String,

    accountNumber: String,
    
    accountType: String,

    collectionPoint: String,

    identificationNumber: String,

    sourceOfFunds: String,

    address: {
        type: String
    },
    mobileNumber: String,

}, {
    timestamps: true
});



const Account = mongoose.model('accounts', accountsSchema);

export default Account;