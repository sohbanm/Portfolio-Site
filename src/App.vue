<template> 
  <v-app id="main"> 
    <v-app-bar
      class="primary"
      app
      fixed
      dark
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="1"
    >
      <v-row>
        <v-col class="mx-auto">
          <h1><b>Portfolio</b></h1>
        </v-col>

        <div v-for="button in items" :key=items.id class="buttons">
          <v-col>
            <a :href=button.ref :target=button.target style="color:white">
              <button class="raise">
                <v-icon class="v-icon" >{{button.icon}}</v-icon>{{button.title}}
              </button>
            </a>
          </v-col>
        </div>

      </v-row>      
    </v-app-bar>


    <!-- This is where all the components are being called in -->
    <v-main class="main" style="color:black">
      <Home id="Home"></Home>

      <Timeline></Timeline>

      <div style="text-align:center;margin: 25vh 0 1vh 0;">
        <a href="#Projects" class="scroll">Projects</a>
      </div>

      <div id="Projects" style="text-align:center;margin: 25vh 0 0 0;"><p style="opacity:0">L</p> </div>

      <Projects></Projects>

      <div style="text-align:center;margin: 15vh 0 1vh 0;">
        <a href="#Skills" class="scroll">Skills</a>
      </div>

      <div id="Skills" style="text-align:center;margin: 25vh 0 5vh 0;"><p style="opacity:0">L</p> </div>

      <Skills></Skills>
      

      <div class="text-center" style="margin-top:20vh">
        <a href="#Contact" class="scroll">Contact</a>
      </div>
      <!-- This line is for spacing -->
      <div style="margin:55vh 0 0 0"></div> 

      <Footer id="Contact"></Footer>
    </v-main>

    
  </v-app>
</template>

<script>

import Projects from './components/Projects.vue'; 
import Home from './components/Home.vue';
import Footer from './components/Footer.vue';
import Skills from './components/Skills.vue';
import Timeline from './components/Timeline.vue';


export default {
  data: () => ({ 
    items: [
      {id: 1, title: 'Home', icon: 'mdi-home-outline', ref: "#", target: ""},
      {id: 2, title: 'Projects', icon: "mdi-xml", ref: "#Projects", target: ""},
      {id: 3, title: 'Skills', icon: "mdi-tools", ref: "#Skills", target: ""},
      {id: 4, title: 'Contact', icon: 'mdi-card-account-mail', ref: "#Contact", target: ""},
      {id: 5, title: 'Resume', icon: 'mdi-file-account', ref: "https://1drv.ms/b/s!AoUvcKZ5_MGigtYAgNVoR42oBb5JtQ?e=e8S7TB", target: "_blank"},
    ],
    icons: [
      {id:1, icon:'mdi-github', link: 'https://github.com/sohbanm'},
      {id:2, icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/sohban-e-malik/'},
    ]
  }),
  components: { Projects, Home, Footer, Skills,Timeline },
};
</script>

<style lang="scss" >
@import './assets/button.scss';
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@100;200&display=swap');

html {
  scroll-behavior: smooth;
}

a.scroll {
  font-size: 1.4em;
  text-decoration: none;
  border: 0.1em solid black;
  padding: 0.2em;
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
}
a.scroll:hover {
  text-decoration: none;
  color: white;
  background-color: rgb(95, 95, 95);
  border: 0.1em solid black;
  padding: 0.2em;
} 

.v-icon{
  margin: 0 0.2em 0 0.2em;
}
</style>

<style scoped>
button{
  margin: 0.25em;
  border: 0.25em;
  align-content: center;
}
a button{
  font-size: 1.3em;
}

h1{
  margin-left:5vh;
  margin-top: 2vh;
  font-family: 'Raleway', sans-serif;
}

@media screen and (max-width: 1264px) {
   .buttons {
    display: none;
  }
  h1{
    margin-left: 0;
  }
}
v-app-bar-nav-icon{
  margin-top: 250vh;
}
</style>
