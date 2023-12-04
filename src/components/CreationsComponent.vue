<template>
  <div id="creations">
    <h2>Créations{{ $route.params.id }}</h2>
    <p>Je vous présente les 3 projets que j'ai deja réalisé auparavant dans le cadre de cette formation.</p>
    <button @click="openProjetCV"><h3>Créez votre CV en HTML et CSS</h3></button>
    <button @click="openCahierCharges"><h3>Rédiger un cahier des charges</h3></button>
    <button @click="openEspaceComm"><h3>Dynamiser un espace commentaire avec JavaScrip</h3></button>
    
    <!-- Modals -->
    <ProjetCV v-if="isProjetCVVisible" @close="closeProjetCV" />
    <CahierCharges v-if="isCahierChargesVisible" @close="closeCahierCharges" />
    <EspaceComm v-if="isEspaceCommVisible" @close="closeEspaceComm" />
  </div>
</template>

<script>

import ProjetCV from "@/components/ProjetCV.vue"
import CahierCharges from "@/components/CahierCharges.vue"
import EspaceComm from "@/components/EspaceComm.vue";

export default {
  props: {
    content: String,
  },

  data() {
    return {
      isProjetCVVisible: false,
      isCahierChargesVisible: false,
      isEspaceCommVisible: false,
    };
  },
  methods: {
    openProjetCV() {
      this.isProjetCVVisible = true;
    },
    openCahierCharges() {
      this.isCahierChargesVisible = true;
    },
    
    openEspaceComm() {
      this.isEspaceCommVisible = true;
    },




    closeProjetCV() {
      this.isProjetCVVisible = false;
    },
    closeCahierCharges() {
      this.isCahierChargesVisible = false;
    },

    closeEspaceComm() {
      this.isEspaceCommVisible = false;
    },
  },
  components: {
    ProjetCV,
    CahierCharges,
    EspaceComm,
  },


};
</script>
<style scoped>
#creations {
  width: 100%;
  height: 100%;
  background-color:white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-items: center;
  }
</style>