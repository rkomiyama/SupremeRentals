<template>
  <v-list
    dense
    expand
    nav
  >
    <HomeListItem />
    <InventoryListItem />
    <AboutListItem />
    <ThemeListGroup />
  </v-list>
</template>

<script>
import HomeListItem from './HomeListItem'
import InventoryListItem from './InventoryListItem'
import AboutListItem from './AboutListItem'
import ThemeListGroup from './ThemeListGroup'

export default {
  name: 'NavDrawerItems',
  components: {
    HomeListItem,
    InventoryListItem,
    AboutListItem,
    ThemeListGroup
  }
}
</script>
