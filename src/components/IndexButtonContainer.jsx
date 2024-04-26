import React, { useState } from 'react'
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import IndexButtonList from './IndexButtonList';

const IndexButtonContainer = () => {
    const scroller = document.getElementsByClassName('button-container')[0];
    const [leftButtonShow, setLeftButtonShow] = useState(true);
    const [rightButtonShow, setRightButtonShow] = useState(true);

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
    
    console.log(scroller?.scrollWidth, scroller?.scrollLeft, scroller?.clientWidth);
    return (
        <div>
            <div className='button-parent w-[75rem] fixed'>
                {leftButtonShow && <div className='button-icon-container h-14 bg-white absolute -left-8 top-0 z-10  w-[2rem] flex  items-center cursor-pointer' onClick={() => leftButtonHandler()}>
                    <button className='w-10 h-10 mr-1 rounded-full  flex justify-center items-center text-xl font-light '><GoChevronLeft /></button>
                </div>}
                <div className='button-container w-[95%] flex  items-center bg-white overflow-x-scroll py-1 no-scrollbar'>
                    <IndexButtonList />
                </div>
                {rightButtonShow && <div className='button-icon-container h-14 bg-white absolute right-8 top-0 z-10  w-[2rem] flex  items-center cursor-pointer' onClick={() => rightButtonHandler()}>
                    <button className='w-10 h-10 ml-1  rounded-full  flex justify-center items-center text-xl font-light ' ><GoChevronRight /></button>
                </div>}
            </div>
        </div>
    )
}

export default IndexButtonContainer