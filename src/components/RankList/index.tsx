import { Link } from 'react-router-dom';
import './index.scss';


function RankList(props): JSX.Element{

    return (
        <div className="rank-list">
            <div className="title">
                <div className="cover">
                    <img src={props.info.cover} alt="" />
                </div>
                <div className="description">
                    <Link to={props.info.url}><span>{props.info.title}</span></Link>
                    <div>
                        <i className="fa fa-play-circle-o"></i>
                        <i className="fa fa-folder-open-o"></i>
                    </div>
                </div>
            </div>
            <div className="list">
                {
                    props.info.list.map((n,index) => {
                        return (
                            <div key={index} className={index%2===0?'deep':''}><span className={index<=2?'front':'end'}>{index+1}</span><Link to={n.url}><span>{n.title}</span></Link></div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RankList;