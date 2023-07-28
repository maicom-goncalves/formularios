<template>
  <div class="newUsers">
    <h3>{{ this.id }}</h3>
    <form v-on:submit.prevent="addUser" v-if="!enviado" id="newUsers">
      <div class="entradas">
        <label for="nprontuario">
          <p>N° do prontuario</p>
          <span>
            {{ this.nprontuario }}
          </span>
        </label>
        <p><b>Agente</b></p>
        <select class="opcoes" name="agente" v-model="newUsers.agente" required>
          <option
            :id="agentes.sobrenome"
            v-for="agentes in agentes"
            :key="agentes['.key']"
          >
            <b>{{ agentes.nome }} {{ agentes.sobrenome }}</b>
          </option>
        </select>
        <br />
        <p><b>Morador</b></p>
        <select class="opcoes" name="morador" v-model="newUsers.morador" required>
          <option
            :id="morador.sobrenome"
            v-for="morador in moradores"
            :key="morador['.key']"
          >
            <b>{{ morador.nome }} {{ morador.sobrenome }}</b>
          </option>
        </select>
        <br />
        <div class="turno">
          <label class="opcoes-radio" required>
            <input type="radio" value="manhã" v-model="newUsers.turno" />
            manhã
          </label>
          <br />
          <label class="opcoes-radio" required>
            <input type="radio" value="tarde" v-model="newUsers.turno" />
            tarde
          </label>
        </div>
      </div>
      <br />
      <p><b>Visita</b></p>
      <div class="divisoria">
        <p><b>Motivo da visitas</b></p>
        <select class="opcoes" name="mvisita" v-model="newUsers.mvisita">
          <option value="Convite para atividades coletivas">
            Convite para atividades coletivas
          </option>
          <option value="atualização"><b>Atualização</b></option>
          <option value=" Visita Periodica"><b>Visitas Periodica</b></option>
          <option value="Busca ativa"><b>Busca ativa</b></option>
          <option value="Acompanhamento"><b>Acompanhamento</b></option>
          <option value="Controle ambiental/vetorial">
            <b>Controle ambiental/vetorial</b>
          </option>
          <option value="Egresso de internação">
            <b>Egresso de internação</b>
          </option>
          <option value="Orientação/Prevenção">
            <b>Orientação/Prenvenção</b>
          </option>
          <option value="Outros"><b>Outros</b></option>
        </select>
      </div>
      <div>
        <p><b>Portador de Doença</b></p>
        <select class="opcoes" name="hdoenca" v-model="newUsers.hdoenca">
          <option value="Leichimaniose">Leichimaniose</option>
          <option value="Rubéola">Rubéola</option>
          <option value="Pneumonia">Pneumonia</option>
          <option value="Tuberculose">Tuberculose</option>
          <option value="Hanseniase">Hanseniase</option>
          <option value="Malária">Malária</option>
          <option value="Covid19">Covid19</option>
          <option value="Chagas">Chagas</option>
          <option value="Parasitas">Parasitas</option>
          <option value="DST">DST</option>
          <option value="Saudavel">Saudavel</option>
        </select>
      </div>
      <p><b>Dados do paciente</b></p>
      <div class="divisoria">
        <p><b>Exames :</b></p>
        <div class="selecao">
          <label class="opcoes-radio">
            <input
              type="radio"
              v-model="newUsers.atividadeFisica"
              value="Atividade fisica"
            />
            Atividade Física
          </label>
          <label class="opcoes-radio">
            <input
              type="radio"
              v-model="newUsers.tabagismoSim"
              value="Tabagista"
            />
            Tabagismo
          </label>
          <label class="opcoes-radio">
            <input
              type="radio"
              v-model="newUsers.digestivo"
              value="Trato digestivo"
            />
            Trato digestivo
          </label>
        </div>
      </div>
      <br />
      <p>Acompanhamento nutricional</p>
      <div class="divisoria">
        <div class="selecao">
          <span>
            <label class="opcoes-radio">
              <input type="radio" v-model="newUsers.peso" value="baixo peso" />
              Baixo Peso
            </label>
          </span>
          <span>
            <label class="opcoes-radio">
              <input
                type="radio"
                v-model="newUsers.peso"
                value="peso adequado"
              />
              Peso adequado
            </label>
          </span>
          <label class="opcoes-radio">
            <input type="radio" v-model="newUsers.peso" value="sobrepeso" />
            Sobrepeso
          </label>
          <label class="opcoes-radio">
            <input type="radio" v-model="newUsers.peso" value="obsidade" />
            Obsidade
          </label>
        </div>
      </div>
      <div class="divisoria">
        <p><b>Observações</b></p>
        <br />
        <textarea
          v-model="newUsers.observacoes"
          name="observações"
          id="observações"
          cols="27"
          rows="6"
          placeholder="Observações"
        >
        </textarea>
      </div>
      <br />
      <button class="confirmar" type="submit" value="AddUser">Enviar</button>
      <br />
      <button class="voltar" @click="irParaInicio">VOLTAR</button>
    </form>
    <div v-if="enviado" class="finalizado">
      <p>Enviado com Sucesso</p>
      <button class="fimVoltar" @click="irParaInicio">VOLTAR</button>
      <br />
      <button class="formVoltar" @click="limparForm">NOVO</button>
    </div>
  </div>
