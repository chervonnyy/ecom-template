import React from 'react';
import Icon from '@material-ui/core/Icon';

const wrapperRef = React.createRef();

const slides = ['orange', 'blue', 'pink'];
const classes = slides.map(slide => `slider__slide slider__slide_${slide}`);

const slideWidth = 500;

const move = direction => {
    const currentPosition = parseInt(getComputedStyle(wrapperRef.current).transform.split(', ')[4]);
    const swing = (direction === 'right') ? -slideWidth : slideWidth;
    let newPosition = currentPosition + swing;

    if (Math.abs(newPosition) >= slideWidth * slides.length) newPosition = 0;
    if (newPosition > 0) newPosition = slideWidth * -slides.length + swing;

    wrapperRef.current.style.transform = `translateX(${newPosition}px)`;
}

setInterval(() => move('right'), 3000);

const Slider = () => {
    return (
    <div className="slider">
        <div className="slider__wrapper" ref={wrapperRef}>
            {classes.map((className, index) => <div className={className} key={index}><span>{index + 1}</span></div>)}
        </div>
        <div className="slider__control slider__control_prev" onClick={() => move('left')}>
                <Icon>fast_rewind</Icon>
            </div>
        <div className="slider__control slider__control_next" onClick={() => move('right')}>
            <Icon>fast_forward</Icon>
            </div>
    </div>)
}

export default Slider;