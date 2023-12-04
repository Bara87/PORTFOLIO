<template>
  <div id="contact">
    <h2>Formulaire{{ $route.params.id }}</h2>

    <form @submit.prevent="envoyerFormulaire" class="form">
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
export default {
  data() {
    return {
      nom: '',
      prenom: '',
      objet: '',
      message: ''
    };
  },
  methods: {
    envoyerFormulaire() {
      // Récupérer les données du formulaire
      const formData = {
        nom: this.nom,
        prenom: this.prenom,
        objet: this.objet,
        message: this.message
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
          this.nom = '';
          this.prenom = '';
          this.objet = '';
          this.message = '';
        })
        .catch(error => {
          console.error('Erreur lors de l\'envoi de la requête :', error);
        });
    }
  }
};
</script>

<style scoped>
#contact {
  width: 100%;
  height: 100%;
  background-color:white;  }

  .form {
  display: flex;
  flex-direction: column;
  gap: 10px; /* Espacement entre les éléments */
  position: relative;
}

.contact {
  width: 30%; /* La largeur peut être ajustée en fonction de vos besoins */
  padding: 8px; /* Ajustez le rembourrage selon vos préférences */
  box-sizing: border-box; /* Pour inclure le rembourrage dans la largeur totale */
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
