import './index.scss';
import {Link, useLocation} from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';

function NavBar(){
    const [lock,setLock] = useState(false)
    const [homeActive, setHomeActive] = useState(0)
    const navbar = useRef(null)
    let location = useLocation()
    useEffect(()=>{
        //导航栏滚动
        let scrollPosition = window.scrollY
        const listener = () => {
            let navbarEl:HTMLElement = navbar.current
            if (window.scrollY>scrollPosition){
                //向下
                if (!lock){
                    navbarEl.classList.remove('animation-scroll-top')
                    navbarEl.classList.add('animation-scroll-down')
                }
            }else {
                //向上
                if (!lock){
                    navbarEl.classList.remove('animation-scroll-down')
                    navbarEl.classList.add('animation-scroll-top')
                }
            }
            scrollPosition = window.scrollY
        }
        document.addEventListener('scroll',listener)
        //主导航active
        if(location.pathname === '/' || location.pathname.match('\\/discover\\/?')){
            setHomeActive(0)
        }else if(location.pathname.match('\\/about\\/?')){
            setHomeActive(3)
        }else if(location.pathname.match('\\/mymusic\\/?')){
            setHomeActive(1)
        }else if(location.pathname.match('\\/friend\\/?')){
            setHomeActive(2)
        }else{
            setHomeActive(-1)
        }
        return ()=>{
            document.removeEventListener('scroll',listener)
        }
    },[lock,location])
    
    function changeTab(val:number){
        return ()=>{
            setHomeActive(val)
        }
    }

    //次级导航选择
    const [secondActive, setSecondActive] = useState(2)
    function changeSecond(val:number){
        return ()=>{
            setSecondActive(val)
        }
    }

    return(
        <div ref={navbar} className="navbar" >
            <div className="navbar-container">
                <div className="logo"><Link to="/">LOGO</Link></div>
                <ul className="navbar-item">
                    <li><Link onClick={changeTab(0)} className={homeActive===0?'active': ''} to="/">发现音乐</Link></li>
                    <li><Link onClick={changeTab(1)} className={homeActive===1?'active': ''} to="/mymusic">我的音乐</Link></li>
                    <li><Link onClick={changeTab(2)} className={homeActive===2?'active': ''} to="/friend">朋友</Link></li>
                    <li><Link onClick={changeTab(3)} className={homeActive===3?'active': ''} to="/about">关于</Link></li>
                </ul>
            </div>
            <div className={"navbar-second "+(homeActive === 0 ? "active" : "unactive")}>
                {homeActive === 0 &&
                    <div className="second-container">
                        <ul className="menu">
                            <li><Link onClick={changeSecond(0)} className={secondActive===0?'active': ''} to="/discover">推荐</Link></li>
                            <li><Link onClick={changeSecond(1)} className={secondActive===1?'active': ''} to="/discover">排行榜</Link></li>
                            <li><Link onClick={changeSecond(2)} className={secondActive===2?'active': ''} to="/discover">歌单</Link></li>
                            <li><Link onClick={changeSecond(3)} className={secondActive===3?'active': ''} to="/discover">主播电台</Link></li>
                            <li><Link onClick={changeSecond(4)} className={secondActive===4?'active': ''} to="/discover">歌手</Link></li>
                            <li><Link onClick={changeSecond(5)} className={secondActive===5?'active': ''} to="/discover">新碟上架</Link></li>
                        </ul>
                    </div>
                }
            </div>
            <input type="checkbox" name="" id="lock-bar" checked={lock} onChange={()=>setLock(!lock)} />
        </div>
    )
}


export default NavBar