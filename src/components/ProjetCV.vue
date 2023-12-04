<template>
  <div class="modal">
    <div class="modal-content">
      <!-- Contenu de Modal 1 -->
      <h3>Créez votre CV en HTML et CSS</h3>
      <img src="/images/MaquetteCV.png" class="maquette"/>
      <h4>Les exigences du projet</h4>
      <ul>
        <li>Respecter le remplissage des liens d'en tete </li><br>
        <li>Mettre des liens pour les reseaux sociaux</li><br>
        <li>Entourer la photo de profil d'un lien vers l'image</li><br>
        <li>Respecter la hiérarchie des titres</li><br>
        <li>Utiliser des balises sémantiques dès que possible</li><br>
        <li>Réaliser des effets dynamiques</li><br>
        <li>Respecter les méta-informations de base</li><br>
        <li>Valider le code HTML et CSS à la W3C</li><br>
      </ul>
     
      <button @click="openMonCV"><h4>Cliquez ici pour voir MON CV</h4></button>
     
    
      
      <button @click="closeModal" class="button">Fermer</button>
    </div>
    <MonCV v-if="isMonCVVisible" @close="closeMonCV" />
  </div>
</template>

<script>
import MonCV from "@/components/MonCV.vue"

export default {

  props: {
    content: String,
  },

   data() {
    return {
      isMonCVVisible: false,
       };
        },

  methods: {
    closeModal() {
      this.$emit('close');
    },
    
    openMonCV() {
      this.isMonCVVisible = true;
    },
    

    closeMonCV() {
      this.isMonCVVisible = false;
    },
   
  },

  components: {
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
  height: 550px;
  position: relative;
}

.maquette {
  float: left; 
  margin-right: 20px;
  margin-left: 20px;
  width: 400px;
  height: 400px;
}

.button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>