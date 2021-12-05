import './index.scss';
import {Link, NavLink, useLocation} from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';

function NavBar(){
    const [lock,setLock] = useState(false)
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

        return ()=>{
            document.removeEventListener('scroll',listener)
        }
    },[lock,location])

    return(
        <div ref={navbar} className="navbar" >
            <div className="navbar-container">
                <div className="logo"><Link to="/">LOGO</Link></div>
                <ul className="navbar-item">
                    <li><NavLink className={location.pathname.match('\\/discover\\/?')?'active': ''} to="/">发现音乐</NavLink></li>
                    <li><NavLink to="/mymusic">我的音乐</NavLink></li>
                    <li><NavLink to="/friend">朋友</NavLink></li>
                    <li><NavLink to="/about">关于</NavLink></li>
                </ul>
            </div>
            <div className={"navbar-second "+((location.pathname.match('\\/discover\\/?') || location.pathname==='/') ? "active" : "unactive")}>
                {(location.pathname.match('\\/discover\\/?') || location.pathname==='/') &&
                    <div className="second-container">
                        <ul className="menu">
                            <li><NavLink className={location.pathname === '/' || location.pathname === '/discover'?'active': ''} to="/discover/">推荐</NavLink></li>
                            <li><NavLink to="/discover/ranking">排行榜</NavLink></li>
                            <li><NavLink to="/discover/playlist">歌单</NavLink></li>
                            <li><NavLink to="/discover/radio">主播电台</NavLink></li>
                            <li><NavLink to="/discover/artist">歌手</NavLink></li>
                            <li><NavLink to="/discover/newrecord">新碟上架</NavLink></li>
                        </ul>
                    </div>
                }
            </div>
            <input type="checkbox" name="" id="lock-bar" checked={lock} onChange={()=>setLock(!lock)} />
        </div>
    )
}


export default NavBar