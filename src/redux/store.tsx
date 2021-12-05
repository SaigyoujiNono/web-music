import {createSlice,configureStore} from '@reduxjs/toolkit'
import { MusicInfo } from '../class/music'

const currentPlayIndexSlice = createSlice({
    name: 'currentPlayIndex',
    initialState:{
        index: 0,
        songlist: [
            {
                id: 492390949,
                src: 'https://mqd-music.oss-cn-beijing.aliyuncs.com/%E7%81%B0%E6%BE%88%20-%20%E6%98%9F%E8%8C%B6%E4%BC%9A.mp3',
                title: '星茶会',
                artist: ['灰澈'],
                artistId: [12520634],
                cover: 'https://p2.music.126.net/vwJEZ2euubPi8wSbzhn6gg==/109951164048277124.jpg?param=50y50'
            },
            {
                id: 1824020871,
                src: 'https://mqd-music.oss-cn-beijing.aliyuncs.com/One%20Last%20Kiss-%E5%AE%87%E5%A4%9A%E7%94%B0%E3%83%92%E3%82%AB%E3%83%AB.mp3',
                title: 'One Last Kiss',
                artist: ['宇多田ヒカル'],
                artistId: [18122],
                cover: 'https://p3.music.126.net/l3G4LigZnOxFE9lB4bz_LQ==/109951165791860501.jpg?param=200y200'
            },
            {
                id: 1483434115,
                src: 'https://mqd-music.oss-cn-beijing.aliyuncs.com/%E8%8A%B1%E8%AD%9C%20-%20%E6%88%B8%E6%83%91%E3%81%84%E3%83%86%E3%83%AC%E3%83%91%E3%82%B7%E3%83%BC.mp3',
                title: '戸惑いテレパシー',
                artist: ['花譜'],
                artistId: [32062601],
                cover: 'https://p4.music.126.net/0bPCZxWphd7qcnTTeAKvXw==/109951165353587636.jpg?param=200y200'
            },
        ] as MusicInfo[]
    },
    reducers:{
        next:state => {
            (state.index >= state.songlist.length-1)?state.index=0:state.index+=1
        },
        prev:state => {
            state.index<=0?state.index = state.songlist.length-1: state.index-=1
        }
    }
})

export const {next,prev} = currentPlayIndexSlice.actions

const store = configureStore({
    reducer: currentPlayIndexSlice.reducer
})

export {store}