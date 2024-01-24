<template>
  <div v-if="isModalVisible" class="modal">
    <div class="modal-content">
      <component :is="currentComponent" @close="closeModal" />
    </div>
  </div>
   
</template>

<script>
import { ref } from 'vue';

import ProjetCV from "@/components/ProjetCV.vue";
import CahierCharges from "@/components/CahierCharges.vue";
import EspaceComm from "@/components/EspaceComm.vue";
import MonCV from "@/components/MonCV.vue";


export default {
  setup() {
    const isModalVisible = ref(false);
    const currentComponent = ref(null);

    const openModal = (component) => {
      currentComponent.value = component;
      isModalVisible.value = true;
    };

  

    return {
      isModalVisible,
      currentComponent,
      openModal,
      
    };
  },
  components: {
    ProjetCV,
    CahierCharges,
    EspaceComm,
    MonCV,
  },
};
</script>

<style scoped>
/* Styles pour votre modal, par exemple, pour le rendre centré */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 800px;
  width: 100%;
  position: relative;
}
</style>