import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { allArtistData, artistForEntry, artistForHot, artistForRecommendEntry } from '../../../../class/data'
import { Artist } from '../../../../class/music'
import ArtistCard from '../../../../components/ArtistCard'
import Recommend from '../../../../components/Recommend'
import './index.scss'

function CategoryPage(){
    const params = useParams()
    const [entryArtist,setEntryArtist] = useState<Artist[]>(null)
    const [hotArtist,setHotArtist] = useState<Artist[]>(null)
    const [artistCategory,setArtistCategory] = useState(null)
    useEffect(() =>{
        setEntryArtist(null)
        setHotArtist(null)
        if (params.artistName){
            if(params.artistName === 'entry'){
                setEntryArtist(artistForEntry)
            }else{
                console.log(params.artistName);
                setArtistCategory(allArtistData[params.artistName])
            }
        }else{
            //当为推荐歌手页面时
            setEntryArtist(artistForRecommendEntry)
            setHotArtist(artistForHot)
        }
    },[params])
    return (
        <div className="category-page">
            {params.artistName === undefined &&
                <Recommend className="recommend-title" isIcon={false} title={{title:'入驻歌手',url:'/discover/artist/entry'}} >
                    <ul className="category-content">
                        {entryArtist && entryArtist.map((n,index)=>{
                            return <ArtistCard key={index} artist={n}></ArtistCard>
                        })}
                    </ul>
                </Recommend>
            }
            {params.artistName === undefined &&
                <Recommend className="recommend-title" isIcon={false} title={{title:'热门歌手',url:'/discover/artist'}} >
                    <ul className="category-content">
                        {hotArtist && hotArtist.slice(0,10).map((n,index)=>{
                            return <ArtistCard key={index} artist={n}></ArtistCard>
                        })}
                        <li className="gap-border"></li>
                        {hotArtist && hotArtist.slice(10,hotArtist.length).map((n,index)=>{
                            n.avatar = null
                            return <ArtistCard key={index} artist={n}></ArtistCard>
                        })}
                    </ul>
                </Recommend>
            }
            {params.artistName === 'entry'&&
                <Recommend className="recommend-title" isIcon={false} title={{title:'入驻歌手',url:'/discover/artist/entry'}} >
                    <ul className="category-content">
                        {entryArtist && entryArtist.map((n,index)=>{
                            return <ArtistCard key={index} artist={n}></ArtistCard>
                        })}
                    </ul>
                </Recommend>
            }
            {(params.artistName && params.artistName !== 'entry') &&
                <Recommend className="recommend-title" isIcon={false} title={{title:'华语男歌手',url:'/discover/artist/cnmale'}} >
                <ul className="category-content">
                    {artistCategory && artistCategory.slice(0,10).map((n,index)=>{
                        const artist:Artist = {name:n.name,artistId:n.id,userId:n.accountId,avatar: n.img1v1Url+'?param=130y130'}
                        return <ArtistCard key={index} artist={artist}></ArtistCard>
                    })}
                    <li className="gap-border"></li>
                    {artistCategory && artistCategory.slice(10,artistCategory.length).map((n,index)=>{
                        const artist:Artist = {name:n.name,artistId:n.id,userId:n.accountId,avatar: null}
                        return <ArtistCard key={index} artist={artist}></ArtistCard>
                    })
                    }
                </ul>
            </Recommend>
            }
        </div>
    )
}

export default CategoryPage

