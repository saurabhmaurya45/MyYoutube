import React, { useState } from 'react'
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import IndexButtonList from './IndexButtonList';
import { useSelector } from 'react-redux';

const IndexButtonContainer = () => {
    const scroller = document.getElementsByClassName('button-container')[0];
    const [leftButtonShow, setLeftButtonShow] = useState(true);
    const [rightButtonShow, setRightButtonShow] = useState(true);
    const sidebarStatus = useSelector((state) => state.sidebar.value);

    const checkButtonVisibility = () => {
        if (scroller.scrollLeft > 0) {
            setLeftButtonShow(true);
        } else {
            setLeftButtonShow(false);
        }

        if (scroller.scrollLeft < scroller.scrollWidth-100) {
            setRightButtonShow(true);
        } else {
            setRightButtonShow(false);
        }
    }

    const rightButtonHandler = () => {
        if (scroller.scrollLeft < scroller.scrollWidth - 100) {
            scroller.scrollLeft += 100;
        } else {
            scroller.scrollLeft = scroller.scrollWidth;
        }
        // checkButtonVisibility();
    }

    const leftButtonHandler = () => {
        if (scroller.scrollLeft > 100) {
            scroller.scrollLeft -= 100;
        } else {
            scroller.scrollLeft = 0;
        }
        // checkButtonVisibility();
    }

    return (
        <div>
            <div className={'button-parent w-[100%]  md:m-0  fixed flex justify-center  '+(sidebarStatus==1?"md:w-[85%]":"md:w-[94%]")}>
                {leftButtonShow && <div className='button-icon-container h-14 bg-white absolute -left-2 md:left-0 top-0 z-10 ml-1 w-[2rem] flex  items-center cursor-pointer' onClick={() => leftButtonHandler()}>
                    <button className='w-10 h-10 mr-1 rounded-full  flex justify-center items-center text-xl font-light '><GoChevronLeft /></button>
                </div>}
                <div className='button-container w-full flex  items-center bg-white overflow-x-scroll py-1 no-scrollbar mx-6 md:mx-8 mr-8 md:mr-16 '>
                    <IndexButtonList />
                </div>
                {rightButtonShow && <div className='button-icon-container h-14 bg-white absolute right-0 md:right-8 top-0 z-10  w-[2rem] flex  items-center cursor-pointer' onClick={() => rightButtonHandler()}>
                    <button className='w-10 h-10 ml-1  rounded-full  flex justify-center items-center text-xl font-light ' ><GoChevronRight /></button>
                </div>}
            </div>
        </div>
    )
}

export default IndexButtonContainer