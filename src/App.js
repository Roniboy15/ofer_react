import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import './App.css';
import AppRoutes from './appRoutes';
import counterSlice from './features/counterSlice';
import shopSlice from './features/shopSlice';

const myStore = configureStore({
  reducer:{
    counterSlice,
    shopSlice
  }
})

function App() {
  return (
    <Provider store={myStore}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
