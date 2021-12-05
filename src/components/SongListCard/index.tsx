import { Link } from 'react-router-dom'
import './index.scss'

function SongListCard({playListInfo}){
    

    return (
        <div className="play-list-container">
            <div className="cover">
                <img src={playListInfo.picUrl} alt="" />
                <div className="playInfo">
                    <span>
                        <i className="fa fa-headphones"></i>
                    </span>
                    <span>
                        {playListInfo.playcount> 10000 ? parseInt(playListInfo.playcount/10000+'')+'万':playListInfo.playcount}
                    </span>
                    <Link className="play-entry" to={'/playlist/'+playListInfo.id}><i className="fa fa-play-circle-o"></i></Link>
                </div>
                <Link className="song msk" to={'/playlist/'+playListInfo.id}></Link>
            </div>
            <div className="title">
                    <Link to={'/playlist/'+playListInfo.id}>
                        {playListInfo.name}
                    </Link>
                </div>
        </div>
    )
}

export default SongListCard


