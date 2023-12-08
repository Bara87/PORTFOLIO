<template>
  <div id="container">
    <HeaderComponent />
    <main>
      
      <router-view></router-view>
        
        <div id="presentation-section" class="section-container">
          <router-link to="/presentation" >
               <img src="/images/presentation1.jpg" alt="" class="img">              
          </router-link>
               <figcaption class="text">Présentation</figcaption>      
        </div>

        <div id="creations-section"  class="section-container">
          <router-link to="/creations">            
               <img src="/images/creations.jpeg" alt="" class="img">                            
          </router-link>
               <figcaption class="text">Créations</figcaption> 
        </div>

        <div  id="formulaire-section"  class="section-container">
          <router-link to="/formulaire">
               <img src="/images/contact.jpeg" alt="" class="img">               
          </router-link>
              <figcaption class="text">Contact</figcaption>
        </div>
      
    </main> 
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue"; // Assurez-vous que le chemin est correct
import FooterComponent from "@/components/FooterComponent.vue"

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  // ... autres options du composant
};


  
</script>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width:100%;
  height:560px;
  background-color: #6A00FF;
  
}

#presentation-section {
  
  width: 20%; 
  height: 70%;
  margin: 20px;
  padding: 20px;  
 
}
#creations-section {
  width: 20%; 
  height: 70%;  
}
#formulaire-section {
  width: 20%; 
  height: 70%;
  margin: 20px;
  padding: 20px;

}

.img {
  width: 100%; 
  height: 100%;
  object-fit: cover;
  
}
.text {
  text-align: center;
  color: rgba(255, 255, 255, 1);
  
  font-weight: bold;
  font-size: 20px;
}

h2 {
  position: absolute;
  margin-bottom: 0;
  text-align: center;
  
  font-size: 24px;
  /* Ajoutez d'autres styles si nécessaire */
}


.section-container:hover {
  transform: rotate(45deg) translateX(180px);
  transform: scale(1.3);
}

#container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
* {
  text-decoration: none;
 }


/* Ajoutez des styles supplémentaires au besoin */
</style>
