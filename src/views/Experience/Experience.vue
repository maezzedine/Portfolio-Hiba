<template>
    <section id="experience">
        <div class="title text-h3">Experience</div>
        <v-row class="justify-space-around">
            <v-card
                v-for="job in jobs"
                :key="job.id"
                class="col-12 col-sm-5 col-md-3 mx-0 mx-md-1 my-5"
            >
                <v-card-title>{{job.title}}</v-card-title>
                <v-card-subtitle class="text-subtitle-1">{{job.company}}, <small>{{job.location}}</small></v-card-subtitle>
                <v-card-text>
                    <img :src="job.logo" width="100px" alt="">
                    <div class="text-subtitle-2">{{job.date}}</div> 
                </v-card-text>
                <div class="content">{{job.details}}</div>
            </v-card>

        </v-row>
    </section>
</template>

<script>
export default {
    name: 'Experience',
    data: () => ({
        jobs: [
            {
                id: 1,
                title: 'Machine Learning Intern',
                company: 'ZAKA',
                logo: 'https://ipmo.uonbi.ac.ke/sites/ipmo.uonbi.ac.ke/files/2020-11/Zaka%20Nomination.png',
                location: 'Beirut, Lebanon',
                date: 'JUL 2020 – AUG 2020',
                details: 'Built an interactive Facebook FAQ Chatbot using Rasa open source where I trained, tested, and deployed through ' +
                    'Rasa X which was set up through a GCP virtual instance. The bot was able to carry small talk with users, answer ' +
                    'company FAQs, get in contact with sales, sign up newsletter, and ask about services and events. '
            },
            {
                id: 2,
                title: 'Web Development Intern',
                company: 'ZAKA',
                logo: 'https://ipmo.uonbi.ac.ke/sites/ipmo.uonbi.ac.ke/files/2020-11/Zaka%20Nomination.png',
                location: 'Beirut, Lebanon',
                date: 'MAY 2020 – JUL 2020',
                details: 'Used Django, MongoDB, and other Web development technologies to create a Data Management Framework ' +
                    'Web Application where I was responsible for handling user permissions, allowing user’s manual upload of images ' +
                    'and viewing them in a gallery. Also, I Integrated a deep learning model to hash images to block upload of ' +
                    'duplicate images. '
            },
            {
                id: 3,
                title: 'Web Development Intern',
                company: 'NABED',
                logo: 'https://dsteck.com/wp-content/uploads/2019/07/nabed-health-care-logo-small-01.png',
                location: 'Beirut, Lebanon',
                date: 'JUN 2019 – JUL 2019',
                details: 'Created and designed a Web form that takes in the customer information to create their customized marketing ' +
                    'page that contains videos, relevant files, and contact information. Moreover, I implemented an existing API to ' +
                    'connect to the company database and send SMS and Email messages to the client.'

            }
        ]
    })
}
</script>

<style lang="scss" src="./Experience.scss" scoped></style>