</template>
  
<script>
import firebase from "firebase/app";
import "firebase/firestore";
import "../fonts/fontes.css"
export default {
  props: ["id"],
  data() {
    return {
      date: "",
      dia: [],
      agentes: [],
      enviado: false,
      newUsers: {
        agente: "",
        morador: "",
        aldeia: "",
        dia: "",
        mvisitas: "",
        hdoenca: "",
        atividadeFisica: "não",
        tabagismoSim: "não",
        digestivo: "não",
        peso: "",
        turno: "",
        nprontuario: "",
        gestante: "",
        observacoes: "Sem Observações",
        genero: "",
        semanaG: "",
        pesoG: "",
        imcG: "",
        lactanteG: "",
        periodo: "",
      },
    };
  },
  created() {
    this.nprontuario = Math.floor((Math.random() * 99999 + 10000) * 10);
    this.buscarAgentes();
    let db = firebase.firestore();
    this.moradores = [];
    let numeros = [];
    console.log(docRef);
    //receber documento do firebase
    var docRef = db
      .collection("morador")
      .doc(this.$route.params.id)
      .collection("moradores")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          //this.moradores.push((numeros = (doc.id, " => ", doc.data())));
          this.moradores.push(doc.data());
          console.log( numeros);
        });
      });
  },
  methods: {
    printDate: function () {
      return new Date().toLocaleDateString();
    },
    printDia: function (data) {
      return new Date(data).toLocaleDateString();
    },
    buscarAgentes() {
      let db = firebase.firestore();
      this.agentes = [];
      let numeros = [];
      console.log(docRef);
      //receber documento do firebase
      var docRef = db
        .collection("agente")
        .doc(this.$route.params.id)
        .collection("agentes")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.agentes.push((numeros = (doc.id, " => ", doc.data())));
            console.log(this.agentes + numeros);
          });
        });
    },
    addUser: function () {
      let db = firebase.firestore();
      db.collection("Visita")
        .doc(this.$route.params.id)
        .collection("visitas")
        .add({
          aldeia: `${this.$route.params.id}`,
          nome: `${this.newUsers.morador}`,
          agente: `${this.newUsers.agente}`,
          dataAtual: `${this.date}`,
          motivo: `${this.newUsers.mvisita}`,
          hdoenca: `${this.newUsers.hdoenca}`,
          atividadeFisica: `${this.newUsers.atividadeFisica}`,
          tabagismoSim: `${this.newUsers.tabagismoSim}`,
          digestivo: `${this.newUsers.digestivo}`,
          peso: `${this.newUsers.peso}`,
          turno: `${this.newUsers.turno}`,
          nprontuario: `${this.newUsers.nprontuario}`,
          observacoes: `${this.newUsers.observacoes}`,
        });
      this.enviado = true;
    },
    irParaInicio() {
      //voltar a pagina incial
      this.$router.push("/home");
    },
    limparForm() {
      this.newUsers = [
        (this.nome = ""),
        (this.agente = ""),
        (this.motivo = ""),
        (this.hdoenca = ""),
        (this.atividadeFisica = "não"),
        (this.tabagismoSim = "não"),
        (this.digestivo = "não"),
        (this.peso = ""),
        (this.nprontuario = Math.floor((Math.random() * 99999 + 10000) * 10)),
        (this.observacoes = "sem observações"),
      ];
      this.enviado = false;
    },
  },
  mounted: function () {
    this.date = this.printDate();
  },
};
</script>
  <style scoped>
