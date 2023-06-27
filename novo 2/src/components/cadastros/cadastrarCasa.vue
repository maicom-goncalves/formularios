<template>
  <div>
    <h2 clas="tituloAldeia">
      <b>{{ this.id }}</b>
    </h2>
    <h3>Casas</h3>
    <li class="lista" v-for="casa in casas" :key="casa['.key']">
      <router-link
        tag="li"
        :to="{ name: 'UsuarioCadastro', params: { id2: casa.numero } }"
        class="item-lista"
      >
        <b>Casa :</b> {{ casa.numero }}
      </router-link>
    </li>
    <button
      class="enviar"
      v-if="formularioShow"
      @click="() => (formularioShow = false)"
    >
      Cadastrar Nova Casa
    </button>
    <transition name="fade" mode="out-in">
      <div id="formularioId" v-if="!formularioShow">
        <form id="form" v-on:submit.prevent="addUser" v-if="!enviado">
          <div></div>
          <div>
            <p>Agente</p>
            <select class="opcoes" name="agente" v-model="newUsers.agente">
              <option
                :id="agentes.sobrenome"
                v-for="agentes in agentes"
                :key="agentes['.key']"
              >
                <b>{{ agentes.nome }} {{agentes.sobrenome}}</b>
              </option>
            </select>
          </div>
          <div>
            <label for="numero">N° da casa</label>
            <input type="number" value="0" v-model="newUsers.numero" />
          </div>
          <button class="enviar" type="submit" value="AddUser">ENVIAR</button>
        </form>
        <div v-else>
          <p>Cadastrado com sucesso</p>
          <button class="novoCadastro" @click="() => limpaForm()">
            Cadastrar nova casa?
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { db } from "../../firebase";

export default {
  props: ["id"],
  data() {
    return {
      formularioShow: true,
      enviado: false,
      casas: [],
      user: {},
      newUsers: {
        aldeia: this.id,
        numero: "",
        agente: "",
      },
    };
  },
  firestore() {
    return {
      user: db.collection("morador"),
      casas: db
        .collection("morador")
        .doc(this.id)
        .collection("casa")
        .orderBy("numero", "asc"),
      agentes: db
        .collection("agente")
        .doc(this.id)
        .collection("agentes")
        .orderBy("nome", "asc"),
    };
  },
  methods: {
    addUser: function () {
      db.collection("morador")
        .doc(this.id)
        .collection("casa")
        .add({
          cidade: `${this.newUsers.cidade}`,
          aldeia: `${this.newUsers.aldeia}`,
          numero: `${this.newUsers.numero}`,
          agente: `${this.newUsers.agente}`,
        });
        //&&
         db.collection("agentes")
        .doc(this.newUsers.agente)
        .collection("casa")
        .add({
          numero: `${this.newUsers.numero}`,
          agente: `${this.newUsers.agente}`,
        });

      this.enviado = true;
      console.log("enviado");
      console.log(this.agentes);
    },
    limpaForm() {
      this.newUsers = [
        (this.cidade = ""),
        (this.numero = ""),
        (this.agente = ""),
      ];
      this.enviado = false;
      this.formularioShow = true;
    },
  },
};
</script>

<style scoped>
.tituloAldeia {
  color: #115f37;
}
input {
  font-size: 18pt;
  margin-bottom: 10px;
  margin-left: 5px;
  width: 98%;
}
#formularioId {
  margin-top: 25px;
  background: #f9f9f9;
  border: 1px solid #dfded8;
  box-shadow: 1px 2px #020402a6;
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
.enviado {
  font-size: 45px;
  text-align: center;
}
</style>