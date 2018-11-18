
<template>
  <v-app id="inspire">
    <AppToolBar/>
    <v-content>
      <app-search-bar @search="search"/>
      <v-layout row wrap>
        <v-flex xs12 sm12 md4 pa-3 v-for="wonder in dataWonders" :key="wonder.id">
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
    data: () => ({
       dataWonders: []
    }),
    computed: {
      wonders(){
          return this.$store.getters.getWonders
      }
    },
    watch: {
      wonders(){
          this.dataWonders = this.wonders
      }
    },
    methods: {
      search(event){
          let data = this.$store.state.wonders.filter(function (wonder) {
              let place = wonder.place.toLowerCase()
              return place.search(event.toLowerCase()) >= 0;
          })

          this.dataWonders = data

      }
    },
    mounted(){
        this.$store.dispatch("fetchWonders");
    }
  }
</script>