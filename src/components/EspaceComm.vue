<template>      
<div class="modal" >
  
  <div class="modal-content"> 
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
  height: 560px;
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
  height: 560px;
  display: flex;
  flex-direction: column;
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
.screen {
  width: 300px;
  height: 300px;
}

</style>