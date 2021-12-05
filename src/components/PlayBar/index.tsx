import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MusicInfo } from '../../class/music'
import {store,next,prev} from '../../redux/store'

import './index.scss'
function PalyBar() {
    const musicRef = useRef<HTMLAudioElement>(null) //audio标签
    const [isPlay,setIsPlay] = useState(false)  //是否正在播放
    //正在播放的歌曲
    const [currentPlay,setCurrentPlay] = useState<MusicInfo>(null)  //当前播放的歌曲
    
    //修改播放状态
    function playMusic(){
        setIsPlay(!isPlay)
    }
    //改变当前播放的音乐
    let changeMusic = useCallback(function(isNext){
        return ()=>{
            if(isNext){
                store.dispatch(next())
                setIsPlay(true)
            }else{
                store.dispatch(prev())
                setIsPlay(true)
            }
        }
    },[])
    //进度条缓存条
    const progessCacheRef = useRef<HTMLDivElement>(null)
    //进度条
    const progessRef = useRef<HTMLDivElement>(null)

    //时间转换number->string mm:ss
    function numToMinSecond(num:number) {
        if (num === 0) {
          return '00:00'
        }
        if (num < 60) {
          return '00:' + (num < 10 ? '0' + parseInt(num+'') : parseInt(num+''))
        }
        return parseInt(num/60+'') + ':' + (num % 60 < 10 ? '0' + parseInt(num % 60+'') : parseInt(num % 60+''))
    }

    //音量
    //控制音量
    const volumeWholeRef = useRef<HTMLDivElement>(null)
    const volumeRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        let musicCurrentFunc = store.subscribe(()=>{
            setCurrentPlay(store.getState().songlist[store.getState().index])
        })
        store.dispatch({type: '@@adsdnakns123'})
        const musicControl = musicRef.current
        const volumeWhole = volumeWholeRef.current
        const volume = volumeRef.current

        volume.style.width = musicControl.volume*100+'%'

        //移动指针
        const movePointer = (e:PointerEvent)=>{
            let movedCurrent = (e.pageX-volumeWhole.getBoundingClientRect().x)/volumeWhole.getBoundingClientRect().width
            movedCurrent = movedCurrent < 0 ? 0 : movedCurrent > 1 ? 1 : movedCurrent
            volume.style.width = movedCurrent*100+'%'
            musicControl.volume = movedCurrent
        }
        //抬起指针
        const upPointer = (e:PointerEvent)=>{
            movePointer(e)
            volumeWhole.removeEventListener('pointermove',movePointer)
            volumeWhole.removeEventListener('pointerup',upPointer)
        }
        //监控进度条指针事件
        volumeWhole.addEventListener('pointerdown',(e)=>{
            volumeWhole.setPointerCapture(e.pointerId)
            volumeWhole.addEventListener('pointermove',movePointer)
            volumeWhole.addEventListener('pointerup',upPointer)
        })
        return ()=>{
            musicCurrentFunc()
        }
    },[])

    //整个进度条
    const progressMusicRef = useRef(null);
    //进度条游标
    const cursorRef = useRef(null)

    //歌曲长度
    const [musicDuration,setMusicDuration] = useState('')
    useEffect(()=>{
        const musicControl = musicRef.current   //audio标签
        const progress = progessRef.current //播放进度条
        let currentTime = document.getElementById('audio-current')  //当前播放时间musicControl.addEventListener('loadeddata',()=>setMusicDuration(numToMinSecond(musicControl.duration)))
        const cache = progessCacheRef.current
        const progressWhole = progressMusicRef.current  //整个播放进度条，用来控制鼠标按下抬起
        const cursor = cursorRef.current //进度条游标
        //歌曲长度
        musicControl.addEventListener('loadeddata',()=>setMusicDuration(numToMinSecond(musicControl.duration)))
        //缓存条监听器
        musicControl.addEventListener('suspend',()=>{
            let timeRange = musicControl.buffered
            cache.style.width = timeRange.end(timeRange.length-1)/musicControl.duration*100+'%'
        })
        //播放进度条监听器
        const musicPlayProgressListener:EventListener = ()=>{
            let cur = musicControl.currentTime / musicControl.duration
            progress.style.width = cur*100+'%'
            currentTime.innerHTML = numToMinSecond(musicControl.currentTime)
        }
        //播放进度条监听器
        musicControl.addEventListener('timeupdate',musicPlayProgressListener)
        //播放结束监听
        musicControl.addEventListener('ended',()=>changeMusic(true)())

        //移动指针
        const movePointer = (e:PointerEvent)=>{
            let movedCurrent = (e.pageX-progressWhole.getBoundingClientRect().x)/progressWhole.getBoundingClientRect().width
            movedCurrent = movedCurrent < 0 ? 0 : movedCurrent > 1 ? 1 : movedCurrent
            progress.style.width = movedCurrent*100+'%'
            currentTime.innerHTML = numToMinSecond(movedCurrent*musicControl.duration)
        }
        //抬起指针
        const upPointer = (e:PointerEvent)=>{
            let movedCurrent = (e.pageX-progressWhole.getBoundingClientRect().x)/progressWhole.getBoundingClientRect().width
            movedCurrent = movedCurrent < 0 ? 0 : movedCurrent > 1 ? 1 : movedCurrent
            progress.style.width = movedCurrent*100+'%'
            musicControl.currentTime = movedCurrent*musicControl.duration
            cursor.removeEventListener('pointermove',movePointer)
            cursor.removeEventListener('pointerup',upPointer)
            //鼠标抬起后重新监听进度条
            musicControl.addEventListener('timeupdate',musicPlayProgressListener)
        }
        //监控进度条指针事件
        cursor.addEventListener('pointerdown',(e)=>{
            cursor.setPointerCapture(e.pointerId)
            //暂时移除进度条监听
            musicControl.removeEventListener('timeupdate',musicPlayProgressListener)
            cursor.addEventListener('pointermove',movePointer)
            cursor.addEventListener('pointerup',upPointer)
        })
        progressWhole.addEventListener('pointerdown',(e)=>{
            let movedCurrent = (e.pageX-progressWhole.getBoundingClientRect().x)/progressWhole.getBoundingClientRect().width
            movedCurrent = movedCurrent < 0 ? 0 : movedCurrent > 1 ? 1 : movedCurrent
            progress.style.width = movedCurrent*100+'%'
            musicControl.currentTime = movedCurrent*musicControl.duration
        })
    },[changeMusic])

    //播放监听
    useEffect(()=>{
        const musicControl = musicRef.current
        if(isPlay){
            musicControl.play()
        }else{
            musicControl.pause()
        }
    },[isPlay,currentPlay])

    return (
        <div className="play-bar">
            <audio ref={musicRef} src={currentPlay?.src? currentPlay.src:''}></audio>
            <div className="play-container">
                {/* 播放器控件 */}
                <div className="play-controller">
                    <div id="play-pre" onClick={changeMusic(false)} ><i className="fa fa-step-backward"></i></div>
                    <div id="play-control" onClick={playMusic}><i id="play-control-i" className={'fa '+(isPlay?'fa-pause-circle-o':'fa-play-circle-o')}></i></div>
                    <div id="play-next" onClick={changeMusic(true)}><i className="fa fa-step-forward"></i></div>
                </div>
                {/* 进度条区域 */}
                <div className="play-show">
                    <div className="title-img">
                        <img id='audio-img' src={currentPlay?.cover?currentPlay.cover:''} alt="" />
                    </div>
                    <div className="play-info">
                        <div className="audio-info">
                            <Link to={'/song/'+(currentPlay?.id?currentPlay.id:'')} id="audio-title" className="title">{currentPlay?.title?currentPlay.title:''}</Link>
                            <Link to={'/artist/'+(currentPlay?.artistId?currentPlay.artistId:'')} id="audio-author" className="author">{currentPlay?.artist?currentPlay.artist:''}</Link>
                        </div>
                        <div className="audio-progress">
                            <div ref={progressMusicRef} className="progress">
                                <div ref={progessCacheRef} id="progress-cache"></div>
                                <div ref={progessRef} id="progress-current" className="progress-current">
                                    <i ref={cursorRef} className="progress-cursor icon-circle-reverse">
                                    </i>
                                </div>
                            </div>
                            <div className="progress-info">
                                <span id="audio-current">00:00</span>
                                <span>/</span>
                                <span id="audio-total">{musicDuration}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="play-other">
                    <div className="volume">
                        <div className="volume-icon">
                            <i className="fa fa-volume-up"></i>
                        </div>
                        <div ref={volumeWholeRef} id="volume-progress" className="volume-progress">
                            <div ref={volumeRef} id="volume-current" className="progress-current">
                                <i className="progress-cursor icon-circle-reverse"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PalyBar