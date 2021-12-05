import { RadioCategory } from '../../../class/music'
import RadioCard from '../../../components/RadioCard'
import Recommend from '../../../components/Recommend'
import './index.scss'


function RadioPage(props){

    const RadioInfoArray:RadioCategory[]=[
        {
            title: '音乐推荐·电台',
            url: '/discover/radio',
            radioArr:[
                {
                    cover:'http://p2.music.126.net/BHylP_pUA44toT4D9d-O4g==/109951166254078956.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'硬地电台',
                    second: '硬地原创音乐榜·独家播客企划',
                },
                {
                    cover:'http://p2.music.126.net/7vp_Ol1ZzF01uDb0-cMliA==/109951165933712260.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'民谣之声～每天听的歌～',
                    second: '【独家】DJ徐亮精选，陪你听听歌',
                },
                {
                    cover:'http://p2.music.126.net/YjNOWzSW96soVbC8MZ4JIA==/109951166148077619.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'JUNGLE RADIO',
                    second: '提供贴合当下情景与心境的MIX',
                },
                {
                    cover:'http://p2.music.126.net/l1XyA1qxgc9y-ji6IX1dcw==/109951165666492923.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'维维道来',
                    second: '【独家】刘维首档音乐播客',
                },
            ]
        },
        {
            title: '生活·电台',
            url: '/discover/radio',
            radioArr:[
                {
                    cover:'http://p2.music.126.net/JPk2s9W9m7R0-9z3H_IkFg==/109951166338983011.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'童话冥想：御姐音 | 一听就困 不再失眠',
                    second: '御姐音治愈你的失眠',
                },
                {
                    cover:'http://p2.music.126.net/0_Bm5m6T39bXHOhSJMwA4Q==/109951166348089877.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'轻松频率:氛围轻音&助眠&学习&解压',
                    second: '氛围轻音&助眠&学习&解压',
                },
                {
                    cover:'http://p2.music.126.net/mBI7jjLnFNQlG-suBUvh-g==/109951166366136048.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'正念冥想引导',
                    second: '声音疗愈｜个人成长',
                },
                {
                    cover:'http://p2.music.126.net/wRk7ZHzgVnmGVhGm-pOZcQ==/109951166246384827.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'放松白噪音｜住在小森林',
                    second: '在小森林里安然入睡',
                },
            ]
        },
        {
            title: '情感·电台',
            url: '/discover/radio',
            radioArr:[
                {
                    cover:'http://p2.music.126.net/niY6PGMzmGPFxigkDZO44Q==/109951166532200394.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'失眠城市——陪你一起等天明',
                    second: '用温暖的声音治愈你',
                },
                {
                    cover:'http://p2.music.126.net/Lzz18amSXZzFaJRh7P0J9g==/19211766672361937.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'平凡的时间里',
                    second: '记录细碎过往和微小爱意',
                },
                {
                    cover:'http://p2.music.126.net/KmrifkCXhBwgP3aNxameYw==/109951165809996678.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'人间太匆匆',
                    second: '所有的感情都来自于偏爱',
                },
                {
                    cover:'http://p2.music.126.net/XC9b64eR_QpfWchpUXfhrQ==/109951166564765517.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'心灵治愈殿堂',
                    second: '每一次的遇见都是上天的恩赐',
                },
            ]
        },
        {
            title: '创作翻唱·电台',
            url: '/discover/radio',
            radioArr:[
                {
                    cover:'http://p2.music.126.net/7fsiPQ8f3MfJVprSeaPbmg==/109951163391639863.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'爱抽烟屁的彦祖',
                    second: '让小哥哥的迷人低音炮治愈你',
                },
                {
                    cover:'http://p2.music.126.net/QG4UU0kMEXR4S9RlUQjSJA==/109951163856499258.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'顔人中的隔壁小窝',
                    second: '住在你家隔壁，吵闹的唱歌男孩',
                },
                {
                    cover:'http://p2.music.126.net/BqHM3hlDz3uZvCDs9ZlCPQ==/109951164082360408.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'王巨星的电台',
                    second: '你一定会爱上的惊艳男声翻唱',
                },
                {
                    cover:'http://p2.music.126.net/Qp0GyMTt3pxmUV60iKULdA==/109951163464146231.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'网瘾少女叽',
                    second: '元气少女唱好听的歌送给你',
                },
            ]
        },
        {
            title: '知识·电台',
            url: '/discover/radio',
            radioArr:[
                {
                    cover:'http://p2.music.126.net/aqgaiwdn8s6UFO68qF2d2Q==/109951165915133797.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'星辰计划',
                    second: '仰望星空，探索未知世界',
                },
                {
                    cover:'http://p2.music.126.net/xv_6kS8j8ywiff9FYC8HHQ==/109951165849862634.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'组织进化论',
                    second: '“飞书”X声动活泼，每期访谈一位优秀管理者',
                },
                {
                    cover:'http://p2.music.126.net/nZo5M5Cj0JKp0Szdk05r9g==/109951165874501222.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'15赫兹｜听见打工人的声音',
                    second: '专注于倾听职场人的声音',
                },
                {
                    cover:'http://p2.music.126.net/j5HIoGGgLb5fCMBGtxPM2A==/109951165875351735.jpg?param=200y200',
                    url: '/discover/radio',
                    title:'睡眠先生的活力學',
                    second: '心理学家蔡宇哲的睡眠知识分享',
                },
            ]
        },
    ]

    return (
        <div className="container radio-page">
            {RadioInfoArray.map(({title,url,radioArr},index)=>{
                return(
                    <Recommend key={index} isIcon={false} className="recommend-title" title={{title,url}}>
                        <ul className="radio-container">
                            {radioArr.map((n,index)=>{
                                return (
                                    <RadioCard key={index} info={n}></RadioCard>
                                )
                            })}
                        </ul>
                    </Recommend>
                )

            })}
        </div>
    )
}

export default RadioPage