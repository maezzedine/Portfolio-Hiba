<template>
    <section id="skills">
        <div class="title text-h3">Technical Skills</div>
        <v-simple-table>
            <tbody>
                <tr v-for="category in Object.keys(skills)" :key="category">
                    <th>{{category}}</th>
                    <td>
                        <span v-for="(skill, i) in skills[category]" :key="skill">
                            {{skill}} 
                            <span v-if="i+1 != skills[category].length">,</span>
                        </span>
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
    </section>
</template>

<script>
export default {
    name: 'Skills',
    data: () => ({
        skills: {
            Languages: [ 'C++', 'Python', 'C#', 'Java', 'PHP', 'R'],
            'Web Development': [ 'ASP.NET CORE MVC', 'Django', 'GCP', 'Celery', 'Daphne',
                'Redis', 'Postman', 'CSS', 'JavaScript', 'HTML5', 'PHP', 'jQuery', 'Bootstrap', 'Git'],
            OS: ['Windows', 'MacOS', 'Linux'],
            'Data Science and Machine Learning': [
                'Rasa', 'Rasa X', 'Web scraping', 'Jupiter Notebook', 'Google Collab', 'R studio',
                'Python (Keras, Numpy, Scikitlearn, ...)', 'MATLAB', 'Tableau', 'Selenium'
            ]
        }
    })
}
</script>

<style lang="scss" src="./Skills.scss" scoped></style>
