<template>
  <div>
    <Menu />
    <h2>Cadastrar Agentes</h2>
    <div id="formularioAgente">
      <form id="form" v-on:submit.prevent="addUser" v-if="!enviado">
        <div class="um">
          <div>
            <label for="area">Micro Area:</label>
            <input type="text" required />
          </div>
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
            <p>Aldeia onde Trabalha</p>
            <select
              class="opcoes"
              name="aldeias"
              v-model="newUsers.residenceAgente"
            >
              <option value="Água Clara"><b>Água Clara</b></option>
              <option value="Buritizinho">Buritizinho</option>
              <option value="Bananal">Bananal</option>
              <option value="Morrinho"><b>Morrinho</b></option>
              <option value="Ipegue"><b>Ipegue</b></option>
            </select>
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
          <label for="CPF">CPF</label>
          <input
            type="text"
            v-model="newUsers.cpf"
            required
            placeholder="CPF"
          />
          <div class="cpf" v-show="cpfFalso">
            <p><b>número de CPF inválido</b></p>
          </div>
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
        <br />
        <button class="novoCadastro" @click="() => limpaForm()">
          Novo Cadastro
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase";
import Menu from '../template/Menu.vue';
export default {
  components: { Menu },
  data() {
    return {
      enviado: false,
      cpfFalso: false,
      agentes: [],
      user: {},
      newUsers: {
        nameAgente: "",
        lastnameAgente: "",
        generoAgente: "",
        etnosAgente: "",
        residenceAgente: "",
        cityAgente: "",
        CNS: "",
        dataNascimento: "",
        email: "",
        cpf: "",
      },
    };
  },
  firestore() {
    return {
      user: db.collection("agentes"),
    };
  },
  methods: {
    limpaForm() {
      this.newUsers = [
        (this.nameAgente = ""),
        (this.lastnameAgente = ""),
        (this.generoAgente = ""),
        (this.etnosAgente = ""),
        (this.residenceAgente = ""),
        (this.cityAgente = ""),
        (this.CNS = ""),
        (this.dataNascimento = ""),
        (this.email = ""),
        (this.cpf = ""),
      ];
      this.enviado = false;
    },
    addUser: function () {
      let newCpf = "";
      function TestaCPF(cpf) {
        if (typeof cpf !== "string") return false;
        cpf = cpf.replace(/[^\d]+/g, "");
        newCpf = cpf;
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
      var strCPF = TestaCPF(`${this.newUsers.cpf}`);
      //console.log(newCpf);
      if (strCPF == true) {
        db.collection("agente")
          .doc(this.newUsers.residenceAgente)
          .collection("agentes")
          .add({
            nome: `${this.newUsers.nameAgente}`,
            sobrenome: `${this.newUsers.lastnameAgente}`,
            genero: `${this.newUsers.generoAgente}`,
            etnia: `${this.newUsers.etnosAgente}`,
            aldeia: `${this.newUsers.residenceAgente}`,
            cidade: `${this.newUsers.cityAgente}`,
            CNS: `${this.newUsers.cnsAgente}`,
            dataNascimento: `${this.newUsers.dataNascimento}`,
            email: `${this.newUsers.email}`,
            cpf: newCpf,
          });
        this.enviado = true;
      } else {
        this.cpfFalso = true;
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
  height: 50%;
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
  grid-template-rows: 1fr ;
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

.cpfFalso {
  color: red;
  font-size: 15px;
}
</style>