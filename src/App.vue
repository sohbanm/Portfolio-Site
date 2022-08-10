<template>  
  <v-app id="main"> 
    <v-app-bar
      class="primary"
      app
      dark
      shrink-on-scroll
      height="70px"
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <v-row>
        <v-col>
          <v-app-bar-title>
            <h1 class="font" style="margin-left:200px"><b>Portfolio</b></h1>
          </v-app-bar-title>
        </v-col>
        <div v-for="button in items" :key=items.id>
          <v-col>
            
            <a :href=button.ref :target=button.target style="color:white">
              <button class="raise">
                <v-icon class="v-icon">{{button.icon}}</v-icon>{{button.title}}
              </button>
            </a>
            

          </v-col>
        </div>
      <hr class="rounded">
      </v-row>      
    </v-app-bar>


    <!-- This is where all the components are being called in -->
    <v-main class="main" style="color:white">
      <Home id="Home"></Home>

      <div style="text-align:center;margin: 150px 0 250px 0;">
        <a href="#Projects" style="color:white" class="scroll">Projects</a>
      </div>

      <Projects id="Projects"></Projects>
      <!-- Delete Line below later -->
      <div style="margin:200px 0 400px 0"></div> 
    </v-main>

    <Footer id="Contact"></Footer>
  </v-app>
</template>

<script>

import Projects from './components/Projects.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'


export default {
  data: () => ({ 
    items: [
      {id: 1, title: 'Home', icon: 'mdi-home-outline', ref: "#", target: ""}, //Need to Link these buttons to scroll later
      {id: 2, title: 'Projects', icon: "mdi-xml", ref: "#Projects", target: ""},
      {id: 3, title: 'Contact', icon: 'mdi-card-account-mail', ref: "#Contact", target: ""},
      {id: 4, title: 'Resume', icon: 'mdi-file-account', ref: "https://1drv.ms/b/s!AoUvcKZ5_MGigtVqHmtFOQkwlGXRvw", target: "_blank"},
    ],
    icons: [
      {id:1, icon:'mdi-github', link: 'https://github.com/sohbanm'},
      {id:2, icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/sohban-e-malik/'},
    ]
  }),
  components: { Projects, Home, Footer },
};
</script>

<style lang="scss">
@import './assets/button.scss';
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');

  html {
    scroll-behavior: smooth;
  }
  
  a.scroll {
    text-decoration: none;
    border: 1px solid white;
    padding: 3px;
  }
  a.scroll:hover {
    text-decoration: none;
    background-color: #19bc8b52;
    border: 1px solid #19bc8b;
    padding: 3px;
  } 
  
  #down {
    margin-top: 100%;
    padding-bottom: 25%;
  } 
  hr.rounded {
    border-top: 3px solid rgb(149, 149, 149);
    border-radius: 5px;
    margin: 0px 30px 50px 30px;
  }
  h1{
    font-family: Monolith-This-Font, Verdana, sans-serif;
  }
  button{
    margin: 5px;
    border: 5px;
    align-content: center;
  }
  .v-icon{
    margin: 0 5px 0 5px;
  }
  .font{
    font-family: 'Raleway', sans-serif;
  }
</style>
