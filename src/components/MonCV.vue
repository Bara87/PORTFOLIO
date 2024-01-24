
<template>

 <div class="modal">
  
    <div class="modal-content"> 
<head>
  <meta name="charset" content="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
  <meta name="description" content="CV Développeur Web Junior"/>
  <meta name="keywords" content="HTML5, CSS3, GitHub"/>
  <meta name="robots" content="index, follow"/>
  <title>Mon CV</title>
  <link href="css/style.css" rel="stylesheet" />
</head>
<body>
   
    
        <div id="cv-container">
            <header>
                <figure>
                    <img src="/images/Bara.jpeg" id="photo"/>
                </figure>
                <h1>bara dia</h1>
                <h2>Développeur Web Junior</h2>
                <section id="contacts">                     
                        <div>
                          <a href="https://www.google.com/maps/place/36+Rue+du+Faubourg+Saint-Martin,+75010+Paris/@48.8702822,2.3539707,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e11e3b0ae4f:0x9e9dcfe5e6faa0a!8m2!3d48.8702822!4d2.3565456!16s%2Fg%2F11c43_2cp7?entry=ttu" target="_blank" style="color: white;">36 Rue du Faubourg Saint-Martin<br>75010 Paris</a>  
                        </div>
                        <div>
                          <a href="mailto:bara-2010@hotmail.fr" target="_blank" style="color: white;">bara-2010@hotmail.fr</a>
                        </div>
                        <div>
                          <a href="tel:0765814548" target="_blank" style="color: white;" >0765814548</a>
                        </div>                     
                </section>               
            </header> 
            <main>              
                <section id="main">
                    <section id="BLOC1">
                      <div class="bloc1">
                        <h3>A propos</h3>
                          <em style="color: white;">
                            Développeur web full-stack polyvalent, créatif avec une bonne maîtrise 
                            de la programmation et les langages informatiques comme Java, PHP, CSS, HTML, etc.
                          </em>
                         
                      </div>
                      <div class="bloc1">
                        <h3>Langues parlées</h3>
                          <ul style="color: white;">
                            <li>Anglais-Bon niveau</li>                            
                            <li>Français-Bon niveau</li>                             
                          </ul>
                      </div>
                      <div class="bloc1">
                        <h3>Centre d'intérêt</h3>
                          <ul style="color: white;">
                            <li>Fitness</li>
                            <li>Lecture</li>
                            <li>Bénévolat</li>                            
                          </ul>
                      </div>
                    </section>                 
                    <div id="BLOC2">
                      <div id="bloc2">
                        <h4>Expériences professionelles</h4>
                            <h5>Receptionniste Hotel Saint Petersbourg Paris</h5>
                               <p>Du Avril 2022 au Septembre 2023</p>
                                  <ul>
                                      <li>Gestion des arrivées et départs</li>
                                      <li>Gestion des Arrhes et des commissions</li>
                                      <li>Encaissement des règlements par carte ou par espèce</li>
                                      <li>Suivi du Standard Téléphonique, traitement des emails, saisie et gestion des réservations</li>
                                  </ul>
                            <h5>Receptionniste Quality Hotel&Suites Bercy Bibliotheque</h5>
                               <p>Du Janvier 2017 au Fevrier 2022</p>
                                  <ul>
                                      <li>Gestion des arrivées et départs</li>
                                      <li>Gestion des Arrhes et des commissions</li>
                                      <li>Encaissement des règlements par carte ou par espèce</li>
                                      <li>Suivi du Standard Téléphonique, traitement des emails, saisie et gestion des réservations</li>
                                 </ul>
                            <h5>Equipier polyvalent - McDonalds, 33400 Talence (Bordeaux)</h5>   
                               <p>Du Novembre 2013 au Novembre 2016</p>
                                 <ul>
                                      <li>Préparation de commande</li>
                                      <li>Nettoyage de la cuisine, respect des normes HACCP</li>
                                 </ul>
                        <h4>Formations</h4>
                            <h5>Formation Prévention et secours civique de niveau</h5>
                               <p>2019 / Ecole Hotelière</p>
                            <h5>Formation Aide cuisinier</h5>
                               <p>2012 / Pole Emploi</p>
                        <h4>Diplomes</h4>
                            <h5>Diplome DUT en Génie Mécanique Bac +2</h5>
                               <p>2007 - 2009 / IUT de l'Aisne</p> 
                        <h4>Compétences</h4>
                                 <ul>
                                      <li>HTML5 - Expert</li>
                                      <li>CSS3 - Intermédiaire</li>
                                      <li>GitHub - Débutant</li>
                                      <li>Compétences Relationnelles</li>   
                                      <li>Dessinateur Projeteur - Intermédiaire</li>
                                 </ul>
                      </div>
                    </div>
                </section>
            </main> 
            <footer>
                <section id="footer">
                   <div>
                      <a href="https://www.linkedin.com/" target="_blank"><img  src="/images/linkedin.png" alt="linkedin" class="img"></a>
                   </div>
                   <div>
                      <a href="https://twitter.com/?lang=fr" target="_blank"><img src="/images/twitter.png" alt="twitter" class="img"></a>
                   </div>
                   <div>
                      <a href="https://github.com/Bara87" target="_blank"><img src="/images/github.png" alt="github" class="img"></a>
                   </div>
                </section>
                <section id="date">
                     <p>Dernière mise à jour le <time datetime="2022-08-10">10 Aout 2022</time></p>
                </section>
            </footer>       
        </div>
    
   
