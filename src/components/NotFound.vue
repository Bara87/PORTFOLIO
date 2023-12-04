<template>

  <div v-if="is404">
    <h1>404 Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    
  </div>

</template>

<script>
export default {
  computed: {
    is404() {
      return this.$route.meta.is404 === true;
    },
  },
};
</script>

<style scoped>
/* Ajoutez vos styles CSS si nécessaire */
</style>