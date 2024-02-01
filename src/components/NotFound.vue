<template>
  <div>
    <h1 v-if="is404">404 - Page Not Found</h1>
    <p v-if="is404">La page que vous recherchez n'existe pas.</p>
    <!-- Autres éléments de la page NotFound ici -->
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'NotFound',
  setup() {
    const route = useRoute();
    const is404 = ref(false);

    // OnMounted pour accéder à la route une fois le composant monté
    onMounted(() => {
      is404.value = route.meta.is404 || false;
    });

    // Utilisation de computed pour obtenir la valeur réactive
    const is404Computed = computed(() => is404.value);

    return {
      is404: is404Computed,
    };
  },
};
</script>