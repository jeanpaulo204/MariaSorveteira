<template>
  <div v-if="mobile" class="mt-10 ml-15 text-h3" >
    SIGA-NOS EM NOSSAS REDES SOCIAIS

  </div>

  <h2 v-else  class="ml-15 mt-10" data-text="SIGA-NOS EM NOSSAS REDES SOCIAIS" >
    SIGA-NOS EM NOSSAS REDES SOCIAIS

  </h2>
  <v-container >

     <v-col v-if="mobile" >
  <v-col><Quadro1/></v-col>
  <v-col><Quadro2/></v-col>
  <v-col><Quadro3/></v-col>
 </v-col>

 <v-row v-else >
  <v-col><Quadro1/></v-col>
    <v-col><Quadro2/></v-col>
      <v-col><Quadro3/></v-col>
 </v-row>


 



  </v-container>
</template>

<style scoped>
h2{
 position: relative;
 font-size: 3rem;
 font-family: sans-serif;
 -webkit-text-stroke: 0.3vw #383d52;
 text-transform: uppercase;
}

h2::before{
content: attr(data-text);
position: absolute;
top: 0;
left: 0;
width: 0;
height: 100%;
color: #dfcb17;
-webkit-text-stroke: 0vw #383d52;
border-right: 2px solid #0e130e;
overflow: hidden;
animation: animate 6s linear infinite;
-webkit-animation: animate 21s linear infinite;

}

@keyframes animate{

0%{
  width: 0;
}

70%{
  width: 100%;
}

}

</style>

<script>
  import Quadro1 from './quadros_populares/quadro1.vue'
  import Quadro2 from './quadros_populares/quadro2.vue'
  import Quadro3 from './quadros_populares/quadro3.vue'

 export default {
  name: "Populares_template_inicio",
  components: {
    Quadro1,
    Quadro2,
    Quadro3,

},
    data: () => ({
      loading: false,
      selection: 1,
    }),

    computed: {
mobile() {
      return this.$vuetify.display.mobile;
    }


    },

    methods: {
    
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>