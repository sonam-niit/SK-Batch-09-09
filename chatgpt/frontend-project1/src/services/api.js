import axios from 'axios';

const API_URL = 'https://backendproject-r1u3.onrender.com/api';

// Auth
export const registerUser = (userData) => axios.post(`${API_URL}/auth/register`, userData);
export const loginUser = (userData) => axios.post(`${API_URL}/auth/login`, userData);

// Categories
// export const getAllCategories = () => axios.get(`${API_URL}/category`);
// export const addCategory = (categoryData, token) => axios.post(`${API_URL}/category`, categoryData, {
//     headers: { Authorization: `Bearer ${token}` }
// });
// export const updateCategory = (id, categoryData, token) => axios.put(`${API_URL}/category/${id}`, categoryData, {
//     headers: { Authorization: `Bearer ${token}` }
// });
// export const deleteCategory = (id, token) => axios.delete(`${API_URL}/category/${id}`, {
//     headers: { Authorization: `Bearer ${token}` }
// });

// Products
// export const getAllProducts = () => axios.get(`${API_URL}/product`);
// export const getProductById = (id) => axios.get(`${API_URL}/product/${id}`);
// export const getProductsByCategory = (categoryId) => axios.get(`${API_URL}/product/category/${categoryId}`);
// export const addProduct = (productData, token) => axios.post(`${API_URL}/product`, productData, {
//     headers: { Authorization: `Bearer ${token}` }
// });
// export const updateProduct = (id, productData, token) => axios.put(`${API_URL}/product/${id}`, productData, {
//     headers: { Authorization: `Bearer ${token}` }
// });
// export const deleteProduct = (id, token) => axios.delete(`${API_URL}/product/${id}`, {
//     headers: { Authorization: `Bearer ${token}` }
// });
