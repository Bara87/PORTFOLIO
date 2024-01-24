<template>
  <div id="creations">
    <h2>Créations{{ $route.params.id }}</h2>
    <p>Je vous présente les 3 projets que j'ai deja réalisé auparavant dans le cadre de cette formation.</p>
    <button @click="openProjetCV" class="button"><h3>Créez votre CV en HTML et CSS</h3></button>
    <button @click="openCahierCharges" class="button"><h3>Rédiger un cahier des charges</h3></button>
    <button @click="openEspaceComm" class="button"><h3>Dynamiser un espace commentaire avec JavaScrip</h3></button>
    
    <!-- Modals -->
    <ProjetCV v-if="isProjetCVVisible" @close="closeProjetCV" />
    <CahierCharges v-if="isCahierChargesVisible" @close="closeCahierCharges" />
    <EspaceComm v-if="isEspaceCommVisible" @close="closeEspaceComm" />
  </div>
</template>

<script>

import { ref } from 'vue';
import ProjetCV from "@/components/ProjetCV.vue";
import CahierCharges from "@/components/CahierCharges.vue";
import EspaceComm from "@/components/EspaceComm.vue";

export default {
  props: {
    content: String,
  },

  setup() {
    // Utilisation de ref pour créer des variables réactives
    const isProjetCVVisible = ref(false);
    const isCahierChargesVisible = ref(false);
    const isEspaceCommVisible = ref(false);

    // Fonctions pour ouvrir et fermer chaque composant
    const openProjetCV = () => {
      isProjetCVVisible.value = true;
    };

    const openCahierCharges = () => {
      isCahierChargesVisible.value = true;
    };

    const openEspaceComm = () => {
      isEspaceCommVisible.value = true;
    };

    const closeProjetCV = () => {
      isProjetCVVisible.value = false;
    };

    const closeCahierCharges = () => {
      isCahierChargesVisible.value = false;
    };

    const closeEspaceComm = () => {
      isEspaceCommVisible.value = false;
    };

    return {
      isProjetCVVisible,
      isCahierChargesVisible,
      isEspaceCommVisible,
      openProjetCV,
      openCahierCharges,
      openEspaceComm,
      closeProjetCV,
      closeCahierCharges,
      closeEspaceComm,
    };
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
  background-color: #CBBEB3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-items: center;
  padding: 20px;
  box-sizing: border-box;
  
  }

  .button {
    
    border-radius: 50px;
    border: solid black 3px;
    cursor: pointer;
   
  }

</style>
