<template>
  <div class="visita">
    <form @submit.prevent="onUpdateForm" id="visita">
      <h3>Dia:{{ date }}</h3>
      <div class="entradas">
        <label for="nprontuario">
          <p>N° do prontuario</p>
          <input type="text" />
        </label>
       <!--
         <label for="cns">
          CNS do cidadão
          <input type="text" />
        </label>
       -->
        
      </div>
      <div class="informacoes">
        <p><b>Nome:</b>{{user.nome}} {{user.sobrenome}}</p>
        <p><b>Data de nascimento:</b>{{printDia(user.data)}}</p>
        <p><b>Etnia:</b>{{user.Etnia}}</p>
      </div>
      <br />
      <div class="divisoria">
      <p>Motivo da Visita</p>
      <select class="opcoes" name="mvisita">
        <option value="atualização">Atualização</option>
        <option value="Visita Periodica">Visita Periodica</option>
        <option value="Busca ativa">Busca ativa</option>
        <option value="Acompanhamento">Acompanhamento</option>
        <option value="Controle ambiental/vetorial">Controle ambiental/vetorial</option>
        <option value="Egresso de internação">Egresso de internação</option>
        <option value="Convite para atividades coletivas">Convite para atividades coletivas</option>
        <option value="Orientação/Prevenção">Orientação/Prenvenção</option>
        <option value="Outros">Outros</option>
      </select>
      </div>
      <div>
        <p>Historico de Doenças</p>
      <select class="opcoes" name="hdoenca">
        <option value="Rubéola">Rubéola</option>
        <option value="Pneumonia">Pneumonia</option>
        <option value="Tuberculose">Tuberculose</option>
        <option value="Hanseniase">Hanseniase</option>
        <option value="Malária">Malária</option>
        <option value="Chagas">Chagas</option>
        <option value="Leichimaniose">Leichimaniose</option>
        <option value="Parasitas">Parasitas</option>
        <option value="DST">DST</option>
      </select>
      </div>
      <div>
        <p>Lingua Materna:</p>
         <label class="opcoes-radio">
          sim
          <input type="radio" v-model="user.smaterna" value="lingua materna sim" />
        </label>
        <label class="opcoes-radio">
          não
          <input type="radio" v-model="user.nmaterna" value="lingua materna não" />
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
          Atividade Física
          <input type="checkbox" v-model="user.atividadeFisica" value="atividade física" />
        </label>
        <label class="opcoes-radio">
          Tabagismo
          <input type="checkbox" v-model="user.tabagismoSim" value="sim" />
        </label>
        <label class="opcoes-radio">
          Trato digestivo
          <input type="checkbox" v-model="user.digestivo" value="Ttrato digestivo" />
        </label>
      </div>
      </div>
    
      <br/>
      Gestante
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
      <br/>
      <p>Dados Antropométricos</p>
      <div class="divisoria">
        <p><b>Peso Atual:</b></p>
        <p><b>Peso Ideal:</b></p>
        <p><b>Altura:</b></p>
        <p><b>IMC:</b></p>
        <div class="selecao">
                <label class="opcoes-radio">
                  Baixo Peso
                  <input type="checkbox" v-model="user.baixoPeso" value="baixo peso" />
                </label>
                <label class="opcoes-radio">
                  Peso adequado
                  <input type="checkbox" v-model="user.adequado" value="peso adequado" />
                </label>
                <label class="opcoes-radio">
                  Sobrepeso
                  <input type="checkbox" v-model="user.sobrepeso" value="sobrepeso" />
                </label>
                <label class="opcoes-radio">
                  Obsidade
                  <input type="checkbox" v-model="user.obsidade" value="obsidade" />
                </label>
              </div>
         <p><b>Cintura:</b></p>
         <p><b>Quadril:</b></p>  
         <p><b>RAG:</b></p>   
      </div>
      <div class="divisoria">
        <p><b>Acompanhamento Nutricional</b></p>
        <p><b>Data:</b>{{date}}</p>
        <p><b>Peso:</b></p>
        <p><b>IMC:</b></p>
        <p><b>Observações</b></p>
        <textarea name="nutricional" id="nutricional" cols="40" rows="5">

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
      gestanteshow:true
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
    margin-top: 5px;
    display: flex;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  input {
  font-size: 10pt;
  margin-bottom: 10px;
  margin-left: 5px;
  width: 98%;
}
  form {
    background: #247ba070;
    border: 1px solid #e4e1e1;
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
  .divisoria{
    background-color: #fdfdfd9d;
    border-radius: 5%;
    padding: 2%;
    margin-top: 5px;
    color: #0b0a07;
    box-shadow: #64666260 1px;
  }
  .entradas{
    text-align: justify;
  }
  .informacoes{
    text-align: justify;
  }
  .selecao {
    flex-direction: row;

  }
  #gestantediv{
    background-color: #00ffc394;
    color: #1a1b19;
    border-radius: 5px;
    padding: 25px 45px;
    margin: 7px;
}
  .opcoes {
    position: relative;
    font-family: Arial;
    margin: 5px;

  }

  .opcoes {
    background-color: #fedc97;
  }

  .opcoes:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
    border-bottom-left-radius:5px ;
    border-bottom-right-radius:5px ;
  }

  .opcoes.select-arrow-active:after {
    border-color: transparent transparent #fff transparent;
    top: 7px;
  }

  .select-items div,
  .opcoes {
    color: #131212;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent #0000001a transparent;
    cursor: pointer;
  }

  .opcoes-radio {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    display: inline;
    width: 2%;
  }

  .opcoes-radio label {
    margin-right: 5px;
    line-height: 5px;
    text-align: justify;
  }

  .opcoes-radio input {
    border-radius: 50%;
    width: 36px;
    height: 26px;
    border: 2px solid #070600;
    margin-right: 5px;
  }
}
</style>