<template>
    <v-footer
    id="Contact"
    dark
    class="white"
    padless
    >
      <v-card
        class="flex"
        
      >
        <v-card-title class="white">
            <strong>Contact Info</strong>

            <v-spacer></v-spacer>

            <v-btn class="mx-4" color="grey" onMouseOver="this.style.color='#FFFB00'" v-scrollanimation>
                <a href="mailto:sohbanelahimalik@gmail.com" class="raise">
                    <v-icon size="2.5em" style="color:black;">
                    mdi-email
                    </v-icon>
                </a>
            </v-btn>

          
            <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                color="grey"
                onMouseOver="this.style.color='#FFFB00'"
                v-scrollanimation
            >
            <a :href=icon.link target="_blank" class="raise">
              <v-icon size="2.5em">
                {{ icon.icon }}
              </v-icon>
            </a>
          </v-btn>

        </v-card-title>

      </v-card>
    </v-footer>
</template>

<script>

export default {
  data: () => ({ 
    icons: [
      {id:1, icon:'mdi-github', link: 'https://github.com/sohbanm'},
      {id:2, icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/sohban-e-malik/'},
    ]
  }),
};
</script>

<style lang="scss" scoped>
// @import './assets/button.scss';
strong{
    color:black;    
    margin-left: 30vh;
    font-family: 'Raleway', sans-serif;

    @media (max-width: 960px){
    margin-left: 10vh;
  }
}
a{
    text-decoration: none;
}
.before-enter{
  opacity: 0;
  transform: scale(.5) rotateZ(-25deg);
  transition: all 1s ease-out;
}
.enter {
  opacity: 1;
  transform: scale(1) rotateZ(0deg);
}

</style>