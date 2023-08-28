import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import tenants from './data/tenants.js'
import Tenant from "./models/tenantModel.js";
import Transaction from "./models/transactionModel.js";
import User from "./models/userModel.js";
import connectDB from './config/db.js'

dotenv.config();

connectDB();
const importData = async () => {
    try {
        await Transaction.deleteMany();
        await Tenant.deleteMany();
        await User.deleteMany();

        // Insert users using the User model
        const createdUsers = await User.insertMany(users);

        // Map over tenants and associate them with users based on email
        const sampleTenants = tenants.map((tenant) => {
            const user = createdUsers.find(user => user.email === tenant.userEmail);
            if (!user) {
                console.error(`User not found for tenant: ${tenant.name}`);
                return null; // Skip tenant if user not found
            }
            return { ...tenant, user: user._id };
        }).filter(tenant => tenant !== null); // Remove null entries

        // Insert associated tenants using the Tenant model
        await Tenant.insertMany(sampleTenants);

        console.log('Data imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};
//destroy data

const destroyData = async () => {
    try {
        await Transaction.deleteMany();
        await Tenant.deleteMany();
        await User.deleteMany();
        console.log('Data destroyed!'.red.inverse);
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

if(process.argv[2] === '-d'){
    destroyData();
} else{
    importData();
}   