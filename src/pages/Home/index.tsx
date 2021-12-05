import { useEffect, useState } from 'react';
import { homeNewRecord, homeSongListRecommend } from '../../class/recommendData';
import Carousel from '../../components/Carousel'
import LoginInfo from '../../components/LoginInfo';
import RankList from '../../components/RankList';
import Recommend from '../../components/Recommend'
import Record from '../../components/Record';
import SongListCard from '../../components/SongListCard';
import './index.scss'
//标题
interface Title{
    title: string;
    url: string;
}
//排行榜单
interface RankListObj{
    title:string;
    cover: string;
    url: string;
    list:Array<Title>;
}
function Home(){
    //推荐块的副标签
    const tabArray: Array<Title> = [
        {title: '华语',url:'/'},
        {title: '摇滚',url:'/'},
        {title: '民谣',url:'/'},
        {title: '电子',url:'/'}
    ]

    //首页榜单数据
    const rankArray:Array<RankListObj> = [
        {
            title: '飙升榜',
            url: '/',
            cover:'http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100',
            list: [
                {title: `too much`,url: '/'},
                {title: `It'll Be Okay`,url: '/'},
                {title: `问心`,url: '/'},
                {title: `Boring Day`,url: '/'},
                {title: `神魂颠倒`,url: '/'},
                {title: `Star`,url: '/'},
                {title: `秒针 (Dj版)`,url: '/'},
                {title: `Enemy (from the series Arcane League of Legends)`,url: '/'},
                {title: `勇气`,url: '/'},
                {title: `楼顶上的小斑鸠`,url: '/'},
            ]
        },
        {
            title: '新歌榜',
            url: '/',
            cover: 'http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100',
            list: [
                {title: `too much`,url: '/'},
                {title: `It'll Be Okay`,url: '/'},
                {title: `问心`,url: '/'},
                {title: `Boring Day`,url: '/'},
                {title: `神魂颠倒`,url: '/'},
                {title: `Star`,url: '/'},
                {title: `秒针 (Dj版)`,url: '/'},
                {title: `Enemy (from the series Arcane League of Legends)`,url: '/'},
                {title: `勇气`,url: '/'},
                {title: `楼顶上的小斑鸠`,url: '/'},
            ]
        },
        {
            title: '原创榜',
            url: '/',
            cover:'http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100',
            list: [
                {title: `too much`,url: '/'},
                {title: `It'll Be Okay`,url: '/'},
                {title: `问心`,url: '/'},
                {title: `Boring Day`,url: '/'},
                {title: `神魂颠倒`,url: '/'},
                {title: `Star`,url: '/'},
                {title: `秒针 (Dj版)`,url: '/'},
                {title: `Enemy (from the series Arcane League of Legends)`,url: '/'},
                {title: `勇气`,url: '/'},
                {title: `楼顶上的小斑鸠`,url: '/'},
            ]
        },
    ]
    
    //推荐块的歌单列表
    const [playList,setPlayList] = useState<Array<any>>(null)
    const [newRecord, setNewRecord] = useState<Array<any>>(null)
    useEffect(()=>{
        setPlayList(homeSongListRecommend)
        setNewRecord(homeNewRecord)
    },[])
    return (
        <div className="home">
            <Carousel></Carousel>
            <div className="container content-container">
                <div className="content-left">
                    <Recommend isIcon={true} tab={tabArray} title={{title:'编辑推荐',url:'/'}}>
                        <div className="recommend">
                            {playList &&
                                playList.map((n,index)=>{
                                    return (
                                        <SongListCard key={index} playListInfo={n}></SongListCard>
                                    )
                                })
                            }
                        </div>
                    </Recommend>
                    <Recommend isIcon={true} title={{title:'新碟上架',url:'/'}}>
                        <div className="new-record">
                            <div className='rl-left-btn'></div>
                            <div className='record-content'>
                                <ul className="record-list">
                                    {newRecord && 
                                        newRecord.map((n,index)=>{
                                            return <Record key={index} album={n}></Record>
                                        })
                                    }
                                </ul>
                            </div>
                            <div className='rl-right-btn'></div>
                        </div>
                    </Recommend>
                    <Recommend isIcon={true} title={{title:'榜单',url:'/'}}>
                        <div className="rank-list-group">
                            {rankArray.map((n,index)=>{
                                return (
                                    <RankList key={index} info={n}></RankList>
                                )
                            })}
                        </div>
                    </Recommend>
                </div>
                <div className="content-right">
                    <LoginInfo></LoginInfo>
                </div>
            </div>
        </div>
    )
}


export default Home