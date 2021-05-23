<template>
  <v-app-bar
    id="appbar"
    color="transparent"
    elevation="0"
    fixed
    elevate-on-scroll
    scroll-target="#mainn"
  >

    <v-toolbar-title class="d-none d-lg-block"><a href="#home">Hiba Lubbad's Portfolio</a></v-toolbar-title>
    <v-spacer class="d-none d-md-block"></v-spacer>

    <v-tabs 
      light
      right
      show-arrows
      class="mr-15 d-none d-md-block"
      color="rgb(230, 145, 19)"
    >
      <v-tab v-for="tab in tabs" :key="tab.id">
        <a :href="tab.link">{{tab.title}}</a>
      </v-tab>
    </v-tabs>

    <v-row class="bar-row ma-0">
      <v-menu
        class="d-block d-md-none"
        rounded
        offset-y
      >
        <template v-slot:activator="{ attrs, on }">
          <v-btn
            class="btn-pages d-block d-md-none"
            v-bind="attrs"
            v-on="on"
          >
            Pages
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="tab in tabs"
            :key="tab.id"
          >
            <v-list-item-title>
              <a :href="tab.link">{{tab.title}}</a>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <a href="#contact"><v-btn class="btn-contact">Contact Me</v-btn></a>
    </v-row>
  </v-app-bar>
</template>

<script>
$(window).scroll(function() {
  var offset = $(window).scrollTop();
  $('#appbar').toggleClass('blurry', offset > 50);
});

export default {
  name: 'AppBar',
  data: () => ({
    tabs: [
      { id: 1, title: 'Education', link: '#education'},
      { id: 2, title: 'Experience', link: '#experience'},
      { id: 3, title: 'Projects', link: '#projects'},
      { id: 4, title: 'Skills', link: '#skills'},
      { id: 5, title: 'Extracurricular Activities', link: '#activities'},
    ]
  }),
};
</script>

<style lang="scss" src="./app-bar.scss" scoped></style>