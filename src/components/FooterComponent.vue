<template>
  <footer>
    <div id="socialmedia">    
      <a href="https://www.linkedin.com/" target="_blank"><img  src="/images/linkedin.png" alt="linkedin" class="img"></a>         
      <a href="https://twitter.com/?lang=fr" target="_blank"><img src="/images/twitter.png" alt="twitter" class="img"></a>     
      <a href="https://github.com/Bara87" target="_blank"><img src="/images/github.png" alt="github" class="img"></a>     
    </div>
    <p>Dernière mise à jour : {{ getCurrentDate() }}</p>   
  </footer>
</template>

<script>


export default {
  setup() {
    const getCurrentDate = () => {
      const currentDate = new Date();
      return currentDate.toLocaleDateString();
    };

    return {
      getCurrentDate,
    };
  },
};
</script>

<style scoped>

footer{
  margin: auto;
  width: 90%;
  height:auto;
  padding-bottom: 10px; 
  background-color: white;
  margin-top: 2px;
}

#socialmedia {
  width: 100%;
  height: 60px;  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
 
  
}
#date {
  width: 100%;
  height: 15px;
}
.img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
}
.img:hover {
    opacity: 0.5;
}


p {
  text-align: center;
  color: rgb(0, 0, 0, 0.5);
  font-weight: bold;
}
</style>
