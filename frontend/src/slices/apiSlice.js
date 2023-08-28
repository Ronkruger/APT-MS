import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants.js'

const baseQuery = fetchBaseQuery({baseUrl: BASE_URL});

export const apiSLice = createApi({
 baseQuery,
 tagTypes: ['Tenant', 'Transaction', 'User'],
 endpoints: (builder) => ({}), 
});