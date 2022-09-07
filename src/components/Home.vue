<template>
  <div style="color:white;width: 85%;" class="center">
    
    <v-row>
      <v-col cols="2" style="text-align:center">
        <div v-for="social in icons" :key=icons.id>
          <a :href=social.link target="_blank">
            <!-- <button class="iconButton" style="padding:0"><v-icon size="100" style="color:white;">{{social.icon}}</v-icon> </button> -->
            <button class="iconButton" style="padding:0"><v-icon class="icon">{{social.icon}}</v-icon> </button>
          </a>
        </div>
      </v-col>

      <v-col cols="10">
        <span class="name">
          Sohban Elahi Malik
        </span>
        <div style="text-align:left;margin-left: 18vh;">
          <h2>York University '25, HBsc. Computer Science Student</h2>
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
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@100;200&display=swap');
*{
  font-family: 'Prompt', sans-serif;
}
.center {
  margin: auto;
  width: 50%;;
  padding: 0.8em;
  text-align: center;
}
.iconButton{
  border: 0.1em solid rgba(255, 255, 255, 0);
}
.iconButton:hover{
  background: #19bc8b52;
  color:rgb(0, 0, 0);
  border: 0.1em solid #ccc;
}
.icon{
  color:white;
  font-size: 13vh;
  
  // @media screen and (max-width: 1264px){
  //   font-size: 60px;
  // }
}
.name{
  font-size:5.7em;
  text-align: left;

  @media (max-width: 1264px){
    font-size: 3em;
  }
}
</style>