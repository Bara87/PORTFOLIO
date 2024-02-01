<template> 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Voici la présentation de mon page d'accueil" />
    <link rel="icon" type="image/png" href="/images/img/logo.png">
    <link rel="stylesheet" href="./assets/styles.css">
    <title>Home Page</title>
</head>
<body>
    <div>
    <div class="container">     
        <header>
            <nav>
              <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">PRODUCTS</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">CONTACTS</a></li>
              </ul>
            </nav>
            <h1>My<span >Home</span>Space</h1>    
        </header>
        <main>                               
            <div class="main-image">
              <img src="/images/img/carousel-1.jpg" alt="Chambre">
            </div>
            <section id="presentation">
              <div class="presentation-view">               
                <h2>LAST WORKS</h2>                            
                <img src="/images/img/pic1.jpg" class="img123" alt="salon">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Donec pellentesque ligula a libero viverra, non consequat
                   velit dapibus. Ut ligula eros, lacinia nec sollicitudin id, 
                   varius non risus. Fusce iaculis sem in mi ullamcorper ultrices.
                   Donec tristique ac augue eleifend maximus.</p>      
                <a href="#" class="corner-link">+</a>
              </div>              
              <div class="presentation-view">                
                <h2>PRODUCTS</h2>                       
                <img src="/images/img/pic2.jpg" class="img123" alt="fauteuil">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Donec pellentesque ligula a libero viverra, non consequat
                  velit dapibus. Ut ligula eros, lacinia nec sollicitudin id, 
                  varius non risus. Fusce iaculis sem in mi ullamcorper ultrices.
                  Donec tristique ac augue eleifend maximus.</p>      
                <a href="#" class="corner-link">+</a>
              </div>      
              <div class="presentation-view">               
                <h2>SERVICE</h2>                              
                <img src="/images/img/pic3.jpg" class="img123" alt="Chambre">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Donec pellentesque ligula a libero viverra, non consequat
                  velit dapibus. Ut ligula eros, lacinia nec sollicitudin id, 
                  varius non risus. Fusce iaculis sem in mi ullamcorper ultrices.
                  Donec tristique ac augue eleifend maximus.</p>                
                <a href="#" class="corner-link">+</a>
              </div>
              <div class="presentation2">
                <h3>Tesimonials</h3>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec pellentesque
                  </li> 
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec pellentesque ligula a libero viverra, non consequat
                    velit dapibus. Ut ligula eros, lacinia nec sollicitudin id, 
                    varius non risus. Fusce iaculis sem in mi
                  </li> 
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec pellentesque ligula a libero viverra.
                  </li> 
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec pellentesque ligula a libero viverra, non consequat velit dapibus
                  </li> 
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec pellentesque ligula a libero viverra, non consequat velit dapibus
                  </li>      
                </ul>                
              </div>
              <div class="presentation2">
                <h3>Premium Services</h3>      
                <span class="Lorem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>     
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Donec pellentesque ligula a libero viverra, non consequat velit dapibus.
                  Ut ligula eros, lacinia nec sollicitudin id, varius non risus.
                </p>    
                <a href="#">Read More</a>
              </div>      
              <div class="presentation2">      
                <h3>About Us</h3>     
                <span class="Lorem">      
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>     
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Donec pellentesque ligula a libero viverra, non consequat velit dapibus.
                  Ut ligula eros, lacinia nec sollicitudin id, varius non risus.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>     
                <a href="#">Read More</a>    
              </div>      
            </section>      
        </main>
        <footer >
          <div class="footer">
              <span>Designed by Bara</span>
              <div class="socialmedia">
                <a href="https://www.facebook.com" target="_blank"><img src=" /images/img/facebook.jpeg"  alt="facebook"></a>
                <a href="https://www.twitter.com" target="_blank"><img src="/images/img/twitter.jpg"   alt="twitter"></a>
                <a href="https://www.google.com" target="_blank"><img  src="/images/img/google.jpeg"  alt="google"></a>
              </div>
          </div>
        </footer>
    </div>   
    </div>
</body>
</html>   
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


* {
    font-family: Helvetica, sans-serif;
}

*:hover {
    cursor: crosshair;
}

body {
    margin: 0;
    width: 100%;
    height: auto;
    background-image: url('/public/images/img/bg.jpg');
    background-size: cover;
    padding-bottom: 15px;
    z-index: 1;
}

.container{
    width: 90%;
    height: auto;
    background-color: #fff;
    margin-top: 5px; 
    margin-bottom: 3px; 
    margin-left: auto; 
    margin-right: auto;
    padding-top: 8px;
    padding-bottom: 10px;
}


nav {
   
    padding-right: 30px;
    padding-left: 50px;
}
nav ul {
    
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    
}
nav ul li a {
    
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);;
}
nav ul li {
    list-style-type: none;
}
nav a:active {
    background-color: #592A2E;
    color: #fff; 
    padding: 16px 20px;
}

h1 {
    margin-top: 100px;
    margin-bottom: 40px;    
    text-align: center;
    font-family: Helvetica, sans-serif;
    font-size: 70px;
    font-weight:500;
}

header span {
    color:#592A2E ;
    font-weight: bold;
}

.main-image {
    width: 100%;
    height: 400px;
    margin-bottom: 10px;    
}
.main-image img {
   
        width: 100%; 
        height: 100%; 
}
#presentation {
    display: flex;
    flex-wrap: wrap;
    
    
}
.presentation-view
{
    width: 30%;
    height: auto;
    margin: 11px;
    background-color: #736A62;
    display: flex;
    flex-direction: column;
    position: relative;
    
    
    
}

h2 {
    background-color: #592A2E;
    text-align: center;
    width: 100%;
    margin: 0;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding-top: 10px;
    padding-bottom: 10px;
    
}
.presentation-view p {
    color: #fff;
    padding: 3px 5px;
}
.img123
{
    width: 100%;
    object-fit: cover;
}
.presentation-view::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width:   50px 50px 0 0; /* Ajustez les valeurs pour définir la taille du triangle */
    border-color: transparent #592A2E ;
   
    
    
  }
  .corner-link {
    
    position: absolute;
    bottom: 5px;
    right: 5px;
    z-index: 1;
    font-size: 20px;
    text-decoration: none;
    color: #fff;

}
.presentation2 {
    width: 30%;
    height: auto;
    margin: 10px;
    
}
.presentation2 ul {
    margin: 0;
    padding:0; 
    list-style-type: none;
}
.presentation2 ul li {
    margin-bottom: 10px;
}
.presentation2 li::before {
    content: ">";
    margin-right: 0.5em; 
    color: #592A2E;
    font-weight: bold;

}
.presentation2 h3 {
    color: rgba(0, 0, 0, 0.4);;
}

.Lorem {
    color: #592A2E;
    font-weight: bold;
    
}
.presentation2 p{
    margin-bottom: 30px;
}
.presentation2 a{
    background-color: #534E48;
    padding: 8px 16px;
    color: #fff;
    text-decoration: none;
    
}
.footer {
    margin-top: 60px;
    margin-bottom: 20px;
    padding-top: 40px;
    border-top: #6E655E solid 3px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    
}
.footer span {
    color: rgba(0, 0, 0, 0.7);
    font-weight: 900px;
    margin-left: 15px;
}
.socialmedia {
    width: 100px;
    height: 40px;   
    display: flex;
    flex-direction: row;
    justify-content: space-around;
   
     }
.socialmedia img {
        width: 80%;
        height: 70%;
        
    }

</style>