<template>
  <div>
    <form action="login">
      <input type="email" required
      v-model="email" class="email"
      placeholder="E-mail">
      <input type="password"
      class="senha"
      placeholder="Senha">

      <button>Entrar</button>
    </form>
  </div>
</template>

<script>
 
export default {
    name:'Login',
    data:() =>{
        return{
            email:'',
            password:'' 
        }
    },
    methods:{
      async doLogin(){
        const {email,password} = this
        try{
          await this.$firebase.auth().signInWithEmailAndPassword(email,password)
          console.log(res)
          
        }catch(err){
          console.log(err)
        }
      }
    }
}
</script>

<style>

</style>