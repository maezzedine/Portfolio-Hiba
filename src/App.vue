<template>
  <v-app>
      <app-bar />
      <div id="mainn" class="main-window">
        <v-main>
          <home />
          <education />
          <experience />
          <projects />
          <skills />
          <activities />
          <contact />
        </v-main>
      </div>  
      <app-footer />
  </v-app>
</template>

<script>
import appBar from './components/app-bar.vue'
import Home from './views/Home/Home.vue'
import Education from './views/Education/Education.vue'
import Experience from './views/Experience/Experience.vue'
import Activities from './views/Activities/Activities.vue'
import Projects from './views/Projects/Projects.vue'
import Skills from './views/Skills/Skills.vue'
import Contact from './views/Contact/Contact.vue'
import appFooter from './components/app-footer.vue'

export default {
  name: 'App',
  components: {
    appBar, Home, Education, Experience, Activities, Projects, Skills, Contact, appFooter
  },
  created() {
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll() {
      var sections = document.getElementsByTagName('section');
      for (var section of sections) {
        var diff = section.offsetTop - window.pageYOffset;
        if (diff > 0 && diff < screen.height) {

          if (section.id && this.$route.hash != `#${section.id}`) {
            this.$router.push({ hash: section.id });
          }
          break;
        }
      }
    }
  }
 
};
</script>

<style lang="scss" src='./App.scss'></style>