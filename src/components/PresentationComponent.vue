<template>
  <div id="presentation" >
    <h2>Who am I ? {{ $route.params.id }}</h2>
    <img src="/images/Bara.jpeg" id="img" />
    <p>Je m'appelle Bara DIA, je suis actuellement une formation en ligne 
      <br>en developpeur web et web mobile full stack, délivrée par 
      le CEF(Centre Européenne de Formation). C'est dans le cadre de 
      cette formation que je dois réaliser ce projet de PORTFOLIO ou vous aurez
      la possiblité mes chèrs visiteurs de pouvoir voir mes premières réalisations 
      en tant que nouveau développeur. Cette formation complet et progressif, 
      incluant les technologies prisées par les recruteurs, le tout débouchant sur le Titre Professionnel
      Développeur Web et Web Mobile(DWWM – RNCP37674) de niveau 5 (équivalent à un Bac+2). 
      Je suis détenteur d’un DUT en Génie Mécanique et Productique mais, ces dernières années 
      j’ai travaillé en hôtellerie au poste de réceptionniste. J’ai choisi de me spécialiser 
      dans ce nouveau métier après avoir étudié et analysé l’évolution du marché du travail 
      et les métiers d’avenirs. Ce qui m’a le plus attiré dans ce metier de développeur,
      c’est le fait qu’il soit un domaine évolutif, créatif avec toujours de nouveautés à découvrir.
      J’ai un esprit curieux et créatif, avec une bonne maitrise de la programmation,
      j’aurais toutes mes chances de faire mes preuves dans ce métier et de relever de nouveaux défis
        </p>
    
  </div>
</template>

<script> 
import { ref } from 'vue';

export default {
 
  setup(props) {

    const content = ref(props.content);



    return {
      content,
    
    };
  },
};
</script>
<style scoped>
#presentation {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: rgba(236, 238, 244, 1);
  border: 1px solid #000; 
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
 
   }

  #img {
    float: left; 
    margin-right: 20px;
    margin-left: 20px;
    width: 250px;
    height:200px;
  }
 
  p {
    text-align: justify;
    line-height: 32px;
  }
</style>








