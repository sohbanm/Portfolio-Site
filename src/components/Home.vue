<template>
  <div style="color:white;width: 85%;" class="center">
    
    <v-row>
      <v-col cols="1">
        <div v-for="social in icons" :key=icons.id>
          <a :href=social.link target="_blank">
            <button class="iconButton"><v-icon size="100" style="color:white">{{social.icon}}</v-icon> </button>
          </a>
        </div>
      </v-col>

      <v-col>
        <span style="font-size:90px;text-align: left;">
        
        Sohban Elahi Malik
        </span>
        <div style="text-align:left;margin-left: 150px;">
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


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@100;200&display=swap');
*{
  font-family: 'Prompt', sans-serif;
}
h1{
  color: white;
  font-size: 35px;
}
.center {
  margin: auto;
  width: 50%;;
  padding: 10px;
  text-align: center;
}
.iconButton{
  border: 1px solid rgba(255, 255, 255, 0);
}
.iconButton:hover{
  background: #19bc8b52;
  color:rgb(0, 0, 0);
  border: 1px solid #ccc;
}
</style>