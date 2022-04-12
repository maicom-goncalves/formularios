<template>
  <div id="app">
    <header>
      <h1><b>SAÚDE INDÍGENA</b></h1>
      <h2>MINISTERIO DA SAÚDE</h2>
      <h2>SECRETARIA ESPECIAL INDÍGENA</h2>
      <h3>DISTRITO SANITÁRIO ESPECIAL DE INDÍGENA MATO GROSSO DO SUL</h3>
      <h4>POSTO DE SAÚDE INDÍGENA</h4>
      <span>
        <button class="vermelho" @click="componente ='FormularioId'">
          Formulario de Cadastro
        </button>
        <!-- carregar lista de moradores da região -->
        <button class="verde" @click="componente ='ListaMoradores'">
          Lista de Moradores
        </button>
    </span>
    </header>
    <article>
      <component :is="componente"/>
      <router-view ></router-view>
    </article>
    <footer>
      <br />
    </footer>
  </div>
</template>

<script>
import FormularioId from './components/FormularioId.vue'
//import Busca from './components/Busca.vue'
import ListaMoradores from './components/ListaMoradores.vue'

export default {
  props:['key'],
  components:{FormularioId,ListaMoradores },
  data(){
		return{
			componente:'FormularioId',
      
		}
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #05074b;
  margin-top: 40px;
  display: grid;
  grid-template-areas: "header header" "article article" "footer footer";
  grid-template-columns: 750px auto;
}
header {
  grid-area: header;
  border-bottom: 1px solid #c9d7f1;
  text-align: center;
}

header h1 {
  margin-left: 20px;
}

article {
  grid-area: article;
  margin-left: 30px;
  margin-bottom: 10px;
  text-align: center;
}
footer {
  text-align: justify;
  border-top: 1px solid #80dde9;
  grid-area: footer;
  font-size: 20pt;
}

.vermelho {
  font-size: 45px;
  background-color: #d62d2a;
  color: #ecebe3;
  border-radius: 20px;
  margin:5px;
  cursor:pointer;
  margin:8px;
  padding: 5px;
}
.verde {
  font-size: 45px;
  background-color: #37b170;
  color: #ecebe3;
  border-radius: 20px;
  margin:6px;
  cursor:pointer;
  margin:8px;
  padding: 5px;
}



</style>
