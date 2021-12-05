import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArtistPrimaryCategory } from '../../../class/music'
import './index.scss'

const artistCategoryArray:ArtistPrimaryCategory[]=[
    {
        title: '华语',
        second: [
            {title:'华语男歌手',url: 'cnmale'},
            {title:'华语女歌手',url: 'cnfemale'},
            {title:'华语组合/乐队',url: 'cngroup'}
        ]
    },
    {
        title: '欧美',
        second: [
            {title:'欧美男歌手',url: 'eamale'},
            {title:'欧美女歌手',url: 'eafemale'},
            {title:'欧美组合/乐队',url: 'eagroup'}
        ]
    },
    {
        title: '日本',
        second: [
            {title:'日本男歌手',url: 'jpmale'},
            {title:'日本女歌手',url: 'jpfemale'},
            {title:'日本组合/乐队',url: 'jpgroup'}
        ]
    },
    {
        title: '韩国',
        second: [
            {title:'韩国男歌手',url: 'krmale'},
            {title:'韩国女歌手',url: 'krfemale'},
            {title:'韩国组合/乐队',url: 'krgroup'}
        ]
    },
    {
        title: '其他',
        second: [
            {title:'其他男歌手',url: 'othermale'},
            {title:'其他女歌手',url: 'otherfemale'},
            {title:'其他组合/乐队',url: 'othergroup'}
        ]
    },
]

function ArtistPage(){
    const location = useLocation()
    return (
        <div className="container artist-page">
            <div className="left">
                <div className="artist-category">
                    <span className="category-title">推荐</span>
                    <ul>
                        <li><Link className={location.pathname === '/discover/artist'?'active':''} to="/discover/artist">推荐歌手</Link></li>
                        <li><NavLink to="/discover/artist/entry">入驻歌手</NavLink></li>
                    </ul>
                </div>
                {
                    artistCategoryArray.map((n,index)=>{
                        return (
                            <div key={index} className="artist-category">
                                <span className="category-title">{n.title}</span>
                                <ul>
                                    {
                                        n.second.map((n,index)=>{
                                            return <li key={index}><NavLink to={`/discover/artist/${n.url}`}>{n.title}</NavLink></li>
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div className="right">
                <Outlet></Outlet>
            </div>
        </div>
    )
}


export default ArtistPage




