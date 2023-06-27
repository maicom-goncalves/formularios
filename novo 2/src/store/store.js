import Vue from 'vue'
import Vuex from 'vuex'
//import {db} from '../firebase'

Vue.use(Vuex)
export default new Vuex.Store({
    
    state: {
        aldeia: "",
        dados: []
    },
    getters: {
        aldeiaMudar(state) {
            return state.aldeia
        },
        //getDados: state => state.dados
        setDados(state) {
            return state.dados
        }
    },
    mutations: {
        aldeiaMudar(state, payload) {
            state.aldeia = payload
        },
        setDados: (state, payload) => {
            state.dados = payload
        }
    },
    actions: {
        aldeiaMudar(context, payload) {
            context.commit('aldeiaMudar', payload)
        },
        setDados(context, payload) {
            context.commit('setDados', payload)
        }
        /* async setDados(context){
            
            try {
              const snapshot = await db.collection("Visitas")
              .doc("Morrinho")
              .collection("agente")
              .doc("001")
              .collection("Ricardo").get()
              const data = snapshot.docs.map(doc => doc.data())
              console.log(data)
              return context.commit('setDados',data)
            } catch (error) {
              // Lidar com erros aqui
               console.error('Erro ao buscar dados do Firestore:', error);
            }
          }*/
    }
})