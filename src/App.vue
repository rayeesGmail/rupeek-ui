
<template>
  <v-app id="inspire">
    <AppToolBar/>
    <v-content>
      <app-search-bar/>
      <v-layout row wrap>
        <v-flex xs12 sm12 md4 pa-3 v-for="wonder in wonders" :key="wonder.id">
          <AppWonderCard :wonders="wonder"/>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
    import AppToolBar from './components/ToolBar'
    import AppSearchBar from './components/SearchBar'
    import AppWonderCard from './components/WonderCard'

    export default {
    components: {
        AppToolBar,
        AppSearchBar,
        AppWonderCard
    },
    computed: {
      wonders(){
          return this.$store.getters.getWonders
      }
    },
    mounted(){
        this.$store.dispatch("fetchWonders");
    }
  }
</script>