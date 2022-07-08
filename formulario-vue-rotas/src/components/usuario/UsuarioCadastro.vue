<template>
  <div id="formularioId">
    <form id="form" v-on:submit.prevent="addUser" v-if="!enviado">
      <div class="parte-um">
        <div>
          <h3>Identificação</h3>
          <div>
            <label for="nome">Nome</label>
            <input id="nameId" type="text" v-model="newUsers.nameId" required />
          </div>
          <div>
            <label for="mae">Nome da mãe</label>
            <input
              id="mother"
              type="text"
              v-model="newUsers.motherId"
              required
            />
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
        <div>
          <h3>VACINA</h3>
          <div>
            <label for="vacina">vacina</label>
            <input id="vacina" type="text" v-model="newUsers.vacinaId" />
          </div>
          <div>
            <label for="doze">Doze</label>
            <input id="doze" type="text" v-model="newUsers.dozeId" />
          </div>
          <div>
            <label for="data">Data</label>
            <input id="data" type="date" v-model="newUsers.dataId" required />
          </div>
          <div>
            <label for="lote">Lote</label>
            <input id="lote" type="text" v-model="newUsers.loteId" />
          </div>
          <div>
            <label for="validade">Validade</label>
            <input id="validade" type="date" v-model="newUsers.validadeId" />
          </div>
        </div>

        <div>
          <h4><b>MEDICAMENTO</b></h4>
          <transition name="fade" mode="out-in">
            <b v-if="!medicamentoshow">sim</b>
            <b v-if="medicamentoshow">não</b>
          </transition>
          <label class="switch">
            <input
              type="checkbox"
              v-on:input="medicamentoshow = !medicamentoshow"
            />
            <span class="slider round"></span>
          </label>
          <transition name="slide-fade"> 
            <div id="medicamento" v-if="!medicamentoshow">
            <h4><b>SESSÃO D:MEDICAÇÕES DE USO CONTÍNUO</b></h4>
              <div>
                <label for="medicamento">Medicamento</label>
                <input id="data" type="text" v-model="newUsers.medicamentoId" />
              </div>
              <div>
                <label for="doze">Doze</label>
                <input id="data" type="date" v-model="newUsers.doze2Id" />
              </div>
              <div>
                <label for="horarios">Horarios</label>
                <input id="data" type="date" v-model="newUsers.horarioId" />
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="parte-dois">
        <br />
        <div>
          <label for="nascimento">Nascimento</label>
          <input
            id="nascimento"
            type="date"
            v-model="newUsers.dateId"
            required
          />
        </div>
        <div>
          <label for="pai">Nome do Pai</label>
          <input id="father" type="text" required v-model="newUsers.fatherId" />
        </div>

        <div>
          <label for="house">Casa</label>
          <input id="casa" type="number" v-model="newUsers.houseId" required />
        </div>
        <p>Sexo</p>
        <div class="genero">
          <label for="masculino">Masculino</label>
          <input
            v-model="newUsers.generoId"
            type="radio"
            required
            value="Masculino"
          />
          <label for="feminino">Feminino</label>
          <input
            v-model="newUsers.generoId"
            type="radio"
            required
            value="Feminino"
          />
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
        <h3>Doença</h3>
        <transition name="fade" mode="out-in">
          <b v-if="!doencashow">sim</b>
          <b v-if="doencashow">não</b>
        </transition>
        <label class="switch">
          <input type="checkbox" v-on:input="doencashow = !doencashow" />
          <span class="slider round"></span>
        </label>
        <transition name="slide-fade">
          <div id="doencadiv" v-if="!doencashow">
            <label for="doenca">Doença</label>
            <input
              id="nameId"
              type="text"
              v-model="newUsers.doencaId"
              required
            />
            <div>
              <label for="datadiagnostico">Data do Diagnostico</label>
              <input
                id="data"
                type="date"
                v-model="newUsers.dataDiagnosticoId"
              />
            </div>
            <div>
              <label for="situacao">Situção</label>
              <input type="text" v-model="newUsers.situacaoId" required />
            </div>
          </div>
        </transition>
        <h4>Óbito</h4>
        <transition name="fade" mode="out-in">
          <b v-if="!obitoshow">sim</b>
          <b v-if="obitoshow">não</b>
        </transition>
        <label class="switch">
          <input type="checkbox" v-on:input="obitoshow = !obitoshow" />
          <span class="slider round"></span>
        </label>
        <transition name="slide-fade">
          <div v-if="!obitoshow" id="obitodiv">
            <div>
              <label for="obito">Data Obito</label>
              <input id="data" type="date" v-model="newUsers.obitoId" />
            </div>
            <div>
              <label for="obito">Atestado de Óbito</label>
              <input type="text" v-model="newUsers.atestadoId" />
            </div>
            <div>
              <label for="situacao">Causas de Óbito</label>
              <input type="causaobito" v-model="newUsers.causaObitoId" />
            </div>
          </div>
        </transition>
      </div>
      <div class="parte-tres">
          <button class="vermelhopastel" type="submit" value="AddUser">
          Enviar
        </button>
      </div>
    </form>
    <div class="enviado" v-else>
      <span>Enviado com sucesso</span>
      <button class="novoCadstro" @click="() => (enviado = false)">
        Novo Cadastro
      </button>
    </div>
    <button class="voltar" @click="irParaInicio">VOLTAR</button>
  </div>
