<template>
  <div class="modal">
    <div class="modal-content">
     <iframe src="/CAHIER DES CHARGES.pdf" width="800" height="560"></iframe>  
     <button @click="closeModal" class="button">Fermer</button>    
    </div>
  </div>
</template>

<script>


export default {
  
  methods: {
    closeModal() {
      this.$emit('close');
    },
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
  height: 565px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  height: 565px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>