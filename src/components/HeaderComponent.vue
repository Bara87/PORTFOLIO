<template>
  <header>
    <router-link to="/main" class="background-link">
    <div>      
      <h1><a>Présentation</a></h1>
      <h1><a>Créations</a></h1>
      <h1><a>Contact</a></h1>
    </div>
    </router-link>
  </header>
</template>

<script>

</script>
<style scoped>

div {
  
  height: 80px;
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: space-around;
  background-image: url("/public/images/logo.jpeg");
  background-size: 100px 100px;
  
  background-repeat: repeat;
}
.header a {
  text-decoration: none;
  font-weight: 100px;
}
 * {
  text-decoration: none;
 }

</style>