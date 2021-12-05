import { Link } from 'react-router-dom'
import './index.scss'


function Record({album}){


    return (
        <li className='record'>
            <div className='record-cover'>
                <img src={album.blurPicUrl} alt="" />
                <Link to={'/'} className='record msk'></Link>
            </div>
            <div>
                <span>{album.name}</span><br/>
                <span>{album.artist.name}</span>
            </div>
        </li>
    )

}


export default Record