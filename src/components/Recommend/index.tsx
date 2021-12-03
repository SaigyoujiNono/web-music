import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

function Recommend(props){


    return (
        <div className="recommend-card">
            <div className="title-container">
                <div className="title">
                    &nbsp;&nbsp;<i className="icon-circle-o"></i>&nbsp;&nbsp;
                    {props.title && 
                        <Link to={props.title.url}>{props.title.title}</Link>
                    }
                </div>
                <div className="title-tab">
                    <ul>
                    {props.tab &&
                        props.tab.map((n,index) =>{
                            return (
                                <Fragment key={index}>
                                    <li><Link to={n.url}>{n.title}</Link></li>
                                    {n!==props.tab[props.tab.length - 1]?'|':''}
                                </Fragment>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default Recommend









