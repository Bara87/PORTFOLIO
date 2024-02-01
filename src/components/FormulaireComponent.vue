<template>
  <div id="contact">
    <h2>Formulaire{{ $route.params.id }}</h2>

    <form @submit.prevent="envoyerFormulaire" class="form" method="POST">
      <label for="nom">Nom :</label>
      <input v-model="nom" type="text" id="nom" name="nom" class="contact" required >

      <label for="prenom">Prénom :</label>
      <input v-model="prenom" type="text" id="prenom" name="prenom" class="contact" required>

      <label for="objet">Objet :</label>
      <input v-model="objet" type="text" id="objet" name="objet" class="contact" required>

      <label for="message">Message :</label>
      <textarea v-model="message" id="message" name="message" required></textarea>

      <button type="submit" id="button">Envoyer</button>
    </form>
    
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    // Utilisation de ref pour créer des variables réactives
    const nom = ref('');
    const prenom = ref('');
    const objet = ref('');
    const message = ref('');

    // Fonction pour envoyer le formulaire
    const envoyerFormulaire = () => {
      // Récupérer les données du formulaire
      const formData = {
        nom: nom.value,
        prenom: prenom.value,
        objet: objet.value,
        message: message.value
      };

      // Envoyer une requête POST au serveur Node.js
      fetch('http://localhost:3000/envoyer-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          // Faire quelque chose avec la réponse du serveur
          console.log('Réponse du serveur :', data);

          // Afficher un message de confirmation à l'utilisateur
          alert('Formulaire envoyé avec succès !');

          // Effacer les champs du formulaire
          nom.value = '';
          prenom.value = '';
          objet.value = '';
          message.value = '';
        })
        .catch(error => {
          console.error('Erreur lors de l\'envoi de la requête :', error);
        });
    };

    // Retourner les variables réactives et la fonction envoyerFormulaire
    return {
      nom,
      prenom,
      objet,
      message,
      envoyerFormulaire,
    };
  },
};
</script>
<style scoped>
#contact {
  width: 100%;
  height: 100%;
  background-color: rgba(236, 238, 244, 1);
  padding: 0 20px 10px 20px;
  border: solid black 2px;
  box-sizing: border-box;

  }

  .form {
  display: flex;
  flex-direction: column;
  gap: 10px; 
  position: relative;
}

.contact {
  width: 30%;
  padding: 8px; 
  box-sizing: border-box; 
}
#message {
  width: 80%;
  height: 200px;
}
#button {  
  position: absolute;
  width: 100px;
  bottom: -40px;
  cursor: pointer;

}

</style>
