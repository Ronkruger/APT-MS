import mongoose from "mongoose";
import tenants from "../data/tenants.js";
const tenantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },
  userEmail: {
    type: String,
  },
  apartmentNumber: {
    type: String,
  },
  image: {
    type: String,
  },
  contact: {
    type: Number,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,

  
  },
  address: {
    type: String,

  },
  
},
{
 timestamps: true,
},
);

const Tenant = mongoose.model("Tenant", tenantSchema);

export default Tenant;