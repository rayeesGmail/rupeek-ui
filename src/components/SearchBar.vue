<template>
    <v-card color="grey lighten-2" flat>
        <v-layout row wrap>
            <v-flex xs12 sm12 md3 pa-3>
                <v-text-field prepend-inner-icon="search" solo color="gray" flat hide-details
                              placeholder="Search By Name"
                              background-color="#FEFEFE"></v-text-field>
            </v-flex>
            <v-flex xs12 sm12 md6 pa-1>

            </v-flex>

            <v-flex xs12 sm12 md3 pa-3>
                <v-text-field prefix="Sort: " solo color="gray" flat hide-details
                              placeholder="Ratings"
                              background-color="#FEFEFE"></v-text-field>
            </v-flex>

        </v-layout>
    </v-card>
</template>

<script>
    export default {
        name: "SearchBar"
    }
</script>

<style scoped>

</style>