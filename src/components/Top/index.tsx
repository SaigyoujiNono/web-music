import './index.scss'
import {useState,useEffect} from 'react'

function Top(){
    const [show, switchShow] = useState(false); // 设置状态

    useEffect(()=>{
      const listener = () =>{
          switchShow(window.scrollY > 100)
      }
      document.addEventListener('scroll', listener);
      return ()=>document.removeEventListener('scroll', listener); 
    }, [show])
    return (
        <div className="top-container" style={{display: show?'flex':'none'}}>
            <i className="fa fa-angle-up" onClick={()=>window.scrollTo({left: 0,top: 0,behavior: 'smooth'})}/>
        </div>
    )
}



export default Top

