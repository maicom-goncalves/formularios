<template>
  <div id="formularioId">
    <form id="form" v-on:submit.prevent="addUser">
      <div class="parte-um">
        <div>
          <label for="nome">Nome</label>
          <input id="nameId" type="text" v-model="newUsers.nameId" required />
        </div>
        <div>
          <label for="mae">Nome da mãe</label>
          <input id="mother" type="text" v-model="newUsers.motherId" required />
        </div>
        <div>
          <label for="sobrenome">Sobrenome</label>
          <input
            id="lastnameId"
            type="text"
            v-model="newUsers.lastnameId"
            required
          />
        </div>
        <div>
          <label for="etnos">Etnia</label>
          <input id="etnia" type="text" v-model="newUsers.etnosId" required />
        </div>
        <div>
          <label for="residencia">Aldeia de Residência</label>
          <input id="residence" v-model="newUsers.residenceId" />
        </div>
        <div>
          <label for="city">Município</label>
          <input id="cidade" v-model="newUsers.cityId" />
        </div>
        <div>
          <label for="sus">N° do Cartão SUS</label>
          <input
            id="saudesus"
            type="number"
            value="0"
            v-model="newUsers.cardsusId"
          />
        </div>
      </div>
      <div class="parte-dois">
        <div>
          <label for="nascimento">Nascimento</label>
          <input id="nascimento" type="date" v-model="newUsers.dateId" />
        </div>
        <div>
          <label for="pai">Nome do Pai</label>
          <input id="father" type="text" required v-model="newUsers.fatherId" />
        </div>

        <div>
          <label for="house">Casa</label>
          <input id="casa" type="number" v-model="newUsers.houseId" required />
        </div>
        <hr />
        <div>
          <label for="sex">Sexo</label>
          <input id="genero" />
        </div>
        <div>
          <label for="altura">N° da casa</label>
          <input
            id="altura"
            type="number"
            value="0"
            v-model="newUsers.numbhouseId"
          />
        </div>
        <div>
          <label for="polo">Polo Base</label>
          <input id="polo" type="text" required v-model="newUsers.poleId" />
        </div>
        <div>
          <label for="cpf">CPF</label>
          <input id="id-cpf" type="number" value="0" />
        </div>
      </div>
      <div class="parte-tres">
        <button type="submit" value="AddUser">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  name: "formularioId",
  data() {
    return {
      users: [],
      newUsers: {
        nameId: "",
        lastnameId: "",
        houseId: "",
        etnosId: "",
        motherId: "",
        residenceId: "",
        cityId: "",
        cardsusId: "",
        dateId: "",
        fatherId: "",
        numbhouseId: "",
        poleId: "",
      },
    };
  },
  props: {
    newUser: {
      required: false,
      default: () => {
        return {
          nameId: "",
          lastnameId: "",
          houseId: "",
          etnosId: "",
          motherId: "",
          residenceId: "",
          cityId: "",
          cardsusId: "",
          dateId: "",
          fatherId: "",
          numbhouseId: "",
          poleId: "",
        };
      },
    },
  },
  firestore() {
    return {
      users: db.collection("users"),
    };
  },

  methods: {
    
    addUser: function () {
      console.log("testatando teste");
      db.collection("users").add({
        nome: `${this.newUsers.nameId}`,
        sobrenome: `${this.newUsers.lastnameId}`,
        casa: `${this.newUsers.houseId}`,
        Etnia: `${this.newUsers.etnosId}`,
        Mae: `${this.newUsers.motherId}`,
        aldeia: `${this.newUsers.residenceId}`,
        cidade: `${this.newUsers.cityId}`,
        cartaosus: `${this.newUsers.cardsusId}`,
        data: `${this.newUsers.dateId}`,
        pai: `${this.newUsers.fatherId}`,
        polobase: `${this.newUsers.poleId}`,
      });
    },
  },
};
</script>

<style>
input {
  font-size: 18pt;
  margin-bottom: 10px;
  margin-left: 5px;
}
button {
  font-size: 40px;
  background-color: #092b69;
  color: #ecebe3;
  border-radius: 20px;
}

form {
  /*max-width: 1200px;*/
  background: #f9f9f9;
  border: 1px solid black;
  font-family: Arial;
  font-size: 17px;
  display: grid;
  /*grid-template-columns: 700px 700px;*/
  grid-template-columns: 1fr 1fr;
	grid-auto-columns: 800px;
  /*grid-template-areas: " parte-um parte-dois" "parte-tres parte-tres";*/
}
.parte-um {
  /*grid-area: parte-um;*/
  text-align: justify;
  padding: 20px;
}
.parte-dois {
 /* grid-area: parte-dois;*/
  text-align: justify;
  padding: 20px;
}
.parte-tres {
 /* grid-area: parte-tres;*/
  text-align: center;
}
</style>