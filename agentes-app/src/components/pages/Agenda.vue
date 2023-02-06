<template>
  <div class="newUsers">
    <form v-on:submit.prevent="addUser" v-if="!enviado" id="newUsers">
      
      <div class="entradas">
        <label for="nprontuario">
          <p>N° do prontuario</p>
          <input type="number" v-model="newUsers.nprontuario" />
        </label>
        <div class="turno">
          <label class="opcoes-radio" required>
            <input type="radio" value="manhã" v-model="newUsers.turno" />
            manhã
          </label>
          <label class="opcoes-radio" required>
            <input type="radio" value="tarde" v-model="newUsers.turno" />
            tarde
          </label>
        </div>
        <p>
          cns do agente
        </p>
      </div>
      <div class="informacoes">
        <p><b>Nome:</b>{{ morador.nome }} {{ morador.sobrenome }}</p>
        <p><b>Data de nascimento:</b>{{ printDia(morador.data) }}</p>
        <p><b>Nome do agente :</b> {{agentes.nome}}</p>
        <p>
          <b>{{ morador.casa }}</b>
        </p>
        <p><b>Etnia:</b>{{ morador.Etnia }}</p>
        <p><b>Aldeia:</b>{{ morador.aldeia }}</p>
        <p>
          <b>{{ morador.genero }}</b>
        </p>
        <p>
          <b>{{ morador.area }}</b>
        </p>
      </div>
      <br />
      <p><b>Agente</b></p>
      <!--<select class="opcoes" name="agente" v-model="newUsers.agente">
        <option value={agentes.nome} v-for="agentes in agentes" :key="agentes['.key']">
          <b>{{agentes.nome}}</b>
        </option>
      </select>-->
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
        <p><b>Historico de Doenças</b></p>
        <select class="opcoes" name="hdoenca" v-model="newUsers.hdoenca">
          <option value="Leichimaniose">Leichimaniose</option>
          <option value="Rubéola">Rubéola</option>
          <option value="Pneumonia">Pneumonia</option>
          <option value="Tuberculose">Tuberculose</option>
          <option value="Hanseniase">Hanseniase</option>
          <option value="Malária">Malária</option>
          <option value="Chagas">Chagas</option>
          <option value="Parasitas">Parasitas</option>
          <option value="DST">DST</option>
          <option value="Saudavel">Saudavel</option>
        </select>
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
            <input
              type="checkbox"
              v-model="newUsers.atividadeFisica"
              value="Atividade fisica"
            />
            Atividade Física
          </label>
          <label class="opcoes-radio">
            <input
              type="checkbox"
              v-model="newUsers.tabagismoSim"
              value="Tabagista"
            />
            Tabagismo
          </label>
          <label class="opcoes-radio">
            <input
              type="checkbox"
              v-model="newUsers.digestivo"
              value="Trato digestivo"
            />
            Trato digestivo
          </label>
        </div>
      </div>
      <br />
      <div v-show="(this.morador.genero =='Feminino')">
        <span><b>Gestante &nbsp;</b></span>
        <transition name="fade" mode="out-in">
          <b v-if="!gestanteshow">sim</b>
          <b v-if="gestanteshow">não</b>
        </transition>
        <label class="switch">
          <input
            type="checkbox"
            v-on:input="gestanteshow = !gestanteshow"
            v-model="newUsers.gestante"
            value="gestante"
          />
          <span class="slider round"></span>
        </label>
        <transition name="slide-fade">
          <div class="switch1" v-if="!gestanteshow" id="gestantediv">
            <p><b>Semana da Gestação</b><input type="text" v-model="newUsers.semanaG" /></p>
            <p><b>Peso pré-gestacional</b><input type="text" v-model="newUsers.pesoG" /></p>
            <p><b>IMC</b><input type="number" v-model="newUsers.imcG"/></p>
            <p><b>Se Lactante</b><input type="text" v-model="newUsers.lactanteG" /></p>
            <p><b>Periodo de Lactação</b><input type="text" v-model="newUsers.periodoG"/></p>
          </div>
        </transition>
      </div>
      <br />
      <p>Dados Antropométricos</p>
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
        <p><b>Acompanhamento Nutricional</b></p>
        <p><b>Data:</b>{{ date }}</p>
        <p><b>Peso:</b></p>
        <input type="number" v-model="newUsers.peso1" />
        <p><b>Altura:</b></p>
        <input type="number" v-model="newUsers.altura" />
        <br/>
        <textarea
          v-model="newUsers.observacoes"
          name="nutricional"
          id="nutricional"
          cols="40"
          rows="6"
          placeholder="Observações"
        >
        </textarea>
      </div>
      <br />
      <button class="confirmar" type="submit" value="AddUser">Enviar</button>
    </form>
    <div v-if="enviado" class="finalizado">
      <p>Enviado com Sucesso</p>
      <button class="fimVoltar" @click="irParaInicio">VOLTAR</button>
    </div>
  </div>
