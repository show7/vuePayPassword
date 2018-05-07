<template>
  <div class='pay-box'>
    <div class="pay-content">
        <h4 class='pay-title' v-text='title'></h4>
        <div class='pay-password-num'>
            <div class="num" v-for='item in password'>
              <span class="pay-password-cirle" v-if='item !== undefined'></span>
            </div>
        </div>
        <div class='pay-keyboard'>
            <div v-for ='(key,index) in numericKeypad' :key='key'>
                <span @touchstart='pay(key,$event)' @touchend="inputEnd($event)" v-show='key !== undefined'>{{key}}</span>
                <span v-show='key === undefined && index === 9'></span>
                <span v-show='key === undefined && index === 11' @touchstart='deleteback'>DELETE</span>
            </div>
            <!-- <div v-for = 'key in numericKeypad' :key = 'key' v-show='key===undefined'></div> -->
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-pay-password',
  data () {
    return {
        // up:'#fff',//弹起键盘颜色
        // down:'green',//按下键盘颜色
        // passLength:6,//默认密码6
        password:[],
        numericKeypad:[7,8,9,4,5,6,1,2,3,,0,,],
        paypasswordStr:[]
    }
  },
  props:{
  		title:{
  			type:String,
  			default:'请输入支付密码'
  		},
  		up:{
  			type:String,
  			default:'#fff'
  		},
  		down:{
  			type:String,
  			default:'red'
  		},
  		passLength:{
  			type:Number,
  			default:6
  		},

  },
  created(){
      this.password.length = this.passLength//初始化支付密码长度
  },
  methods:{
    pay(i,e){
        // alert(i);
        e.currentTarget.style.backgroundColor ='red'
        // new Array(this.paypasswordStr).forEach((item,i)=>{
        //     this.$set(this.password,i,item)
        // })
        
        // if() return
        this.paypasswordStr.length == this.passLength ? 0 : this.paypasswordStr.push(i)
        
      console.log(this.paypasswordStr)
        
    },
    deleteback(){
       this.paypasswordStr = this.paypasswordStr.slice(0,this.paypasswordStr.length-1)
       console.log(this.paypasswordStr);
       
       console.log(this.password);
    },
    Getpay(){
      // alert(`跳转支付接口密码为${this.paypasswordStr}`)
    },
    inputEnd(e){
      console.log(e.currentTarget.style.backgroundColor ='#fff')
    }
  },
  watch:{
      'paypasswordStr':{
          handler:function(nv,ov){
            this.$nextTick(()=>{
              this.password.map((item,i)=>{
                  this.$set(this.password,i,undefined)
              })
                nv.forEach((item,i)=>{
                  this.$set(this.password,i,item)
              })
            })
              
              // alert(this.password)
              if(nv.length>=this.passLength){
                  this.Getpay()
                  return
              }

              // console.log(nv.length)
          },
          deep: true
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('./vue-pay-password.css');
</style>
