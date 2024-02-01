<template>      

      <h4>Dynamiser un espace commentaire</h4>
      <p>Pour ce projet le but consiste à pourvoir manipuler le DOM via Javascript avec pour objectif:
      <br>- De pourvoir ajouter un nouveau commentaire et l'afficher 
      <br>- Faire apparaitre un message d'erreurs au cas ou l'un des champs du formulaire n'est pas repmli.
      <br>- De vider les champ du formulaire une fois que le commentaire ait été ajouté
      </p>
      <br>
      <img src="/images/Image 03-12-2023 à 18.24.jpg" class="screen">
      <p>Je vous invite à cliquer sur le lien en dessous pour visiter le repository Github du projet</p>
      <a href="https://github.com/Bara87/Dynamiser-un-espace-commentaire" target="_blank"><h5>Repository Github</h5></a> 
  
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
/* Styles pour votre modal, par exemple, pour le rendre centré */


.screen {
  width: 300px;
  height: 300px;
}

</style>