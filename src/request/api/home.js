import request from "..";
export function getBanner(){
    return request({
        method:"GEt",
        url:"/banner?type=2",
    })
}