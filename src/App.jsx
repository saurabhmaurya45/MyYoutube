import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { useSelector } from 'react-redux'

function App() {
  const sidebarStatus = useSelector((state) => state.sidebar.value);

  return (
    <Provider store={store}>
      <Header />
      <div className='mt-16'>
        <div className='grid '>
          {
            sidebarStatus === 1 &&
            (
              <>
                <div className="col-span-2  fixed left-0  overflow-y-scroll w-[16%]   mb-10 overflow-x-clip sidebar_height" >
                  <Sidebar />
                </div>
                <div className='col-span-10 ml-60 '>
                  <Outlet />
                </div>
              </>
            )
          }
          {
            sidebarStatus === 2 &&
            (
              <>
                <div className="col-span-1 fixed left-0  overflow-y-scroll  w-[6%]  mb-10 overflow-x-clip sidebar_height" >
                  <Sidebar />
                </div>
                <div className='col-span-11 ml-24'>
                  <Outlet />
                </div>
              </>
            )
          }
          {
            sidebarStatus === 3 &&
            (
              <>
                <div className='col-span-12'>
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
