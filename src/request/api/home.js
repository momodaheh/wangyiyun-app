import request from "..";
export function getBanner(){
    return request({
        method:"GEt",
        url:"/banner?type=2",
    })
}

export function getMusicList(){
    return request({
        method:"GET",
        url:"/personalized?limit=10"
    })
}

//登录/login?email=xxx@163.com&password=yyy
export function loginByEmail(data){
    return request({
        method:"POST",
        url:`/login?email=${data.email}&password=${data.password}`
    })
}
//获取用户详情/user/detail?uid=32953014
export function getUser(data){
    return request({
        method:"GET",
        url:`/user/detail?uid=${data}`
    })
}