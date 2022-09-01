<template>
  <div class="visita">
    <form @submit.prevent="onUpdateForm" id="visita">
      <h3>Dia:{{ date }}</h3>
      <div class="entradas">
        <label for="nprontuario">
          <p>N° do prontuario</p>
          <input type="number" />
        </label>
        <!--
         <label for="cns">
          CNS do cidadão
          <input type="text" />
        </label>
       -->
      </div>
      <div class="informacoes">
        <p><b>Nome:</b>{{ user.nome }} {{ user.sobrenome }}</p>
        <p><b>Data de nascimento:</b>{{ printDia(user.data) }}</p>
        <p><b>Etnia:</b>{{ user.Etnia }}</p>
      </div>
      <br />
      <div class="divisoria">
        <p><b>Motivo da Visita</b></p>
        <select class="opcoes" name="mvisita" v-model="user.mvisita">
          <option value="Convite para atividades coletivas">Convite para atividades coletivas</option>
          <option value="atualização"><b>Atualização</b></option>
          <option value="Visita Periodica"><b>Visita Periodica</b></option>
          <option value="Busca ativa"><b>Busca ativa</b></option>
          <option value="Acompanhamento"><b>Acompanhamento</b></option>
          <option value="Controle ambiental/vetorial"><b>Controle ambiental/vetorial</b></option>
          <option value="Egresso de internação"><b>Egresso de internação</b></option>
          <option value="Orientação/Prevenção"><b>Orientação/Prenvenção</b></option>
          <option value="Outros"><b>Outros</b></option>
        </select>
      </div>
      <div>
        <p>Historico de Doenças</p>
        <select class="opcoes" name="hdoenca" v-model="user.hdoenca">
          <option value="Leichimaniose">Leichimaniose</option>
          <option value="Rubéola">Rubéola</option>
          <option value="Pneumonia">Pneumonia</option>
          <option value="Tuberculose">Tuberculose</option>
          <option value="Hanseniase">Hanseniase</option>
          <option value="Malária">Malária</option>
          <option value="Chagas">Chagas</option>
          <option value="Parasitas">Parasitas</option>
          <option value="DST">DST</option>
        </select>
      </div>
      <div>
        <p><b>Lingua Materna:</b></p>
        <label class="opcoes-radio">
          sim
          <input type="radio" v-model="user.lmaterna" value="lingua materna sim" />
        </label>
        <label class="opcoes-radio">
          não
          <input type="radio" v-model="user.lmaterna" value="lingua materna não" />
        </label>
      </div>
      <p><b>Dados do paciente</b></p>
      <div class="divisoria">
        <p><b>H.D Atual:</b></p>
        <p><b>H.D Regressa:</b></p>
        <p><b>H.D Família:</b></p>
        <p><b>Antecedentes cirúrgicos:</b></p>
        <p><b>Exames :</b></p>
        <div class="selecao">
          <label class="opcoes-radio">
            <input type="radio" v-model="user.atividadeFisica" value="atividade física" />
            Atividade Física
          </label>
          <label class="opcoes-radio">
            <input type="radio" v-model="user.tabagismoSim" value="sim" />
            Tabagismo
          </label>
          <label class="opcoes-radio">
            <input type="radio" v-model="user.digestivo" value="Ttrato digestivo" />
            Trato digestivo
          </label>
        </div>
      </div>
      <br />
      <span><b>Gestante &nbsp;</b></span>
      <transition name="fade" mode="out-in">
        <b v-if="!gestanteshow">sim</b>
        <b v-if="gestanteshow">não</b>
      </transition>
      <label class="switch">
        <input type="checkbox" v-on:input="gestanteshow = !gestanteshow" />
        <span class="slider round"></span>
      </label>
      <transition name="slide-fade">
        <div class="switch1" v-if="!gestanteshow" id="gestantediv">
          <p><b>Semana da Gestação</b><input type="text" /></p>
          <p><b>Peso pré-gestacional</b><input type="text" /></p>
          <p><b>IMC</b><input type="text" /></p>
          <p><b>Se Lactante</b><input type="text" /></p>
          <p><b>Periodo de Lactação</b><input type="text" /></p>
          <p><b>DUM:</b><input type="text" /></p>
        </div>
      </transition>
      <br />
      <p>Dados Antropométricos</p>
      <div class="divisoria">
        <p><b>Peso Atual:</b></p>
        <p><b>Peso Ideal:</b></p>
        <p><b>Altura:</b></p>
        <p><b>IMC:</b></p>
        <div class="selecao">
          <span>
             <label class="opcoes-radio">
            <input type="radio" v-model="user.peso" value="baixo peso" />
            Baixo Peso
          </label>
          </span>
         <span>
          <label class="opcoes-radio">
            <input type="radio" v-model="user.peso" value="peso adequado" />
            Peso adequado
          </label>
         </span>
          <label class="opcoes-radio">
            <input type="radio" v-model="user.peso" value="sobrepeso" />
            Sobrepeso
          </label>
          <label class="opcoes-radio">
            <input type="radio" v-model="user.peso" value="obsidade" />
             Obsidade
          </label>
        </div>
        <p><b>Cintura:</b></p>
        <p><b>Quadril:</b></p>
        <p><b>RAG:</b></p>
      </div>
      <div class="divisoria">
        <p><b>Acompanhamento Nutricional</b></p>
        <p><b>Data:</b>{{ date }}</p>
        <p><b>Peso:</b></p>
        <p><b>IMC:</b></p>
        <textarea name="nutricional" id="nutricional" cols="40" rows="5" placeholder="Observações">
        </textarea>
      </div>
      <br />
      <button class="confirmar" @click="confirmou = true">Confirmar</button>
    </form>
  </div>
