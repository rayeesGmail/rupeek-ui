import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      "data": [
          {
              "id": "WONDERS_1",
              "place": "Taj Mahal",
              "description": "The Taj Mahal meaning \"Crown of the Palace\") is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.",
              "imageURL": "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-taj-mahal.jpg.rend.hgtvcom.616.462.suffix/1491581548979.jpeg",
              "ratings": 5,
              "likes": 4
          },
          {
              "id": "WONDERS_2",
              "place": "Great Wall of china",
              "description": "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe with an eye to expansion. Several walls were being built as early as the 7th century BC;[2] these, later joined together and made bigger and stronger, are collectively referred to as the Great Wall.",
              "imageURL": "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-great-wall-of-china.jpg.rend.hgtvcom.616.462.suffix/1491581549051.jpeg",
              "ratings": 1,
              "likes": 2
          },
          {
              "id": "WONDERS_3",
              "place": "Christ the Redeemer Statue",
              "description": "Christ the Redeemer (Portuguese: Cristo Redentor, standard Brazilian Portuguese: [ˈkɾistu ʁedẽˈtoʁ], local pronunciation: [ˈkɾiɕtŭ̻ xe̞dẽ̞ˈtoɦ]) is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida fashioned the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal. The arms stretch 28 metres (92 ft) wide.",
              "imageURL": "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-christ-the-redeemer.jpg.rend.hgtvcom.616.462.suffix/1491581548898.jpeg",
              "ratings": 2,
              "likes": 1
          },
          {
              "id": "WONDERS_4",
              "place": "Machu Picchu (Peru)",
              "description": "Machu Picchu  is a 15th-century Inca citadel, located in the Eastern Cordillera of southern Peru, on a mountain ridge 2,430 metres (7,970 ft) above sea level. It is located in the Cusco Region, Urubamba Province, Machupicchu District in Peru,[13] above the Sacred Valley, which is 80 kilometres (50 mi) northwest of Cuzco and through which the Urubamba River flows, which cuts through the Cordillera and originates a canyon with tropical mountain climate.",
              "imageURL": "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-machu-picchu.jpg.rend.hgtvcom.616.462.suffix/1491581548990.jpeg",
              "ratings": 3,
              "likes": 4
          },
          {
              "id": "WONDERS_5",
              "place": "Chichen Itza",
              "description": null,
              "imageURL": "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-chichen-itza.jpg.rend.hgtvcom.616.462.suffix/1491581548887.jpeg",
              "ratings": 4.5,
              "likes": 2
          },
          {
              "id": "WONDERS_6",
              "place": "The Roman Colosseum",
              "imageURL": "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-roman-coloesseum.jpg.rend.hgtvcom.616.462.suffix/1491581548881.jpeg",
              "ratings": 3.5,
              "likes": 1
          },
          {
              "id": "WONDERS_7",
              "place": "Petra (Jordan)",
              "description": "Petra, originally known to its inhabitants as Raqmu, is a historical and archaeological city in southern Jordan. Petra lies on the slope of Jabal Al-Madbah in a basin among the mountains which form the eastern flank of Arabah valley that run from the Dead Sea to the Gulf of Aqaba. According to Hieronymus of Cardia, the name \"Petra\" was given by Greek merchants, who observed the city's inhabitants offering sacrifice, in springtime, to a deity on a large stone, i.e. petra. Petra is believed to have been settled as early as 9,000 BC, and it was possibly established in the 4th century BC as the capital city of the Nabataean Kingdom. The Nabataeans were nomadic Arabs who invested in Petra's proximity to the trade routes by establishing it as a major regional trading hub.",
              "imageURL": "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-petra.jpg.rend.hgtvcom.616.462.suffix/1491581549062.jpeg",
              "ratings": 2.5,
              "likes": 5
          }
      ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
      getWonders(state){
        return state.data
      }
  }
})
