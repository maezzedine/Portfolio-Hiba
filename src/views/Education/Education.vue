<template>
    <div id="education">
        <div class="title text-h3">Education</div>

        <v-row class="ma-0 education-row">
            <v-card 
                color="transparent"
                elevation="5"
                class="section col-12 col-sm-5 my-5 my-sm-0 align-self-end"
            >
                <img src="https://sites.aub.edu.lb/files/2018/03/AUB20Logo20Styled20Vector-qqrk1v.png" />
                <v-card-title class="text-h5 section-title">American University of Beirut (AUB)</v-card-title>
                <v-card-subtitle>FALL 2018 - SPRING 2021</v-card-subtitle>
                <v-card-text>
                    <div class="major text-h6">Computer Science</div>
                    <p class="text-center">CGPA: 3.6/4.0</p>

                    <div class="text-subtitle-1 text-center black--text text-decoration-underline">Dean's Honor List</div>
                    <div class="text-subtitle-2 text-center">FALL 2019 - FALL 2020 - SPRING 2021</div>
                </v-card-text>

            </v-card>

            <v-card 
                color="transparent"
                elevation="5"
                class="section col-21 col-sm-5 align-self-start"
            >
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/University_of_Bath_logo.svg/1200px-University_of_Bath_logo.svg.png" />
                <v-card-title class="text-h5 section-title">University of BATH</v-card-title>
                <v-card-subtitle>FALL 2021 - SPRING 2023</v-card-subtitle>
                <v-card-text>
                    <div class="major text-h6">MSc Data Science</div>
                </v-card-text>

            </v-card>
        </v-row>

    </div>
</template>

<script>
export default {
    name: 'Education'
}
</script>

<style lang="scss" src="./Education.scss" scoped></style>
