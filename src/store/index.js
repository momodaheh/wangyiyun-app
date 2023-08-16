import { createStore } from "vuex";
import {getMusicLyric} from "@/request/api/item"
import {loginByEmail} from "@/request/api/home"
export default createStore({
  state: {
    sangList: [
      {
        //播放列表
        al: {
          id: 35829532,
          name: "Havana",
          pic: 18425615858527510,
          picUrl:"http://p1.music.126.net/zUp6BqKPn1lmZINHsVDoew==/18425615858527510.jpg",
          pic_str: "18425615858527510",
        },
        id:494865824,
        
      },
    ],
    sangListIndex:0,//默认下标为0
    isbtnShow:true,//暂停按钮的显示
    detailShow:false,//歌曲详情页展示
    lyricKist:{},//歌词
    currentTime:0,//当前时间
    duration:0,//歌曲总时长
    isLogin:false,//是否登录
    isfootMusic:true,//是否显示底部组件
    token:"",
    user:{}
  },
  getters: {},
  mutations: {
    updateIsbtnShow:function(state,value){
      state.isbtnShow=value;
    },
    updateSangList:function(state,value){
      state.sangList=value;
    },
    pushSangList:function(state,value){
      state.sangList.push(value)
    },
    updatesangListIndex:function(state,value){
      state.sangListIndex=value;
    },
    updatedetailShow:function(state){
      state.detailShow=!state.detailShow;
    },
    updateLyric:function(state,value){
      state.lyricKist=value;
    },
    updateCurrentTime:function(state,value){
     
      state.currentTime=value;
    },
    updateduration:function(state,value){
     
      state.duration=value;
    },
    updateisLogin:function(state){
     
      state.isLogin=true;
    },
    updateToken:function(state,value){
      state.token=value;
      localStorage.setItem('token',state.token)
    },
    updateUser:function(state,value){
      state.user=value;
    },
  },
  actions: {
    getLyric:async function(context,value){
      let res=await getMusicLyric(value); 
      console.log(res);
      context.commit("updateLyric",res.data.lrc)
    },
    getLogin:async function(context,value){
      let res = await loginByEmail(value)
      return res
    }
  },
  modules: {},
});
