import { TENANTS_URL } from "../constants.js";
import { apiSLice } from "./apiSlice.js";

export const tenantsApiSlice = apiSLice.injectEndpoints({
    endpoints: (builder) => ({
        getTenants: builder.query({
            query: () => ({
                url: TENANTS_URL,
            }),
            keepUnusedDataFor: 5,
        }),
        getTenantDetails: builder.query({
            query: (tenantId) => ({
                url: `${TENANTS_URL}/${tenantId}`,
            }),
            keepUnusedDataFor: 5,
        }),
    }),
});

export const {useGetTenantsQuery, useGetTenantDetailsQuery} = tenantsApiSlice;