<template>
    <section id="activities">
        <div class="title text-h3">Activities</div>
        <v-row>
            <v-col class="col-12 my-5 col-sm-5">
                <div class="text-h4">Volunteering</div>
                <v-card 
                    v-for="volunteering in activities.volunteering"
                    :key="volunteering.id"
                    color="transparent"
                    elevation="5"
                    class="my-10 align-self-end"
                >
                    <v-card-title class="text-h5 section-title">{{volunteering.title}}</v-card-title>
                    <v-card-subtitle>{{volunteering.date}}</v-card-subtitle>
                    <v-card-text>
                        {{volunteering.details}}
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col class="col-12 my-5 col-sm-5">
                <div class="text-h4">Hackathons</div>
                <v-card 
                    v-for="hackathons in activities.hackathons"
                    :key="hackathons.id"
                    color="transparent"
                    elevation="5"
                    class="my-10 align-self-end"
                >
                    <v-card-title class="text-h5 section-title">{{hackathons.title}}</v-card-title>
                    <v-card-subtitle>{{hackathons.date}}</v-card-subtitle>
                    <v-card-text>
                        {{hackathons.details}}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
    name: 'Activities',
    data: () => ({
        activities: {
            volunteering: [
                {
                    id: 1,
                    title: 'FoodBlessed NGO',
                    date: '2018 – Present',
                    details: 'Participating in weekly soup kitchens, boxing food assistance packages, and several events to assist in food distribution or making.'
                },
                {
                    id: 2,
                    title: 'Paper Airplanes Inc.',
                    date: 'JAN 2021 - MAY 2021',
                    details: 'Business Analytics instructor for the Women in Tech program where I teach hardworking and ambitious refugee women an introductory course to BA in Excel (mostly) and Tableau skills 6 hours per week.'
                },
                {
                    id: 3,
                    title: 'Senior Representative of the Computer Science Society',
                    date: 'SEPT 2020 - MAY 2021',
                    details: 'Organizing and hosting crash courses and project fairs for members, as well as addressing Department issues.'
                },
            ],
            hackathons: [
                {
                    id: 4,
                    title: 'Data Hackathon',
                    date: 'Summer 2021',
                    details: 'Targetted a local economical issue (unemplyment) through data scraped from Linkedin.'
                },
                {
                    id: 5,
                    title: 'Beirut AI Hackathon',
                    date: 'Summer 2020',
                    details: 'Developed and a pitched a prototype Web App for Identifying Pneumothorax in Medical Images'
                },
                {
                    id: 6,
                    title: 'MIT Hackathon',
                    date: 'Summer 2020',
                    details: 'Mahalli Mobile App: Pitched a Mobile App idea that targets supporting and developing the Lebanese Local Economy'
                },
            ]
        }
    })
}
</script>

<style lang="scss" src="./Activities.scss" scoped></style>
