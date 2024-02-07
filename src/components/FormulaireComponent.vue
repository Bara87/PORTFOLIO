
<template>
  <div id="contact">
    <h2>Formulaire{{ $route.params.id }}</h2>

    <form  @submit.prevent="envoyerEmail" class="form" method="POST">
      <label for="nom">Nom :</label>
      <input v-model="nom" type="text" id="nom" name="nom" class="contact" required >

      <label for="prenom">Prénom :</label>
      <input v-model="prenom" type="text" id="prenom" name="prenom" class="contact" required>

       <label for="email">Email:</label>
      <input v-model="email" type="email" id="email" required>

      <label for="objet">Objet :</label>
      <input v-model="objet" npmtype="text" id="objet" name="objet" class="contact" required>

      <label for="message">Message :</label>
      <textarea v-model="message" id="message" name="message" required></textarea>

      <button type="submit" id="button">Envoyer</button>
    </form>
    
  </div>
</template>
<script>
import { ref } from 'vue';
import emailjs from 'emailjs-com';

export default {
  setup() {
    
    const nom = ref('');
    const prenom = ref('');
    const email = ref('');
    const objet = ref('');
    const message = ref('');

   
    emailjs.init('uLX1cMy2oeCpTjg5h');

    // Méthode pour envoyer l'e-mail
    const envoyerEmail = () => {
      const templateParams = {
        to_name: nom.value + ' ' + prenom.value,
        from_name: email.value,
        objet: objet.value,
        message: `You got a new message from ${nom.value} ${prenom.value}:(${email.value})\n\nRegarding: ${objet.value}:\n\nMessage :${message.value}\n\nBest wishes,\nEmailJS tea.`,
      };

      emailjs.send('service_2om1oho', 'template_w9596xg', templateParams)
        .then((response) => {
          console.log('E-mail envoyé avec succès :', response);

          
          nom.value = '';
          prenom.value = '';
          email.value = '';
          objet.value = '';
          message.value = '';
        })
        .catch((error) => {
          console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        });
    };

    
    return {
      nom,
      prenom,
      email,
      objet,
      message,
      envoyerEmail,
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
#email {
  width: 40%;
  height: 20px;
}
#message {
  width: 80%;
  height: 120px;
}
#button {  
  position: absolute;
  width: 100px;
  bottom: -40px;
  cursor: pointer;

}

</style>
