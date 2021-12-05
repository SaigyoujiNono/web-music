//单曲信息类
export interface MusicInfo{
    id:number
    src:string
    title:string
    artist:Array<string>
    artistId:Array<number>
    cover:string
}

//单个radio类
export interface RadioInfo{
    cover:string;
    url: string;
    title:string;
    second: string;
}
//单个radio分类
export interface RadioCategory{
    title:string;
    url:string;
    radioArr:RadioInfo[]
}

//单张轮播图信息
export interface CarouselSingle{
    url: string;
    target: string;
}

export interface ArtistPrimaryCategory{
    title:string;
    second:ArtistSecondCategory[];
}

interface ArtistSecondCategory{
    title: string;
    url: string;
}

//艺术家信息
export interface Artist{
    name:string;
    userId:number;
    artistId: number;
    avatar?: string;
}
