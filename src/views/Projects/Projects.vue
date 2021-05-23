<template>
    <section id="projects">
        <div class="title text-h3">Projects</div>

        <v-row class="ma-0">
            <v-card 
                v-for="project in projects"
                :key="project.id"
                color="transparent"
                elevation="5"
                class="my-5 my-sm-0 align-self-end"
            >
                <v-card-title class="text-h5 section-title">{{project.title}}</v-card-title>
                <v-card-subtitle>{{project.date}}, {{project.company}}</v-card-subtitle>
                <v-card-text>
                    <ul>
                        <li v-for="detail in project.details" :key="detail">
                            {{detail}}
                        </li>
                    </ul>
                </v-card-text>

            </v-card>
        </v-row>
    </section>
</template>

<script>
export default {
    name: 'Projects',
    data: () => ({
        projects: [
            {
                id: 1,
                title: 'Final Year Project',
                company: 'AUB',
                date: 'FALL 2020 - SPRING 2021',
                details: [
                    'Developed a mobile application that uses deep learning to identify diseases in home-grown plants and suggests a treatment from local shops.',
                    'Implemented a web scraper to collect our dataset from google images and the PlantVillage website.',
                    'Created a crowdsourcing platform to ease the process of data collection and cleaning.',
                    'Due to the scarcity of data, we applied various data augmentation techniques and implemented fewshot learning using a Siamese network and a triplet loss function.'
                ]
            },
            {
                id: 2,
                title: 'Data Science Course Project',
                company: 'AUB',
                date: 'FALL 2020',
                details: [
                    'The project examines the effect of long-term exposure to PM2.5 on COVID-19 cases in the United States through time-series analysis.',
                    'Implemented various data cleaning and feature selection techniques from over 50 datasets.',
                    'Used Yeo-Johnson and log transforms, alongside K-means clustering and exploratory data analysis to ' +
                    'normalize the data distribution, identify spatial patterns, and produce meaningful interpretations, respectively.',
                    'Fitted our data on 4 different ML models and incorporated elements from cross validation and grid hyperparameter search.',
                    'Implemented hypothesis testing to reveal whether any observed differences were significant, and then finally preformed SHAP interpretability on the best model to better understand model sensitivity'
                ]
            },
            {
                id: 3,
                title: 'Software Engineering Course Project',
                company: 'AUB',
                date: 'SPRING 2020',
                details: [
                    'Developed a Clinic Management system providing for 3 different types of users; Patient, Manager, and Doctor and publish on Azure using ASP.NET Core MVC.',
                    'Managed over 100 tables and views in the database using SQL Server.',
                    'Developed and tested stored procedures based on client requirements.',
                    'Lead the team Implementing an Agile development approach for the project.'
                ]
            },
        ]
    })
}
</script>

<style lang="scss" src="./Projects.scss" scoped></style>