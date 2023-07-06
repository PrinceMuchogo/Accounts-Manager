import asyncHandler from 'express-async-handler';
import Account from '../models/accountModel.js';

const getAccounts = asyncHandler (async (req, res) =>{

    const accounts = await Account.find({});

    if (!accounts){
        res.status(404);
        throw new Error('No accounts found');
    }

    const accountsArray = accounts.map(account => ({
        id: account._id,
        firstname: account.firstName,
        lastname: account.lastName,
        mobileNumber: account.mobileNumber,
        accountType: account.accountType,
        accountNumber: account.accountNumber,
        accountStatus: account.status,
        gender: account.gender,
        verified: account.verified,
        notified: account.notified,
        isSent: account.isSent,
        accountType: account.accountType,
        collectionPoint: account.collectionPoint,
        identificationNumber: account.identificationNumber,
        sourceOfFunds: account.sourceOfFunds,
        address: account.address,
    }));

    res.status(200).json({
        accountsArray: accountsArray
    });
});

const updateAccountDetails = asyncHandler (async (req, res) =>{

    //const{_id} = req.body;
    console.log(req.body);
    const account = await Account.findById(req.body._id);

    if(!account){

        res.status(401);
        throw new Error('account not found');
    };

    account.firstName = req.body.firstName || account.firstName;
    account.lastName = req.body.lastName || account.lastName;
    account.mobileNumber = req.body.mobileNumber || account.mobileNumber;
    account.gender = req.body.gender || account.gender;
    account.verified = req.body.verified || account.verified;
    account.notified = req.body.notified || account.notified;
    account.isSent = req.body.isSent || account.isSent;
    account.accountNumber = req.body.accountNumber || account.accountNumber;
    account.status = req.body.status || account.status;
    account.accountType = req.body.accountType || account.accountType;
    account.collectionPoint = req.body.collectionPoint || account.collectionPoint;
    account.identificationNumber = req.body.identificationNumber || account.identificationNumber;
    account.sourceOfFunds = req.body.sourceOfFunds || account.sourceOfFunds;
    account.address = req.body.address || account.address;

    const updatedAccount = await account.save();

    res.status(200).json({
        firstname: updatedAccount.firstName
    });


});


const deleteAccount = asyncHandler (async (req, res) => {

    const {_id} = req.body._id;

    try{
        const account = await Account.findById(_id);

        if(!account){

            res.status(404);
            throw new Error('Account not found');
        };

        await Account.findByIdAndDelete(_id);

        res.status(200).json({
            message: 'Account deleted successfully'
        })


    } catch (err) {
        res.status(500);
        throw new Error('Error deleting account');
    };
});


export {

    getAccounts,
    updateAccountDetails,
    deleteAccount
}