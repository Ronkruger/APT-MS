import asyncHandler from "../middleware/asyncHanlder.js";
import Tenant from "../models/tenantModel.js";
import asyncHanlder from '../middleware/asyncHanlder.js'    
// @desc Fetch all tenants
// @route GET /api/tenants
// @access Public
const getTenants = asyncHanlder(async (req, res) => {
    const tenants = await Tenant.find({});
    res.json(tenants);
});
// @desc Fetch a tenant
// @route GET /api/tenants/:id
// @access Public
const getTenantById = asyncHanlder(async (req, res) => {
    const tenant = await Tenant.findById(req.params.id);

    if(tenant) {
    return res.json(tenant); 
    } else {
        res.status(404);
        throw new Error('Resource not Found');
    }
});

export { getTenants, getTenantById };