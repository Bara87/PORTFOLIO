<template>
  <div id="container">
    <HeaderComponent />
    <main>      
      <router-view></router-view>        
        <div id="presentation-section" class="section-container">
          <router-link to="/presentation" >
            <img src="/images/presentation1.jpg" alt="Logo à cliquer pour accéder à ma presentation" >              
          </router-link>
            <figcaption class="text">Présentation</figcaption>      
        </div>
        <div id="creations-section"  class="section-container">
          <router-link to="/creations">            
            <img src="/images/creations.jpeg" alt="Logo à cliquer pour accéder à mes créations" >                            
          </router-link>
            <figcaption class="text">Créations</figcaption> 
        </div>
        <div  id="formulaire-section"  class="section-container">
          <router-link to="/formulaire">
            <img src="/images/contact.jpeg" alt="Logo à cliquer pour accéder au formulaire de contact" >               
          </router-link>
            <figcaption class="text">Contact</figcaption>
        </div>      
    </main> 
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue"


export default {
  components: {
    HeaderComponent,
    FooterComponent,
    
  },
 
};
</script>

<style scoped>

#app {
  width: 100%;
  height:auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
 
}

main {
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width:90%;
  height:580px;
  background: rgb(0, 0, 255, 0.3)  
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

img {
  width: 100%; 
  height: 100%;
  object-fit: cover;
  border: solid black 1px;  
}

.text {
  text-align: center;
  color: rgb(0, 0, 0, 0.5);
  font-weight: bold;
  font-size: 20px;
}

h2 {
  position: absolute;
  margin-bottom: 0;
  text-align: center; 
  font-size: 24px;  
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
  background-color: #09f36a;
  padding-bottom: 10px;
  padding-top: 10px;
}

* {
  text-decoration: none;
 }

</style>
