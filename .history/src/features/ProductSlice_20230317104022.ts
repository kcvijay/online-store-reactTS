import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://fakestoreapi.com/products";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity?: number;
}

const initialState = {
  products: [] as Product[],
};

export const fetchProducts = createAsyncThunk("products/product", async () => {
  const response = await axios.get<Product[]>(api);
  const data = await response.data;
  return data;
});
