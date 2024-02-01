<template>
  <div>
    <h2>Créations{{ $route.params.id }}</h2>
     <p>Je vous présente les 3 projets que j'ai déjà réalisés auparavant dans le cadre de cette formation.</p>
     <button @click="openModal('MonCV')" class="button"><h3>Créez votre CV en HTML et CSS</h3></button>
     <button @click="openModal('CahierCharges')" class="button"><h3>Rédiger un cahier des charges</h3></button>
     <button @click="openModal('EspaceComm')" class="button"><h3>Dynamiser un espace commentaire avec JavaScript</h3></button>
     <button @click="openModal('IntegrationWeb')" class="button"><h3>Integration Web</h3></button>
     <Modal :visible="isModalOpen" @close="closeModal" :showOverlay="true">
      <component :is="currentModalComponent" />
    </Modal>
  </div>
</template>

<script>
import { ref } from 'vue';
import Modal from "@/components/ModalComponent.vue";
import MonCV from "@/components/MonCV.vue";
import CahierCharges from "@/components/CahierCharges.vue";
import EspaceComm from "@/components/EspaceComm.vue";
import IntegrationWeb from "@/components/IntegrationWeb.vue";

export default {
  setup() {
    const isModalOpen = ref(false);
    const currentModalComponent = ref(null);

    const openModal = (componentName) => {
      currentModalComponent.value = componentName;
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

 
    return {
      isModalOpen,
      currentModalComponent,
      openModal,
      closeModal
    };
  },
  components: {
    Modal,
    MonCV,
    CahierCharges,
    EspaceComm,
    IntegrationWeb,
  },
};
</script>

<style scoped>

div {
  width: 100%;
  height: 100%;
  background-color: rgba(236, 238, 244, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-items: center;
  padding: 20px;
  border: solid black 1px;
  box-sizing: border-box;
}

h2 {
  text-align: center;
}

.button {
  border-radius: 50px;
  border: solid black 1px;
  cursor: pointer;
  background: rgb(150, 173, 242, 0.7);
}
</style>