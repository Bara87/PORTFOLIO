<template>
  <div v-if="visible" class="modal-container">
    <div v-if="showOverlay" class="overlay" @click="closeModal"></div>
    <div class="modal">
      <span class="close" @click="closeModal">&times;</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean,
    showOverlay: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
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
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
}

.modal {
  background: rgb(143, 144, 142);
  padding: 15px;
  border-radius: 10px;
  position: fixed;
  width: 80%; 
  max-width: 800px; 
  height: auto;
  max-height: 80vh;
  overflow-y: auto; 
  box-sizing: border-box;
}

.close {
  position: absolute;
  top:0;
  right: 10px;
  cursor: pointer;
  color: red;
  font-size: 30px;
  font-weight: bold;
  padding: 5px;
}
</style>