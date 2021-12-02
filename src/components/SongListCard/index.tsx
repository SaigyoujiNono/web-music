import { Link } from 'react-router-dom'
import './index.scss'

function SongListCard(props){
    

    return (
        <div className="play-list-container">
            <div className="cover">
                <Link to={props.playListInfo.url}><img src={props.playListInfo.cover} alt="" /></Link>
                <div className="playInfo">
                    <span>
                        <i className="fa fa-headphones"></i>
                    </span>
                    <span>
                        {props.playListInfo.playCount> 10000 ? parseInt(props.playListInfo.playCount/10000+'')+'万':props.playListInfo.playCount}
                    </span>
                    <Link className="play-entry" to={props.playListInfo.url}><i className="fa fa-play-circle-o"></i></Link>
                </div>
                <div className="title">
                    <Link to={props.playListInfo.url}>
                        {props.playListInfo.title}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SongListCard


