<template>
    <section id="contact">
        <div class="title text-h3">Contact</div>
        <v-row class="ma-0 contact-row">
            <v-col class="ma-0">
                <a href="tel:+96171798197">
                    <v-icon>mdi-phone</v-icon> <br />
                    +96171798197
                </a>
            </v-col>
            <v-col class="ma-0">
                <a href="mailto:hibalubbad@gmail.com">
                    <v-icon>mdi-at</v-icon> <br />
                    hibalubbad@gmail.com
                </a>
            </v-col>
            <v-col class="ma-0">
                <a target="_blank" href="https://www.linkedin.com/in/hibalubbad">
                    <v-icon>mdi-linkedin</v-icon> <br />
                    https://www.linkedin.com/in/hibalubbad
                </a>
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
    name: 'Contact',
    data: () => ({
       
    })
}
</script>

<style lang="scss" src="./Contact.scss" scoped></style>
