<template>
  <v-toolbar-title class="headline text-uppercase py-2 hidden-sm-and-up">
    <v-flex class="d-flex align-center">
      <v-img
        :src="require('@/assets/logo.svg')"
        height="36px"
        max-width="36px"
      />
      <span>SUPREME&nbsp;</span>
      <span class="font-weight-light">Rentals</span>
    </v-flex>
  </v-toolbar-title>
</template>

<script>
export default {
  name: 'NavDrawerTitle'
}
</script>
