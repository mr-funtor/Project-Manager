import './App.css'
import CustomLoader from './components/shared/CustomLoader'
import CustomToast from './components/shared/CustomToast'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <CustomLoader/>
      <CustomToast/>
      <AppRoutes/>
    </>
  )
}

export default App
