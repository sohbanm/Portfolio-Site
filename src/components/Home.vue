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
          Sohban Malik
        </span>
        <div class="details">
          <h2>York University '25, HBSc. Computer Science Student</h2>
          <!-- make name of university a hyperlink to yorks site -->
          <p>
          I am currently a sophmore at York University in Toronto, Ontario. 
          <br>
          I'm very passionate about computer science, and am preparing to gain valuable experience as I am constantly attaining new skills.
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
          {id: 1, icon: "mdi-linkedin", link:'https://www.linkedin.com/in/sohban-e-malik/'},
          {id: 2, icon: "mdi-github", link:'https://github.com/sohbanm'},                    
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
  border: 0.1em solid rgba(255, 255, 255, 0);
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
}
.iconButton:hover{
  // background: #19bc8b52;
  background: black;
  .icon{
  color: white;
}
  
}
.icon{
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
  color:black;
  font-size: 13vh;
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
}



</style>