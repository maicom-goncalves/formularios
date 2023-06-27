<template>
<div>
  <div class="topo">
     <img src="./img/logo01.png"/> 
     <h2>DISTRITO SANITÁRIO ESPECIAL DE INDÍGENA MATO GROSSO DO SUL</h2>
      <h3><b>SAÚDE INDÍGENA</b></h3>
    </div>
  <div class="login">
    <input
      type="text"
      placeholder="Email"
      v-model="email"
    >
    <br />
    <input
      type="password"
      placeholder="Senha"
      v-model="senha"
    >
    <br>
    <div class="btn-login">
      <button @click="login">
        <b>ENTRAR</b> 
      </button>
    </div>
  </div>
  <div class="errado" v-show="errado">
    <p><b>Senha ou Email que foram fornecidas são incorretas.</b></p>
  </div>
</div>
  
</template>

<script>
import firebase from 'firebase';
export default {
  name: "login",
  data () {
    return {
      email: '',
      senha: '',
      errado:false
    };
  },
   methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
          (user) => {
            this.$router.replace('inicio')
          },
          (err) => {
            console.log(err);
            this.errado=true;
            this.limpaForm();
          }
        );
      },
      limpaForm(){
        this.email= '',
        this.senha= ''
      }
    }
  }
</script>

<style scoped>
.login {
  margin: 2% 18%;
  border-radius: 18px;
  background-color: #f1f0eabb;
  border: 1px solid #dfded8;
  box-shadow: 1px 2px #020402a6;
  width: 51%;
  height: 26%;
  padding: 4% 6%;
  text-align: center;
}
.topo{
  text-align: center;
}
img{
  width: 15%;
  height: 10%;
}
input {
  margin: 10px 2px;
  width: 75%;
  padding: 25px;
  font-size:larger;
  border-radius: 5px;
}

button {
  font-family: "Roboto", sans-serif;
  background-color: #0ead68ec;
  border: 1px solid #0ead68fa;
  box-shadow: 1px 2px #0e794aa2;
  outline: 0;
  border-radius: 5px;
  padding: 25px;
  color: #fff;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  margin: 10px 2px;
  width: 82%;
  text-align: center;
}
p {
  margin-top: 20px;
  font-size: 33px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
.errado{
  color: red;
  text-align: center;
}
@media screen and (max-width: 600px) {
    .login {
      margin-top: 1% 20%;
      box-shadow: #000000dc 3px;
      text-align: center;
    }
    input {
      margin:2% 3%;
      width: 85%;
      height: 20%;
      padding: 15px;
      border-radius: 5px;
      box-shadow: 1px 1px #8888882a;
      font-size: x-large;
    }
    button {
      font-family: "Roboto", sans-serif;
      border-radius: 5px;
      background: #cf66e9;
      color:white;
      border: 1px;
      padding: 15px;
      width: 88%;
      height: 20%;
      margin:2% 3%;
      box-shadow: 1px 2px #3d3d3d;
      font-size: x-large;
    }
}
</style>