@media screen and (max-width: 600px) {
  .d-mobile-none {
    display: block;
  }
  .newUsers {
    display: flex;
    margin-top: 5%;
    margin-bottom: 12%;
    padding: 1%;
  }
  .newUsers input {
    font-size: 15pt;
    margin-bottom: 10px;
    margin-left: 5px;
    width: 90%;
  }

  .newUsers form {
    background: #058fd9a2;
    border: 1px solid #3f84e5;
    font-family: 'Righteous', sans-serif;
    font-size: 20px;
    margin: 0px;
    width: 97%;
    height: 95%;
    padding: 1%;
    justify-content: space-around;
    align-content: space-around;
  }
  .divisoria {
    background-color: #fefeff;
    border-radius: 5%;
    padding: 4%;
    margin-top: 5px;
    color: #201e1f;
    box-shadow: 1px 1px 0.5px 0.5px #000000a4;
  }
  .divisoria input {
    width: 78%;
  }
  .entradas {
    text-align: justify;
  }

  .informacoes {
    text-align: justify;
  }
  .turno {
    margin-top: 4%;
    flex-direction: row;
  }
  .selecao {
    display: flex;
    flex-direction: column;
    align-content: space-around;
    font-size: 15pt;
  }
  #gestantediv {
    background-color: #43b92993;
    color: #1a1b19;
    border-radius: 5px;
    padding: 25px 45px;
    margin: 7px;
  }
  .opcoes {
    font-family: Arial;
    background-color: #faa513c9;
    border-radius: 5px;
    width: 93%;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-user-select: none;
    user-select:  selectpicker;
    position: relative;
  }
  option {
    border-radius: 5px;
    width: 93%;
  }
  .opcoes:after {
    content: "";
    top: 14px;
    right: 0px;
    width: 0%;
    height: 0;
    border: 1px solid transparent;
    border-color: #e98a15cc transparent transparent transparent;
    border-radius: 5px;
    padding-right: 0%;
    position: absolute;
  }
  .opcoes.select-arrow-active:after {
    border-color: transparent transparent #fff transparent;
    top: 7px;
  }

  .select-items div,
  .opcoes {
    color: #131313;
    padding: 3% 2%;
    border: 1px solid transparent;
    border-color: transparent transparent #0000001a transparent;
  }

  .opcoes-radio {
    display: flex;
  }

  .opcoes-radio label {
    font-size: 4vh;
  }
  .opcoes-radio input {
    border-radius: 50%;
    width: 3vh;
    height: 3vh;
    border: 2px solid #031d55;
    margin-right: 2%;
    margin-top: 3%;
    font-size: 10%;
  }
  .confirmar {
    font-size: 16pt;
    background-color: #ff5e5b;
    border-style: none;
    color: #ecebe3;
    border-radius: 5px;
    padding: 17px;
    cursor: pointer;
    margin-left: 4%;
    margin-bottom: 4%;
    text-align: center;
    width: 45%;
    height: 75%;
    box-shadow: 2px #070600c2;
  }
  .fimVoltar {
    font-size: 17pt;
    background-color: #45ecec;
    border-style: none;
    color: #000000;
    border-radius: 5px;
    padding: 7px;
    cursor: pointer;
    margin-left: 6%;
    margin-bottom: 2%;
    text-align: center;
    width: 65%;
    height: 76%;
    box-shadow: 2px #070600c2;
  }
  .voltar {
    font-size: 17pt;
    background-color: #f6bd60;
    border-style: none;
    color: #000000;
    border-radius: 5px;
    padding: 7px;
    margin-left: 4%;
    margin-bottom: 4%;
    text-align: center;
    width: 45%;
    height: 75%;
    box-shadow: 2px #070600c2;
  }
  .formVoltar {
    font-size: 17pt;
    background-color: #fe9000;
    border-style: none;
    color: #000000;
    border-radius: 5px;
    padding: 7px;
    cursor: pointer;
    margin-left: 6%;
    margin-bottom: 2%;
    text-align: center;
    width: 65%;
    height: 76%;
    box-shadow: 2px #070600c2;
  }
  .finalizado {
    text-align: center;
    width: 100%;
    margin: 20%;
  }
}
</style>