import { Link } from 'react-router-dom'
import './index.scss'


function RadioCard(props){

    const {url,title,second,cover} = props.info
    return (
        
        <li className="radio-card">
            <Link to={url}>
                <img src={cover} alt="" />
            </Link>
            <div className="info">
                <Link className="title" to="/discover/radio">
                    {title}
                </Link>
                <Link className="second" to="/discover/radio">
                    {second}
                </Link>
            </div>
        </li>
    )
}


export default RadioCard




