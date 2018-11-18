<template>
    <v-card color="grey lighten-2" flat mb-0>
        <v-layout row wrap>
            <v-flex xs12 sm12 md3 pa-3>
                <v-text-field v-model="search" prepend-inner-icon="search" solo color="gray" flat hide-details
                              placeholder="Search By Name"
                              background-color="#FEFEFE"></v-text-field>
            </v-flex>
            <v-flex xs12 sm12 md6 pa-3>
                <h3 class="text-xs-center mt-3">Total Likes: {{ likes }} &nbsp; Api Hits: 0</h3>
            </v-flex>

            <v-flex xs12 sm12 md3 pa-3>
                <v-select
                        color="gray"
                        :items="items"
                        v-model="sort"
                        prefix="Sort: "
                        solo
                        hide-details
                        flat
                ></v-select>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
    export default {
        name: "SearchBar",
        data: () => ({
            search: null,
            items: ["Ratings", "Likes"],
            sort: "Ratings"
        }),
        computed: {
          likes(){
              return this.$store.getters.getTotalLike
          }
        },
        watch: {
            sort(){
                this.$store.commit("setSorting", this.sort)
            },
            search(){
                this.$emit("search", this.search)
            }
        }
    }
</script>

<style scoped>

</style>