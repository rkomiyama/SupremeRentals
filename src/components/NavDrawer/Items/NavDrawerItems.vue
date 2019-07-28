<template>
  <v-list
    dense
    expand
    nav
  >
    <InventoryListItem />
    <AboutListItem />
    <ThemeListGroup />
  </v-list>
</template>

<script>
import InventoryListItem from './InventoryListItem'
import AboutListItem from './AboutListItem'
import ThemeListGroup from './ThemeListGroup'

export default {
  name: 'NavDrawerItems',
  components: {
    InventoryListItem,
    AboutListItem,
    ThemeListGroup
  }
}
</script>
