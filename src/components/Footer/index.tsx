import { Link } from 'react-router-dom'
import './index.scss'
function Footer(){
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <table>
                        <tbody>
                            <tr>
                                <td><Link to="/">服务条款</Link>&nbsp;&nbsp;|</td>
                                <td>&nbsp;&nbsp;<Link to="/">隐私政策</Link>&nbsp;&nbsp;|</td>
                                <td>&nbsp;&nbsp;<Link to="/">儿童隐私政策</Link>&nbsp;&nbsp;|</td>
                                <td>&nbsp;&nbsp;<Link to="/">版权投诉指引</Link>&nbsp;&nbsp;|</td>
                                <td>&nbsp;&nbsp;<Link to="/">意见反馈</Link>&nbsp;&nbsp;|</td>
                                <td>&nbsp;&nbsp;<Link to="/">广告合作</Link></td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    <table className="deep-font">
                        <tbody>
                            <tr>
                                <td>SaigyoujiNono版权所有©2021-2021&nbsp;&nbsp;|</td>
                                <td>&nbsp;&nbsp;XXXXXXXXX有限公司运营：<Link to="/">XXX[2021] XXXX-XXX号</Link></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="deep-font">
                        <tbody>
                            <tr>
                                <td>违法和不良信息举报电话：xxxx-xxxxxxxx&nbsp;&nbsp;|</td>
                                <td>&nbsp;&nbsp;举报邮箱：<Link to="/">1029259127@qq.com</Link></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="deep-font">
                        <tbody>
                            <tr>
                                <td><Link to="/">粤B2-20090191-18  工业和信息化部备案管理系统网站</Link>&nbsp;&nbsp;|</td>
                                <td>&nbsp;&nbsp;<Link to="/"> 备案号 xxxxxxxxxxxxxx号</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="right">
                    <div><a href="https://github.com/SaigyoujiNono" rel="noreferrer" target="_blank"><i className="fa fa-weixin"></i></a></div>
                    <div><a href="https://github.com/SaigyoujiNono" rel="noreferrer" target="_blank"><i className="fa fa-weibo"></i></a></div>
                    <div><a href="https://github.com/SaigyoujiNono" rel="noreferrer" target="_blank"><i className="fa fa-qq"></i></a></div>
                    <div><a href="https://github.com/SaigyoujiNono" rel="noreferrer" target="_blank"><i className="fa fa-twitter"></i></a></div>
                    <div><a href="https://github.com/SaigyoujiNono" rel="noreferrer" target="_blank"><i className="fa fa-github"></i></a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer