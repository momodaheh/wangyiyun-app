import request from "..";
//获取歌单详情
export function getMusicItemList(data){

    return request({
        method:"GET",
        url:`/playlist/detail?id=${data}`
    })
}
//获取歌曲的歌词
export function getMusicLyric(data){
    return request({
        method:"GET",
        url:`/lyric?id=${data}`
    })
}

///search?keywords= 海阔天空
export function getSearch(data){
    return request({
        method:"GET",
        url:`/search?keywords=${data}`
    })
}