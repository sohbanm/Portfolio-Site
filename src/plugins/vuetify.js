import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/src/styles/main.sass';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            main: '#CDCDCD',
            primary: '#000000',
            white: '#FFFFFF',
            accent: '#282828',
            first: '#007893',
          },
        },
      },
});
