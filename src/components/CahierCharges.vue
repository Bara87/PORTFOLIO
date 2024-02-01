<template>
     
     <iframe src="/CAHIER DES CHARGES.pdf" width="95%" height="560" margin="auto"></iframe> 
    

</template>
<script>
import { getCurrentInstance } from 'vue';

export default {
  setup() {
    const { emit } = getCurrentInstance();

    const closeModal = () => {
      emit('close');
    };

    return {
      closeModal,
    };
  },
};
</script>


<style scoped>
div {
  margin: auto;
  width: 95%;

}

</style>