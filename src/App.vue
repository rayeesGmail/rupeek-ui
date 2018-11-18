
<template>
  <v-app id="inspire">
    <AppToolBar/>
    <v-content>
      <app-search-bar @search="search"/>
      <v-container fluid v-if="isLoading || isError">
        <v-layout
                justify-center
                align-center
        >
          <v-flex text-xs-center>
            <v-progress-circular
                    indeterminate
                    color="red"
                    v-if="isLoading"
            ></v-progress-circular>
            <h4 v-if="isError">Something Went Wrong...</h4>
          </v-flex>
        </v-layout>
      </v-container>
      <v-layout row wrap v-if="!isLoading">
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
      },
      isLoading(){
          return this.$store.getters.getIsLoading
      },
      isError(){
          return this.$store.getters.getIsError
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