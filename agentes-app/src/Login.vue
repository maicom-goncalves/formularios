<template>
  <div class="login">
    <img class="logo" src="./img/logo01.png" alt="casa" />
    <input type="text" placeholder="Email" v-model="email" />
    <br />
    <input type="password" placeholder="Senha" v-model="senha" />
    <br />
    <div class="btn-login">
      <button @click="login" class="logar">
        <b>ENTRAR</b>
      </button>
    </div>
    <div v-show="erro">
      <p class="errorForm"><b>Você digitou a senha ou email incorretos.</b></p>
    </div>
     <div id="footer">
    </div>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      senha: "",
      erro:false
    };
  },
  methods: {
    limpaForm () {
      this.email= "",
      this.senha= ""
    },
    login: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.senha)
        .then(
          (user) => {
            this.$router.replace("inicio");
            console.log(user);
          },
          (err) => {
            this.erro=true;
            this.limpaForm();
            console.log(err);
          }
        );
    }
  }
};
</script>

<style scoped>
.login {
  margin-top: 2%;
  /*background-color: #b0d0d33a;*/
  border-radius: 15px;
  /*padding: 0%;*/
  padding: 20% 1%;
}
.logo{
  width: 38%;
  margin-bottom: 27%;
}
input {
  margin: 10px 2px;
  width: 20%;
  padding: 15px;
}

.logar {
  font-family: "Roboto", sans-serif;
  outline: 0;
  border: 0;
  padding: 15px;
  color: #ffffff;
  background-color: #297373;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
.errorForm{
  color:red;
  font-family: 'Times New Roman', Times, serif;
  font-size: 30px;
}
@media screen and (max-width: 600px) {
  .login {
    margin-top: 1% 20%;
    box-shadow: #000000dc 3px;
    text-align: center;
  }
  input {
    margin: 2% 3%;
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
    color: white;
    border: 1px;
    padding: 15px;
    width: 88%;
    height: 20%;
    margin: 2% 3%;
    box-shadow: 1px 2px #3d3d3d;
    font-size: x-large;
  }
}
</style>
