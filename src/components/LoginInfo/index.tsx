import { Link } from 'react-router-dom'
import './index.scss'

function LoginInfo(){
    

    return (
        <div className="login-info">
            <div className="profile">
                <Link to=""><img src="http://p1.music.126.net/M4w_dqAHD-Ts1ugsJihsoA==/109951164256885762.jpg?param=80y80" alt="" /></Link>
                <Link to=""><span>用户名啊啊啊啊</span></Link>
            </div>
            <div className="followed">
                <Link to="/">
                    <div>   
                        10
                        <br/>
                        <span>动态</span>
                    </div>
                </Link>
                <Link to="/">
                    <div>
                        23
                        <br/>
                        <span>关注</span>
                    </div>
                </Link>
                <Link to="/">
                    <div>
                    514
                    <br/>
                    <span>粉丝</span>
                </div>
                </Link>
                
            </div>
        </div>
    )
}

export default LoginInfo