</template>

<script>
import { db } from "../../firebase";
export default {
  name: "DateComponent",
  props: ["id"],
  firestore() {
    return {
      user: db.collection("user"),
    };
  },
  data() {
    return {
      date: "",
      user: {},
      confirmou: false,
      gestanteshow: true
    };
  },
  methods: {
    printDate: function () {
      return new Date().toLocaleDateString();
    },
    printDia: function (data) {
      return new Date(data).toLocaleDateString();
    },
    onUpdateForm(event) {
      event.preventDefault();
      db.collection("users")
        .doc(this.id)
        .update(this.user)
        .then(() => {
          console.log("Usuario Modificado com sucesso");
          this.$router.push("/list");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  created() {

    let dbRef = db.collection("users").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.user = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted: function () {
    this.date = this.printDate();
  },
};
</script>
<style>
@media screen and (max-width: 600px) {
  .visita {
    /*margin-top: 5px;*/
    display: flex;
    margin-top: 5%;
    margin-bottom: 12%;
  }

  input {
    font-size: 10pt;
    margin-bottom: 10px;
    margin-left: 5px;
    width: 98%;
  }

  form {
    background: #058fd9a2;
    border: 1px solid #3f84e5;
    font-family: Arial;
    font-size: 14px;
    margin: 0px;
    width: 97%;
    height: 95%;
    padding: 10px;
    /*flex-direction: column;*/
    justify-content: space-around;
    align-content: space-around;
    /*align-self: baseline;*/
  }
  .divisoria {
    background-color: #fefeff;
    border-radius: 5%;
    padding: 2%;
    margin-top: 5px;
    color: #201e1f;
    box-shadow: 1px 1px 0.5px 0.5px #000000a4;
  }

  .entradas {
    text-align: justify;
  }

  .informacoes {
    text-align: justify;
  }

  .selecao {
    display: flex;
    flex-direction:column;
    align-content: space-around;
    font-size-adjust: inherit;
  }

  #gestantediv {
    background-color: #43b92993;
    color: #1a1b19;
    border-radius: 5px;
    padding: 25px 45px;
    margin: 7px;
  }

  .opcoes {
    position: relative;
    font-family: Arial;
    background-color: #faa513c9;
    border-radius: 5px;
    width: 80%;
  }
  .opcoes:after {
    position: absolute;
    content: "";
    top: 14px;
    right:0px;
    width: 0%;
    height: 0;
    border: 2px solid transparent;
    border-color: #e98a15cc transparent transparent transparent;
    border-radius: 5px;
    padding-right: 0%;
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
    cursor: pointer;
  }

  .opcoes-radio {
    display: flex;
    /*justify-content: space-between;*/
    align-items: space-between;
   /* flex-wrap: wrap;
    width: 10%;*/
  }

  .opcoes-radio label {
   
    font-size: 2%;
    /*text-align: justify;*/
  }

  .opcoes-radio input {
    border-radius: 50%;
    width: 5%;
    height: 5%;
    border: 2px solid #070600;
    margin-right: 5px;
  }
}
</style>