
<template>
  <v-app id="inspire">
    <AppToolBar/>
    <v-content>
      <app-search-bar/>
      <v-layout row wrap>

        <v-flex xs12 sm12 md4 pa-3>
          <AppWonderCard :wonders="wonders[0]"/>
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
        wonders: [{
            "id": "WONDERS_1",
            "place": "Taj Mahal",
            "description": "The Taj Mahal meaning \"Crown of the Palace\") is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.",
            "imageURL": "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-taj-mahal.jpg.rend.hgtvcom.616.462.suffix/1491581548979.jpeg",
            "ratings": 3.5,
            "likes": 4
        }]
    })
  }
</script>