</template>

<script>
import { db } from "../../firebase";
export default {
  data() {
    return {
      enviado: false,
      users: [],
      newUsers: {
        nameId: "",
        lastnameId: "",
        generoId: "",
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
        vacinaId: "",
        dozeId: "",
        data2Id: "",
        loteId: "",
        validadeId: "",
        doencaId: "",
        dataDiagnosticoId: "",
        situacaoId: "",
        medicamentoId: "",
        doze2Id: "",
        horarioId: "",
        obitoId: "",
        atestadoId: "",
        causaObitoId: "",
      },
      doencashow: true,
      obitoshow: true,
      medicamentoshow: true,
      texto: "SIM",
    };
  },
  props: {
    newUser: {
      required: false,
      default: () => {
        return {
          nameId: "",
          lastnameId: "",
          generoId: "",
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
          vacinaId: "",
          dozeId: "",
          data2Id: "",
          loteId: "",
          validadeId: "",
          doencaId: "",
          dataDiagnosticoId: "",
          situacaoId: "",
          medicamentoId: "",
          doze2Id: "",
          horarioId: "",
          obitoId: "",
          atestadoId: "",
          causaObitoId: "",
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
    irParaInicio() {
      //voltar a pagina incial
      this.$router.push({ name: "inicio" });
    },
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
        db.collection("users").add({
          nome: `${this.newUsers.nameId}`,
          sobrenome: `${this.newUsers.lastnameId}`,
          genero: `${this.newUsers.generoId}`,
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
          vacina: `${this.newUsers.vacinaId}`,
          doze: `${this.newUsers.dozeId}`,
          data2: `${this.newUsers.dataId}`,
          lote: `${this.newUsers.loteId}`,
          validade: `${this.newUsers.validadeId}`,
          doencaId: `${this.newUsers.doencaId}`,
          dataDiagnosticoId: `${this.newUsers.dataDiagnosticoId}`,
          situacaoId: `${this.newUsers.situacaoId}`,
          medicamentoId: `${this.newUsers.medicamentoId}`,
          doze2Id: `${this.newUsers.doze2Id}`,
          horarioId: `${this.newUsers.horarioId}`,
          obitoId: `${this.newUsers.obitoId}`,
          atestadoId: `${this.newUsers.atestadoId}`,
          causaObitoId: `${this.newUsers.causaObitoId}`,
        });
        this.enviado = true;
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
#form {
  margin-top: 25px;
  background: #f9f9f9;
  border: 1px solid #ffeeee;
  font-family: Arial;
  font-size: 27px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:  1fr;
  /*grid-auto-columns: 800px;*/
  grid-template-areas: "parte-um parte-dois" "parte-tres parte-tres";
  border-radius: 18px;
  color: black;
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
.parte-um {
  grid-area: parte-um;
  text-align: left;
  padding: 20px;
}
.parte-dois {
  grid-area: parte-dois;
  text-align: left;
  padding: 20px;
}
.parte-tres {
  grid-area: parte-tres;
  padding-top: 20px;
  margin-top: 20px;
  text-align: center;
}
#medicamento{
  background-color: #24d1b4;
  padding: 25px 45px;
  border-radius: 5px;
  margin: 7px;
}
#medicamento input {
  font-size: 18pt;
  margin-bottom: 10px;
  margin-left: 5px;
  width: 95%;
}
/*#medicamento label{
  width: 98%;
}*/
#obitodiv{
  background-color: #342a21;
  color: #ffeeee;
  border-radius: 5px;
  padding: 25px 45px;
  margin: 7px;
}
#doencadiv{
  background-color: #d1ac00;
  border-radius: 5px;
  padding: 25px 45px;
  margin: 7px;
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