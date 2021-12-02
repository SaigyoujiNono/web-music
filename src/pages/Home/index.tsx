import Carousel from '../../components/Carousel'
import Recommend from '../../components/Recommend'
import SongListCard from '../../components/SongListCard';
import './index.scss'
//标题
interface Title{
    title: string;
    url: string;
}
//歌单
interface PlayList{
    playCount: number;
    cover:string;
    title:string;
    url:string;
}
function Home(){
    //推荐块的副标签
    const tabArray: Array<Title> = [
        {title: '华语',url:'/'},
        {title: '摇滚',url:'/'},
        {title: '民谣',url:'/'},
        {title: '电子',url:'/'}
    ]
    
    //推荐块的歌单列表
    const PlayListArray: Array<PlayList> = [
        {
            title:'文物图鉴|甲骨问策，篆饰为妆，风雅入宫商',
            url:'/',
            cover: 'https://p4.music.126.net/UKn4ofndgUi1_tvEiQhsqg==/109951166650899444.jpg?param=200y200',
            playCount:495482
        },
        {
            title:'纯音 | 缓解压力.安眠.去享受孤独',
            url:'/',
            cover: 'https://p4.music.126.net/fwdzwLoiVilnyxQTbVsKQA==/109951166586104216.jpg?param=200y200',
            playCount:19578542
        },
        {
            title:'华语民谣 I 孤独的心诠释诗意和远方',
            url:'/',
            cover: 'https://p4.music.126.net/UDpjFEHmXInxGd_xMAI12w==/109951162811986419.jpg?param=200y200',
            playCount:20428242
        },
        {
            title:'「乐器大师」流行歌曲与管弦乐器的浪漫邂逅',
            url:'/',
            cover: 'https://p4.music.126.net/hoUVnjKPGTD9CWbWSmRncA==/109951164227086022.jpg?param=200y200',
            playCount:4412242
        },
        {
            title:'文物图鉴|甲骨问策，篆饰为妆，风雅入宫商',
            url:'/',
            cover: 'https://p4.music.126.net/UKn4ofndgUi1_tvEiQhsqg==/109951166650899444.jpg?param=200y200',
            playCount:495482
        },
        {
            title:'纯音 | 缓解压力.安眠.去享受孤独',
            url:'/',
            cover: 'https://p4.music.126.net/fwdzwLoiVilnyxQTbVsKQA==/109951166586104216.jpg?param=200y200',
            playCount:19578542
        },
        {
            title:'华语民谣 I 孤独的心诠释诗意和远方',
            url:'/',
            cover: 'https://p4.music.126.net/UDpjFEHmXInxGd_xMAI12w==/109951162811986419.jpg?param=200y200',
            playCount:20428242
        },
        {
            title:'「乐器大师」流行歌曲与管弦乐器的浪漫邂逅',
            url:'/',
            cover: 'https://p4.music.126.net/hoUVnjKPGTD9CWbWSmRncA==/109951164227086022.jpg?param=200y200',
            playCount:4412242
        }
    ]
    return (
        <div className="home">
            <Carousel></Carousel>
            <div className="content-container">
                <div className="content-left">
                    <Recommend tab={tabArray} title={{title:'编辑推荐',url:'/'}}>
                        <div className="recommend">
                            {PlayListArray.map((n,index)=>{
                                return (
                                    <SongListCard key={index} playListInfo={n}></SongListCard>
                                )
                            })}
                        </div>
                    </Recommend>
                </div>
                <div className="content-right">
                </div>
            </div>
        </div>
    )
}


export default Home