<template>
  <v-layout fill-height>
    <NavDrawer
      v-model="drawer"
      @input:drawer="drawer = $event"
    />
    <AppBar
      @click:drawer="drawer = !drawer"
    />
    <router-view />
    <Footer />
  </v-layout>
</template>

<script>
import NavDrawer from '@/components/NavDrawer/NavDrawer'
import AppBar from '@/components/AppBar'
import Footer from '@/components/Footer'

export default {
  name: 'MainSiteContainer',
  data () {
    return {
      drawer: null
    }
  },
  components: {
    NavDrawer,
    AppBar,
    Footer
  }
};
</script>
