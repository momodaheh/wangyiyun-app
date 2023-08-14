import { createStore } from "vuex";

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
        isbtnShow:true,//暂停按钮的显示
        detailShow:false,//歌曲详情页展示
      },
    ],
    sangListIndex:0,//默认下标为0
  },
  getters: {},
  mutations: {
    updateIsbtnShow:function(state,value){
      state.isbtnShow=value;
    },
    updateSangList:function(state,value){
      state.sangList=value;
    },
    updatesangListIndex:function(state,value){
      state.sangListIndex=value;
    },
    updatedetailShow:function(state,value){
      state.detailShow=value;
    },
  },
  actions: {},
  modules: {},
});
