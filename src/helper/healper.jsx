import parse from 'html-react-parser';
import { liveCommentDummyData } from '../constants/liveCommentDummyData';
import {imageJsonData } from '../constants/ImageJsonData';

function getFormatedStringFromDays(numberOfDays) {
    var returnString = ""; 
    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor(numberOfDays % 365 / 30);
    var days = Math.floor(numberOfDays % 365 % 30);
    if (years > 0) {
        returnString += years + " years ";
    }
    if (months > 0) {
        returnString += months + " months ";
    }
    if (days > 0) {
        returnString += days + " days ";
    }
    return returnString;
}

export const dateToDays = (date) => {
    const today = new Date();
    const videoDate = new Date(date);
    const diffTime = Math.abs(today - videoDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return getFormatedStringFromDays(diffDays);
}


export const formatDescription = (description) => {
    const formattedDescription = description.replace(/(?:\r\n|\r|\n)/g, '<br/>');
    return parse(formattedDescription);
}
export const randomColorGenerator = () => {
    return  Math.floor(Math.random()*16777215).toString(16);
}

export const randomImageGenerator = (data) => {
    return `https://i.pickadummy.com/index.php?imgsize=64x64&color=${randomColorGenerator()}&text=${data}`;
}

export const randomImageSelector = () => {
    const image = imageJsonData[Math.floor(Math.random() * imageJsonData.length)];
    return image;
}
export const randomIdGenerator = () => {
    return Math.random().toString(36).substr(2, 9);
}

export const randomComment = ()=>{
    const comment = liveCommentDummyData[Math.floor(Math.random() * liveCommentDummyData.length)];

    return {
        ...comment,
        image: randomImageSelector(),
        id : randomIdGenerator()
    }
}