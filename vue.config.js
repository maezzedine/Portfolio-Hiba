module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  css: {
    loaderOptions: {
        sass: {
            additionalData: `
            @import "src/styles/_variables.scss"
            @import "src/styles/_mixins.scss"
            `
        },
        scss: {
            additionalData: `
            @import "src/styles/_variables.scss";
            @import "src/styles/_mixins.scss";
            `
        }
    }
  },
}
