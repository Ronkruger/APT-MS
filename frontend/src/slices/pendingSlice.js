import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('pending') ? JSON.parse(localStorage.getItem('pending')) : {pendingTenants: []};

const pendingSlice = createSlice({
    name: "pending",
    initialState,
    reducers: {
        addToPending: (state, action) => {
            const tenant = action.payload;
          
            const existTenant = state.pendingTenants.find((x) => x._id === tenant._id);
          
            // Calculate total price including apartment payment and internet share
            const totalPrice = (Number(1000) + Number(350)).toFixed(2); // Example calculation
          
            if (existTenant) {
              // Update existing tenant data
              state.pendingTenants = state.pendingTenants.map((x) =>
                x._id === existTenant._id ? { ...tenant, totalPrice } : x
              );
            } else {
              // Add new tenant with computed payments
              const tenantWithPayments = {
                ...tenant,
                apartmentPayment: 1000,
                internetShare: 350,
                totalPrice, // Add the calculated total price to the tenant data
              };
              state.pendingTenants = [...state.pendingTenants, tenantWithPayments];
            }
          
            // Save the updated pendingTenants state to localStorage
            localStorage.setItem('pendingTenantsState', JSON.stringify(state));
          }
    },
});
export const {addToPending} = pendingSlice.actions;
export default pendingSlice.reducer;