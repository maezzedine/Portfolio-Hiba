<template>
  <section id="home" class="home row m-0">
    <v-img contain class="d-sm-none col-10 mx-auto mt-10" src="portrait-main.png"></v-img>
    <v-col class="column col-12 col-sm-7">
      <div class="content">
        <div class="greetings text-h3 text-sm-h1">
          Hi! I Am <br /> <span class="name">Hiba Lubbad</span>
        </div>
        <div class="description text-sm-h5 ml-1 mt-5">
          Hot Data Scientist. AUB Graduate in Computer Science. Prospective homie in the University of BATH.
        </div>
        <a href="#contact"><v-btn class="mt-5 mt-sm-10 btn-info">More info</v-btn></a>
      </div>
    </v-col>
    <v-img contain class="d-none d-sm-block col-5" 
      src="portrait-main.png"
      lazy-src="portrait-main.png"
    ></v-img>
  </section>
</template>

<script>
  export default {
    name: 'Home',
  }
</script>

<style lang="scss" src="./Home.scss" scoped></style>
