const express = require('express');
const mongoose = require('mongoose');
const Sales = require('./salesModel');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/sales_analytics', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/api/sales/total-revenue', async (req, res) => {
  // Implement logic to calculate total revenue
});

app.get('/api/sales/quantity-by-product', async (req, res) => {
  // Implement logic to find total quantity sold for each product
});

app.get('/api/sales/top-products', async (req, res) => {
  // Implement logic to retrieve top 5 products with highest total revenue
});

app.get('/api/sales/average-price', async (req, res) => {
  // Implement logic to calculate average price of products sold
});

app.get('/api/sales/revenue-by-month', async (req, res) => {
  // Implement logic to group sales data by month and calculate total revenue
});

app.get('/api/sales/highest-quantity-sold', async (req, res) => {
  // Implement logic to find product with highest quantity sold on a single day
});

app.get('/api/sales/department-salary-expense', async (req, res) => {
  // Implement logic to calculate total salary expense for each department
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
