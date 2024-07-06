import { useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './apps/store'
import Loader from './Components/Loader/Loader'


function App() {

  useEffect(() => {
    let theme = JSON.parse(localStorage.getItem('theme'));

    if(theme === null) {
      document.querySelector('html').classList.remove('null')
      localStorage.setItem('theme', '"dark"')
      document.querySelector('html').classList.add('dark')
    }
  },[])

  useEffect(() => {
      const url = String(import.meta.env.VITE_URL);
      const check = async () => {
        await fetch(url, {
          method: "POST"
        })
      }
      check();
  }, [])

  return (
    <Provider store={store}>
      <div className='overflow-hidden bg-lightLoki dark:bg-darkLoki'>
        <div className='flex relative z-[999]'>
          <Loader />
        </div>
        <div className='relative z-[100]'>
          <Navbar />
        </div>
        <Outlet />
      </div>
    </Provider>
  )
}

export default App
