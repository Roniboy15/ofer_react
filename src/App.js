import AppRoutes from './appRoutes';
import counterSlice from './features/counterSlice';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const myStore = configureStore({
  reducer: {
    counterSlice
  }
})

const App = () => {
  return (
    <Provider store={myStore}>
      <AppRoutes/>
    </Provider>
  )
}

export default App