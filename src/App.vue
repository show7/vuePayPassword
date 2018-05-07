<template>
  <div id="app">
    
   <vue-pay-password 
                :title='title'
                :up='up'
                :down = 'down'
                :passLength = 'passLength'
   > </vue-pay-password>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        title:'请输入支付密码',//标题
        up:'#fff',//弹起键盘颜色
        down:'green',//按下键盘颜色
        passLength:6,//默认密码6
        password:[],
        numericKeypad:[7,8,9,4,5,6,1,2,3,,0,,],
        paypasswordStr:[]
    }
}
}
</script>

<style>

</style>
