<template>
  <v-app id="inspire">
    <NavBar />
    <SiteContent />
    <Footer />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';
import SiteContent from './components/SiteContent';
import Footer from './components/Footer';

export default {
  components: {
    NavBar,
    SiteContent,
    Footer
  },
  props: {
    source: String,
  },
  created () {
    this.$vuetify.theme.dark = true
  },
}
</script>