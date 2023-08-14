import request from "..";
//获取歌单详情
export function getMusicItemList(data){

    return request({
        method:"GET",
        url:`/playlist/detail?id=${data}`
    })
}
