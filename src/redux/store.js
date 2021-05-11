import { configureStore } from '@reduxjs/toolkit'

import topicsReducer from 'redux/slices/topics'

export default configureStore({
  reducer: {
    topics: topicsReducer
  }
})
