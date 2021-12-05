import { Link } from 'react-router-dom'
import './index.scss'


function ArtistCard({artist}){
    return (
        <li className="artist-card">
            {artist.avatar && 
                <div className="artist-avatar">
                    <img src={artist.avatar} alt="" />
                    <Link className="song msk" to={'/artist/'+artist.artistId}></Link>
                </div>
            }
            <div className="artist-intro">
                <Link to={'/artist/'+artist.artistId} className="artist-name">{artist.name}</Link>
                {artist.userId &&
                    <Link to={'/user/'+artist.userId} className={artist.avatar?'artist-user right-float':'artist-user'}><i className="fa fa-user-circle"></i></Link>
                }
            </div>
        </li>
    )
}


export default ArtistCard



