import { IndexButtonListData } from '../constants/IndexButtonListData'


const IndexButtonList = () => {
  const buttonList = IndexButtonListData;
  
  return (
    <>

        {buttonList.map((button, index) => (
          <button className='m-1 px-4 h-10  bg-gray-100 rounded-lg text-sm font-medium text-nowrap' key={Math.random() * index}>{button}</button>
        ))}

      
    </>
  )
}

export default IndexButtonList