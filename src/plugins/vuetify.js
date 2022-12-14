import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/src/styles/main.sass';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            // main: '#00051E',
            main: '#F2EBCF',
            primary: '#000311',
            // primary: '#000000',
            white: '#FFFFFF',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
      },
});
