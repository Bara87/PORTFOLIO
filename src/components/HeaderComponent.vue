<template>
  <header>
      
    <router-link to="/main" class="background-link">
    <div> 
   
    <h1> My Portfolio</h1>
    </div>
    </router-link>
  </header>
</template>

<script>

</script>
<style scoped>

div {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;  
   
  margin-bottom: 30px;
 
  }

h1 {
  transform: scaleY(2) scaleX(7);
  color: rgb(0, 0, 0, 0.5);
  font-weight: 600;
  border: solid 0.4px black;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
  background-color: white;
}

.background-link {
  text-decoration: none; 
  color: inherit; 
  cursor: pointer; 
}
</style>