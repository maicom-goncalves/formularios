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
          <input
            id="cpfId"
            type="number"
            value="0"
            required
            v-model="newUsers.cpfId"
          />
        </div>
      </div>
      <div class="parte-tres">
        <button type="submit" value="AddUser">Enviar</button>
      </div>
    </form>
    <button class="vermelhopastel" @click="componente2 = 'FormularioId2'">
      Vacinas
    </button>
    <button class="verdeagua" @click="componente2 = 'FormularioId3'">
      Doenças
    </button>
    <button class="azulclaro" @click="componente2 = 'FormularioId4'">
      Medicamentos
    </button>
    <button class="verdeagua" @click="componente2 = 'FormularioId5'">
      Óbito
    </button>
    <div>
      <component :is="componente2" />
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
import FormularioId2 from "./FormularioId2.vue";
import FormularioId3 from "./FormularioId3.vue";
import FormularioId4 from "./FormularioId4.vue";
import FormularioId5 from "./FormularioId5.vue";
export default {
  components: { FormularioId2, FormularioId3, FormularioId4, FormularioId5 },
  name: "formularioId",
  data() {
    return {
      componente2: "FormularioId2",
      users: [],
      newUsers: {
        nameId: "",
        lastnameId: "",
        cpfId: "",
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
          cpfId: "",
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
      function TestaCPF(cpf) {
        if (typeof cpf !== "string") return false;
        cpf = cpf.replace(/[^\d]+/g, "");
        if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
        cpf = cpf.split("");
        const validator = cpf
          .filter((digit, index, array) => index >= array.length - 2 && digit)
          .map((el) => +el);
        const toValidate = (pop) =>
          cpf
            .filter(
              (digit, index, array) => index < array.length - pop && digit
            )
            .map((el) => +el);

        const rest = (count, pop) =>
          ((toValidate(pop).reduce(
            (soma, el, i) => soma + el * (count - i),
            0
          ) *
            10) %
            11) %
          10;

        return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1]);
      }
      var strCPF = TestaCPF(`${this.newUsers.cpfId}`);

      if (strCPF == true) {
        /*
      escrevendo dados dos usuarios no firebase
      */ 
        console.log("escrito no Firestore");
        db.collection("users").add({
          nome: `${this.newUsers.nameId}`,
          sobrenome: `${this.newUsers.lastnameId}`,
          cpf: `${this.newUsers.cpfId}`,
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
      } else {
        return alert("CPF inserido é invalido");
      }
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
button {
  font-size: 40px;
  background-color: #cf3c31;
  color: #ecebe3;
  border-radius: 15px;
  padding: 12px;
}

form {
  /*max-width: 1200px;*/
  background: #9ce0e9;
  border: 1px solid rgb(255, 238, 238);
  font-family: Arial;
  font-size: 27px;
  display: grid;
  /*grid-template-columns: 700px 700px;*/
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 800px;
  border-radius: 18px;
  color: black;
  /*grid-template-areas: " parte-um parte-dois" "parte-tres parte-tres";*/
}
.parte-um {
  /*grid-area: parte-um;*/
  text-align: left;
  padding: 20px;
}
.parte-dois {
  /* grid-area: parte-dois;*/
  text-align: left;
  padding: 20px;
}
.parte-tres {
  /* grid-area: parte-tres;*/
  text-align: center;
}
.verdeagua {
  font-size: 45px;
  background-color: #41eb90;
  color: #ecebe3;
  border-radius: 20px;
  margin: 6px;
  cursor: pointer;
  margin: 8px;
  padding: 12px;
}
.azulclaro {
  font-size: 45px;
  background-color: #56d3e4;
  color: #ffffff;
  border-radius: 20px;
  margin: 5px;
  cursor: pointer;
  margin: 8px;
  padding: 12px;
}
.vermelhopastel {
  font-size: 45px;
  background-color: #e01674;
  color: #ffffff;
  border-radius: 20px;
  margin: 6px;
  cursor: pointer;
  margin: 8px;
  padding: 12px;
}
</style>
