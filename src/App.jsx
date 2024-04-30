import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Outlet, redirect, useNavigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function App() {
  const sidebarStatus = useSelector((state) => state.sidebar.value);
  const apiLimitExceed = useSelector((state) => state.apiLimitExceed);
  const navigate = useNavigate();
  // if(apiLimitExceed.apiLimit){
  //   return (
  //     
  //   )
  // }
  useEffect(() => {
    if (apiLimitExceed.apiLimit) {
      navigate('/limitExceed')
    }
  }, [apiLimitExceed.apiLimit])

  return (
    <Provider store={store}>
      <Header />
      <div className='mt-16'>
        <div className='grid '>
          {
            sidebarStatus === 1 &&
            (
              <>
                <div className="hidden md:block md:col-span-2  fixed left-0  overflow-y-scroll w-[16%]   mb-10 overflow-x-clip sidebar_height" >
                  <Sidebar />
                </div>
                <div className='col-span-12 md:col-span-10 md:ml-60 '>
                  <Outlet />
                </div>
              </>
            )
          }
          {
            sidebarStatus === 2 &&
            (
              <>
                <div className="hidden md:block md:col-span-2 fixed left-0  overflow-y-scroll  w-[6%]  mb-10 overflow-x-clip sidebar_height" >
                  <Sidebar />
                </div>
                <div className='col-span-12 md:col-span-11  md:ml-24'>
                  <Outlet />

                </div>
              </>
            )
          }
          {
            sidebarStatus === 3 &&
            (
              <>
                <div className='md:col-span-12 w-full '>
                  <Outlet />
                </div>
              </>
            )
          }
        </div>
      </div>
    </Provider>
  )
}

export default App
