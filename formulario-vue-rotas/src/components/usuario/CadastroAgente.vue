<template>
  <div>
    <h2>Cadastrar Agentes</h2>
    <div id="formularioAgente">
      <form id="form" v-on:submit.prevent="addUser" v-if="!enviado">
        <div class="um">
          <div>
            <label for="nameAgente">Nome</label>
            <input
              id="nameAgente"
              type="text"
              v-model="newUsers.nameAgente"
              required
            />
          </div>
          <div>
            <label for="lastnameAgente">Sobrenome</label>
            <input
              id="lastnameAgente"
              type="text"
              v-model="newUsers.lastnameAgente"
              required
            />
          </div>
          <div>
            <label for="etnos">Etnia</label>
            <input
              id="etnia"
              type="text"
              v-model="newUsers.etnosAgente"
              required
            />
          </div>
          <div>
            <label for="residencia">Aldeia de Residência</label>
            <input id="residence" v-model="newUsers.residenceAgente" />
          </div>
        </div>
        <div class="dois">
          <label for="city">Município</label>
          <input id="cidade" v-model="newUsers.cityAgente" />
          <label for="cns"> CNS do Profissional </label>
          <input type="number" />
          <label for="nacimento">Data de Nascimento</label>
          <input type="date" v-model="newUsers.dataNascimento" />

          <label for="email">E-mail</label>
          <input
            type="email"
            v-model="newUsers.email"
            placeholder="joaovitorino@email.com"
          />
          <div class="genero">
            <label for="masculino">Masculino</label>
            <input
              v-model="newUsers.generoAgente"
              type="radio"
              required
              value="Masculino"
            />
            <label for="feminino">Feminino</label>
            <input
              v-model="newUsers.generoAgente"
              type="radio"
              required
              value="Feminino"
            />
          </div>
        </div>
        <div class="tres">
          <button class="vermelhopastel" type="submit" value="AddUser">
            Enviar
          </button>
        </div>
      </form>
      <div class="enviado" v-else>
        <span>Enviado com sucesso</span>
        <button class="novoCadstro" @click="() => limpaForm ()">
          Novo Cadastro
        </button>
      </div>
    </div>
    <button class="voltar" @click="irParaInicio">VOLTAR</button>
  </div>
</template>

<script>
import { db } from "../../firebase";
export default {
  //(enviado = false )
  data() {
    return {
      enviado: false,
      agentes: [],
      newUsers: {
        nameAgente: "",
        lastnameAgente: "",
        generoAgente: "",
        etnosAgente: "",
        residenceAgente: "",
        cityAgente: "",
        CNS:"",
        dataNascimento:"",
        email:""
      },
    };
  },
  firestore() {
    return {
      users: db.collection("agentes"),
    };
  },
  methods: {
    irParaInicio() {
      //voltar a pagina incial
      this.$router.push({ name: "inicio" });
    },
    
    limpaForm () {
      //for (newUser in this.newUsers) this.newUsers[newUser] = "";
      this.newUsers= [
        this.nameAgente= "",
        this.lastnameAgente= "",
        this.generoAgente= "",
        this.etnosAgente= "",
        this.residenceAgente= "",
        this.cityAgente= "",
        this.CNS="",
        this.dataNascimento="",
        this.email=""
      ]
      this.enviado = false;
    },
    addUser: function () {
      db.collection("agentes").add({
        nome: `${this.newUsers.nameAgente}`,
        sobrenome: `${this.newUsers.lastnameAgente}`,
        genero: `${this.newUsers.generogente}`,
        etnia: `${this.newUsers.etnosAgente}`,
        aldeia: `${this.newUsers.residenceAgente}`,
        cidade: `${this.newUsers.cityAgente}`,
        CNS: `${this.newUsers.cnsAgente}`,
        dataNascimento:`${this.newUsers.dataNascimento}`,
        email: `${this.newUsers.email}`,
      });
      this.enviado = true;
    },
  },
};
</script>

<style scoped>
input {
  font-size: 18pt;
  margin-bottom: 10px;
  margin-left: 5px;
  width: 98%;
}
#formularioAgente {
  margin-top: 25px;
  background: #f9f9f9;
  border: 1px solid #ffeeee;
  font-family: Arial;
  font-size: 27px;
  padding: 20px;
  display: grid;
  color: black;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "um dois" "tres tres";
  align-content: space-between;
}
.um {
  grid-area: um;
  text-align: left;
  padding: 20px;
}
.dois {
  grid-area: dois;
  text-align: left;
  padding: 20px;
}
.tres {
  grid-area: tres;
  padding-top: 20px;
  margin-top: 20px;
  text-align: center;
}
.genero {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.genero label {
  margin-right: 5px;
  line-height: 5px;
  text-align: justify;
}
.genero input {
  border-radius: 50%;
  width: 36px;
  height: 26px;
  border: 2px solid rgb(26, 25, 25);
  margin-right: 5px;
}
.enviado {
  font-size: 45px;
  text-align: center;
}
.novoCadastro {
  font-size: 40px;
  background-color: #2b93a5;
  border-style: none;
  color: #ecebe3;
  border-radius: 15px;
  padding: 12px;
  cursor: pointer;
}
.novoCadastro:hover {
  background-color: #375c5b;
  color: #fff;
}
</style>