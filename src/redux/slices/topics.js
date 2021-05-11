import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import client from 'api/client';

export const fetchTopics = createAsyncThunk('topics/fetchTopics', async () => {
  const response = await client.getTopics();
  return response.topics
})

export const slice = createSlice({
  name: 'topics',
  initialState: {
    topics: [],
    status: 'idle',
    error: null
  },
  reducers: {

  },
  extraReducers: {
    [fetchTopics.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchTopics.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      //TODO intelligently merge loaded data with existing data, to avoid
      //unnecessary renders
      state.topics = action.payload
    },
    [fetchTopics.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
});


//export const {} = slice.actions;


// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };
//
// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

export default slice.reducer;
