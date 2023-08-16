<template>
  <div>
    <div>欢迎登陆</div>
    <div>
        <input type="text" placeholder="请输入邮箱" name="email" v-model="email">
        <input type="text" placeholder="请输入密码" name="password" v-model="password">
        <button @click="Login">登录</button>
    </div>
  </div>
</template>

<script>
import {getUser} from '@/request/api/home'
export default {
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods:{
        Login:async function(){
          let res = await this.$store.dispatch("getLogin",{email:this.email,password:this.password})
          console.log(res);
          if(res.data.code === 200){//如果返回的code=200，说明登陆成功。就跳转到个人中心界面
            this.$store.commit('updateisLogin')
            this.$store.commit('updateToken',res.data.token)
            let infor=await getUser(res.data.account.id)
            console.log(infor);
            this.$store.commit('updateUser',infor)
            this.$router.push('/InforUser')
          }else{
            alert("邮箱或密码错误")
            this.password=""
          }
        }
    }
}
</script>

<style>

</style>