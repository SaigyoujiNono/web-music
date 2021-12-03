import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './index.scss'
interface CarouselSingle{
    url: string;
    target: string;
}

let timer = null
function Carousel(){
    const [current,setCurrent] = useState(0)
    const carouselList = useMemo<CarouselSingle[]>(()=>{
        return [
            {
                url:'http://p1.music.126.net/xezdhj44iGIXZ3mDOu0zzQ==/109951166677516697.jpg?imageView&quality=89',
                target: '/'
            },
            {
                url:'http://iadmusicmat.music.126.net/76574635da6f441d903e41db9b502687.jpg?imageView&quality=89',
                target: '/'
            },
            {
                url:'http://p1.music.126.net/XNG-BEqUigizNTf80114LA==/109951166677811355.jpg?imageView&quality=89',
                target: '/'
            },
            {
                url:'http://p1.music.126.net/UcwDMvhm2dpagflDhgK4jA==/109951166681419498.jpg?imageView&quality=89',
                target: '/'
            }
        ]
    },[])
    const currentCarousel = useMemo<CarouselSingle>(()=>{
        return carouselList[current]
    },[current,carouselList])

    //切换头图
    const changeCarousel = useCallback(function(isNext:Boolean){
        return ()=>{
            let nextImg
            if(isNext){
                nextImg = (current+1)%carouselList.length
            }else{
                nextImg = ((current-1)<0?carouselList.length-1:current-1)%carouselList.length
            }
            setCurrent(nextImg)
        }
    },[current,carouselList.length])
    const imgRef = useRef(null)
    //鼠标进入
    function mouseEnter(){
        clearInterval(timer)
        timer = null
    }
    function mouseLeave(){
        if(!timer){
            timer = setInterval(()=>{
                changeCarousel(true)()
            },loopTime)
        }
    }
    const loopTime = 5000
    useEffect(()=>{
        if(!timer){
            timer = setInterval(()=>{
                changeCarousel(true)()
            },loopTime)
        }
        return ()=>{
            clearInterval(timer)
            timer = null
        }
    },[changeCarousel])
    return (
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="carousel-container">
            {/* 虚化背景 */}
            <div className="filter-bg" style={{backgroundImage: `url(${currentCarousel.url})`}}></div>
            {/* 轮播图片 */}
            <div className="carousel-img">
            <Link to={currentCarousel.target}>
                <img ref={imgRef} className="test" src={currentCarousel.url} alt="" /> 
            </Link>
            <div onClick={changeCarousel(false)} className="carousel-btn left">
                <i className="fa fa-angle-left"></i>
            </div>
            <div onClick={changeCarousel(true)} className="carousel-btn right">
                <i className="fa fa-angle-right"></i>
            </div>
            </div>
            <div className="select-pointer">
                {carouselList.map((_,index)=>{
                    return <span key={index} className={index===current?'active':''} onClick={()=>setCurrent(index)}></span>
                })}
            </div>
            
        </div>
    )
}

export default Carousel
