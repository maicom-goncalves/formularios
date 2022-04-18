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
      <div class="parte-um">
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
          <input id="data" type="date" v-model="newUsers.dataId" />
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
      <div class="parte-dois">
        <div>
          <h3>Doença</h3>
          <label for="doenca">Doença</label>
          <input id="nameId" type="text" v-model="newUsers.doencaId" required />
        </div>
        <div>
          <label for="datadiagnostico">Data do Diagnostico</label>
          <input id="data" type="date" v-model="newUsers.dataDiagnosticoId" />
        </div>
        <div>
          <label for="situacao">Situção</label>
          <input type="text" v-model="newUsers.situacaoId" required />
        </div>
      </div>
      <div class="parte-um">
        <h4><b>SESSÃO D:MEDICAÇÕES DE USO CONTÍNUO</b></h4>
        <h4>POSTO DE SAÚDE INDÍGENA</h4>
        <div id="medicamento">
          <form id="form1" v-on:submit.prevent="addMedicamento">
            <div>
              <label for="medicamento">Medicamento</label>
              <input id="data" type="date" v-model="newUsers.medicamentoId" />
            </div>
            <div>
              <label for="doze">Doze</label>
              <input id="data" type="date" v-model="newUsers.doze2Id" />
            </div>
            <div>
              <label for="horarios">Horarios</label>
              <input id="data" type="date" v-model="newUsers.horarioId" />
            </div>
          </form>
        </div>
      </div>
      <div class="parte-dois">
        <h4>Óbito</h4>
        <div>
       <label for="obito">Data Obito</label>
       <input id="data" type="date" v-model="newUsers.obitoId" />
     </div>
     <div>
       <label for="obito">Atestado de Óbito</label>
       <input  type="text" v-model="newUsers.atestadoId" />
     </div>   
     <div>
       <label for="situacao">Causas de Óbito</label>
       <input type="causaobito" v-model="newUsers.causaObitoId" />
     </div>             
      </div>
      <div class="parte-tres">
        <button class="vermelhopastel" type="submit" value="AddUser">
          Enviar
        </button>
      </div>
    </form>
    <button class="voltar" @click="irParaInicio">VOLTAR</button>
  </div>
</template>

<script>
import { db } from "../../firebase";
export default {
  //name: "formularioId",
  data() {
    return {
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
        // Tirar formatação
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
            (soma, el, i) => soma + el * (count - i), 0 ) *
            10) % 11) %
          10;
        return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1]);
      }
      var strCPF = TestaCPF(`${this.newUsers.cpfId}`);
      if (strCPF == true) {
        //console.log("escrito no Firestore");
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
  background: #9ce0e9;
  border: 1px solid #ffeeee;
  font-family: Arial;
  font-size: 27px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 800px;
  border-radius: 18px;
  color: black;
}
.parte-um {
  /*grid-area: parte-um;*/
  text-align: left;
  padding: 20px;
}
.parte-dois {
  /*grid-area: parte-dois;*/
  text-align: left;
  padding: 20px;
}
.parte-tres {
  /*grid-area: parte-tres;*/
  text-align: center;
}
</style>