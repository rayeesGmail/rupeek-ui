<template>
    <v-hover>
        <v-card hover slot-scope="{hover}">
            <v-img :src="wonders.imageURL">
                <v-container fill-height fluid pa-3 v-if="hover">
                    <v-layout row wrap pa-0>
                        <v-flex xs12 sm12 md12>
                            <div style="background-color: #FAF6F4; opacity: 0.7;
                       height: 100%; width: 100%">
                                <p class="text-xs-right pa-1">
                                    <v-icon size="20" color="black">favorite</v-icon>
                                    <span style="font-size: 20px" class="ml-1 mr-2 green--text">{{wonders.likes}}</span>
                                </p>
                                <div class="text-xs-center">
                                    <h3>{{wonders.place}}</h3>
                                    <p>{{wonders.description}}</p>
                                </div>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-img>
            <v-card-actions>
                Ratings:
                <v-rating v-model="wonders.ratings" color="#DD2926" background-color="#8C959D"
                          empty-icon="star_border" full-icon="star_border" half-icon="star_border"
                          half-increments hover></v-rating>
                <v-spacer></v-spacer>
                <h4>{{wonders.place}}</h4>
            </v-card-actions>
        </v-card>
    </v-hover>
</template>

<script>
    export default {
        name: "WonderCard",
        props: ["wonders"]
    }
</script>

<style scoped>

</style>