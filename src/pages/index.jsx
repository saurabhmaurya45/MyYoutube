import { useEffect } from 'react';
import VideoCardContainer from '../components/VideoCardContainer';
import { resetSideBar } from '../redux/sidebarStatusSlice';
import { useDispatch, useSelector } from 'react-redux';
import IndexButtonContainer from '../components/IndexButtonContainer';

const Index = () => {
  const dispatch = useDispatch();
  const sidebarStatus = useSelector((state) => state.sidebar.value);
  

  useEffect(() => {
    if (sidebarStatus === 3) {
      dispatch(resetSideBar())
    }
  }, [])

  return (
    <>
      <IndexButtonContainer />

      <div className='mt-12'><VideoCardContainer /></div>
    </>
  )
}


export default Index;