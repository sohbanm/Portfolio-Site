<template>
  <div class="mx-auto text-center home">
    
    <v-row no-gutters>
      <v-col cols="2" xs="5" class="mx-auto text-center">
        <div v-for="social in icons" :key=icons.id>
          <a :href=social.link target="_blank">
            <button class="iconButton" style="padding:0"><v-icon class="icon">{{social.icon}}</v-icon> </button>
          </a>
        </div>
      </v-col>

      <v-col cols="10" xs="9">
        <span class="name">
          Hi, I'm Sohban Malik
        </span>
        <div class="details">
          <h2>Senior @ York University '25, HBSc. Computer Science Student</h2>
          <!-- make name of university a hyperlink to yorks site -->
          <p>
          I am a very passionate developer and am always looking to expand and strengthen my skillset and so that I can be an excellent Software Engineer. I have currently dived into fullstack development and will now be focusing on learning to implement more complex and creative backend systems. I am sure my understanding of core concepts in Software Engineering as well as my growth-oriented mindset should be beneficial to your team.
          </p> 
        </div>
        
      </v-col>
    </v-row>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    data(){
      return {
        icons: [
          {id: 1, icon: "mdi-linkedin", link:'https://www.linkedin.com/in/sohban/'},
          {id: 2, icon: "mdi-github", link:'https://github.com/sohbanm'},                    
          {id: 3, icon: "mdi-email", link:'mailto:sohbanelahimalik@gmail.com'},                    
        ]
      }
    }
  }
</script>


<style lang="scss" scoped>
*{
  font-family: 'Prompt', sans-serif;
  color:black;
}
.home{
  color:white;
  width: 85%;
  padding: 32px;
}
.center {
  text-align: center;
}
.iconButton{
  // color: "#282828";
  border: 0.1em solid rgba(255, 255, 255, 0);
  -webkit-transition: all 500ms ease;
  transition: all 500ms ease;
}
.icon{
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
  color: #282828;
  font-size: 5.5em;
}
.iconButton:hover{
  background: #282828;
  .icon{
  color: white;
  }
}

.name{
  font-size:5.7em;
  text-align: left;
}
.details{
  text-align: left;
  margin-left: 18vh;
}


@media screen and (max-width: 1264px){
  .icon{font-size: 60px;}
  .name{font-size: 3em;}
  
  .details{margin-left:0;}
  .home{width: 95%;}
}

@media screen and (max-width: 576px){
  .icon{font-size: 50px;}
  .details{margin-top: 10vh;}
}



</style>