</body>
<button @click="closeModal" class="button">Fermer</button>  
 </div> 
  
  </div > 

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
}
</script>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital@1&family=Raleway:wght@400;700&display=swap');

* {
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
    text-decoration: none;
    font-size: 15px;
}
*:hover {
    cursor: crosshair;
}
.modal {
    position: absolute;
    width: 100%;
    height: 590px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -10px;
    
    
    
}
.modal-content
{
    width: 100%;
    height: 580px;
    overflow: auto;
    background-color: aqua;
    display: flex;
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

#cv-container {
    width: 950px;
    height: 1600px;
    background-color: #782221;
    margin: auto;
    padding-top: 40px;
    

}

figure {
    width: 150px;
    height: 150px;
    margin: 0 auto;
}

#photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0 30px darkblue;
}

#photo:hover {
    font-size:1.6em;
    cursor: zoom-in;
}
#photo:active {
    transform: scale(2);
    transition: 1s;
     
}

h1 {
    text-align: center;
    font-family: "Lato", sans-serif;
    text-transform: uppercase;
}
h2 {
    text-align: center;
    font-family: "Lato", sans-serif;
}

  #contacts {
  display: flex;
  flex-direction:row;
  align-items: center;
  height: 60px;
  justify-content: space-around;
  background-color:#2c1d27 ;
  
 
 }


 #BLOC1 {
    display: flex;
    flex-direction: column;
    width: 250px;
    margin-top: 30px;
    
 }
.bloc1 {
    margin-left: 10px;

}
 
#BLOC2 {
    height: 1150px;
    
    background-color: white;
    border-right: #2c1d27 solid;
    display: flex;
    flex-direction: column;
}
 #main {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    
 }
 h3 {
    background-color: #dbc2a4;
    font-family: "Lato", sans-serif;
}

#bloc2 {
    margin: 10px;
}

h4 {
    background-color: #dbc2a4;
    border-left: #782221 5px solid; 
    font-family: "Lato", sans-serif;      
}

h5 {
    font-family: "Lato", sans-serif;
}
h5:hover {
    border-right: 3px solid blue;
}

.img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
}
.img:hover {
    opacity: 0.5;
}
#footer {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 15px;
    margin-bottom: 20px;
}
#date {
    text-align: center;
}

a:hover{
    text-decoration: underline blue;
}

</style>