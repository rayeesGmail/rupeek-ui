
<template>
  <v-app id="inspire">
    <AppToolBar/>
    <v-content>
      <app-search-bar/>
    </v-content>
  </v-app>
</template>

<script>
    import AppToolBar from './components/ToolBar'
    import AppSearchBar from './components/SearchBar'

    export default {
      components: {
          AppToolBar,
          AppSearchBar
      }

    }
</script>