</template>
  
  <script>
import { db } from "../../firebase";
export default {
  name: "DateComponent",
  props: ["id","id2","id3"],
  firestore() {
    return {
      newUsers: db.collection("dia"),
      morador: db.collection("morador").doc("Bananal").collection("moradores").doc(this.id3),
      agentes: db.collection("agentes").doc(this.id)
    };
  },
  data() {
    return {
      date: "",
      dia: [],
      gestanteshow: true,
      enviado: false,
      newUsers: {
        dia: "",
        mvisitas: "",
        hdoenca: "",
        atividadeFisica: "",
        tabagismoSim: "",
        digestivo: "",
        peso: "",
        turno: "",
        nprontuario: "",
        gestante: "",
        observacoes: "",
        genero: "",
        agente:"",
        semanaG:"",
        pesoG:"",
        imcG:"",
        lactanteG:"",
        periodo:"",
        peso1:"",
        altura:""
      },
    };
  },
  methods: {
    printDate: function () {
      return new Date().toLocaleDateString();
    },
    printDia: function (data) {
      return new Date(data).toLocaleDateString();
    },
    addUser: function () {
      db.collection(this.morador.aldeia)
        .doc(this.morador.casa)
        .collection(this.morador.nome)
        .add({
          nome: `${this.morador.nome}`,
          sobrenome: `${this.morador.sobrenome}`,
          agente:`${this.agentes.nome}`,
          genero: `${this.morador.genero}`,
          dataAtual: `${this.date}`,
          motivo: `${this.newUsers.mvisita}`,
          hdoenca: `${this.newUsers.hdoenca}`,
          atividadeFisica: `${this.newUsers.atividadeFisica}`,
          tabagismoSim: `${this.newUsers.tabagismoSim}`,
          digestivo: `${this.newUsers.digestivo}`,
          peso: `${this.newUsers.peso}`,
          peso1: `${this.newUsers.peso1}`,
          altura: `${this.newUsers.altura}`,
          turno: `${this.newUsers.turno}`,
          nprontuario: `${this.newUsers.nprontuario}`,
          observacoes: `${this.newUsers.observacoes}`,
          gestante: `${this.newUsers.gestante}`,
          semanaGes:`${this.newUsers.semanaG}`,
          pesoGes:`${this.newUsers.pesoG}`,
          imcGestante:`${this.newUsers.imcG}`,
          lactanteGes:`${this.newUsers.lactanteG}`,
          periodoGes:`${this.newUsers.periodoG}`
        });
      this.enviado = true;
      console.log("enviado");
    },
    irParaInicio() {
      //voltar a pagina incial
      this.$router.push({ name: "inicio" });
    },
  },
  
  mounted: function () {
    this.date = this.printDate();
  },
};
</script>
  <style>
@media screen and (max-width: 600px) {
  .newUsers {
    display: flex;
    margin-top: 5%;
    margin-bottom: 12%;
  }
  input {
    font-size: 15pt;
    margin-bottom: 10px;
    margin-left: 5px;
    width: 90%;
  }

  form {
    background: #058fd9a2;
    border: 1px solid #3f84e5;
    font-family: Arial;
    font-size: 20px;
    margin: 0px;
    width: 97%;
    height: 95%;
    padding: 10px;
    justify-content: space-around;
    align-content: space-around;
  }
  .divisoria {
    background-color: #fefeff;
    border-radius: 5%;
    padding: 2%;
    margin-top: 5px;
    color: #201e1f;
    box-shadow: 1px 1px 0.5px 0.5px #000000a4;
  }
  .divisoria input{
    width: 78%;
  }
  .entradas {
    text-align: justify;
  }

  .informacoes {
    text-align: justify;
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
    position: relative;
    font-family: Arial;
    background-color: #faa513c9;
    border-radius: 5px;
    width: 80%;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  .opcoes:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 0px;
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
    align-items: space-between;
  }

  .opcoes-radio label {
    font-size: 4%;
  }

  .opcoes-radio input {
    border-radius: 50%;
    width: 5%;
    height: 5%;
    border: 2px solid #070600;
    margin-right: 5px;
    font-size: 27pt;
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
  .finalizado {
    text-align: center;
    width: 100%;
    margin: 20%;
  }
}
</style>