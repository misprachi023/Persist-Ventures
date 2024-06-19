import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = '3837a00efc1346c4bbd9db1878c3ab50'; // replace with your API key

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (category, { rejectWithValue }) => {
    try {
      const response = await axios.get(NEWS_API_URL, {
        params: {
          apiKey: API_KEY,
          category,
        },
      });
      return response.data.articles;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default newsSlice.reducer;
