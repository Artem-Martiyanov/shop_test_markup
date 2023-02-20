import React, {useEffect, useState} from 'react';import cl from "./Slider.module.css";import {useSwipeable} from "react-swipeable";import SliderThumbnails from "./SliderThumbnails";const Slider = ({images}) => {    const [screenWidth, setScreenWidth] = useState(window.innerWidth);    useEffect(() => {        const handleResize = event => setScreenWidth(event.target.innerWidth)        window.addEventListener('resize', handleResize)        return () => window.removeEventListener('resize', handleResize)    }, [])    const isPhoneScreen = () => screenWidth <= 320    let thumbClass = isPhoneScreen() ? cl.phoneThumbnail : cl.thumbnail    const [currentImage, setCurrentImage] = useState(0)    const [imgClasses, setImgClasses] = useState([cl.img])    const [thumbClasses, setThumbClasses] = useState(images.map(() => thumbClass))    const handleMouseEnter = (currentIndex) => {        setImgClasses([cl.img, cl.visible])        setCurrentImage(currentIndex)    }    const swipeHandler = useSwipeable({        onSwipedLeft: () => {            setCurrentImage(prev => {                if (prev === images.length - 1) {                    setImgClasses([cl.img, cl.visible])                    return 0                }                setImgClasses([cl.img, cl.visible])                return prev += 1            })        },        onSwipedRight: () => {            setCurrentImage(prev => {                if (prev === 0) {                    setImgClasses([cl.img, cl.visible])                    return images.length - 1                }                setImgClasses([cl.img, cl.visible])                return prev -= 1            })        },    })    useEffect(() => {        setThumbClasses(thumbClasses.map((item, i) => currentImage === i ? `${thumbClass} ${cl.active}` : thumbClass))    }, [currentImage, screenWidth])    return (        <div className={cl.wrapper}>            <div className={cl.picture} {...swipeHandler}>                <img className={imgClasses.join(' ')}                     src={require(images[currentImage].original)}                     alt='Фото продукта крупно.'                     onAnimationEnd={() => setImgClasses([cl.img])}                />            </div>            <SliderThumbnails                className={isPhoneScreen() ? cl.phoneThumbList : cl.thumbList}                images={images}                onMouseEnter={handleMouseEnter}                thumbClasses={thumbClasses}            />        </div>    );};export default Slider