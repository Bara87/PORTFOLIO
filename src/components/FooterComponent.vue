<template>
  <footer>
    <div id="footer">
        <div>
          <a href="https://www.linkedin.com/" target="_blank"><img  src="/images/linkedin.png" alt="linkedin" class="img"></a>
        </div>
        <div>
          <a href="https://twitter.com/?lang=fr" target="_blank"><img src="/images/twitter.png" alt="twitter" class="img"></a>
        </div>
        <div>
          <a href="https://github.com/Bara87" target="_blank"><img src="/images/github.png" alt="github" class="img"></a>
        </div>
    </div>
    <div id="date">
        <!-- Date de dernière mise à jour -->
        <p>Dernière mise à jour : {{ getCurrentDate() }}</p>
    </div>

    
  </footer>
</template>

<script>
export default {
  methods: {
    getCurrentDate() {
      const currentDate = new Date();
      return currentDate.toLocaleDateString();
    },
  },
};
</script>

<style scoped>
#footer {
  background-color: darkturquoise;
  width: 100%;
  height: 90px;  
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
}
</style>
