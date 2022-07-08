<template>
  <div class="visita">
    
    <form @submit.prevent="onUpdateForm" id="visita">
    <h2>Dia:{{ date }}</h2>
      <table>
        <hr />
        <h4 clas="titulo">visita</h4>
        <tr>
          <th>Alteraçao</th>
        </tr>
        <tr>
          <td><input type="text" v-model="user.alteracao" /></td>
        </tr>
        <tr>
          <th>Orientação</th>
        </tr>
        <tr>
          <td><input type="text" v-model="user.orientacao" /></td>
        </tr>
      </table>
      <select id="" name="considerações">
        <option value="Pessoa com asma">Asma</option>
        <option value="Tuberculose">Tuberlose</option>
        <option value="Tabagista">Tabagista</option>
      </select>
      <br/>
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
      date: '',
      user: {},
      confirmou: false,
    };
  },
  methods: {
     printDate: function () {
            return new Date().toLocaleDateString();
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
    },
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
        }
};
</script>
<style>
@media screen and (max-width: 600px) {
  .visita {
    display: flex;
  }
  form {
    background: #88edff;
    border: 1px solid #ffeeee;
    font-family: Arial;
    font-size: 14px;
    margin: 5px;
    width: 90%;
    height: 95%;
  }
}
</style>