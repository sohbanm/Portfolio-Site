<template>
  <div class="portfolio">
    <h1>Sohban Malik</h1>
    <p>Software Engineer</p>
    <p>Class of '26</p>
    <p>Currently @ <span class="ericsson">Ericsson</span></p>
    <p>Former @ <span class="rbc">RBC</span>, <span class="pcc">PointClickCare</span>, <span class="verto">Verto Health</span></p>
    <br>
    <div>
      <a href="https://www.linkedin.com/in/sohban" target="_blank">Linkedin</a>
      <a href="https://drive.google.com/file/d/1fXrt4ylluRuHF0wPB0_kKokwiTNl7RNa/view?usp=drive_link" target="_blank">Resume</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');

.portfolio {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(46, 46, 46);
  color: white;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
}

.portfolio h1 {
  font-size: 3em;
  margin: 0.5em 0;
}

.portfolio p {
  font-size: 1.5em;
  margin: 0.3em 0;
}

.portfolio a {
  font-size: 1.5em;
  margin: 0 1em;
  text-decoration: none;
  color: white;
  border: 2px solid transparent;
  padding: 0.2em 0.5em;
  transition: border 0.3s;
}

.portfolio a:hover {
  border: 2px solid white;
}

.ericsson, .rbc, .pcc, .verto {
  transition: color 0.3s;
}

.ericsson:hover {
  color: rgb(0, 26, 255); /* Change this to your desired hover color */
}
.rbc:hover {
  color: rgb(0, 149, 255); /* Change this to your desired hover color */
}
.pcc:hover {
  color: rgb(123, 255, 67); /* Change this to your desired hover color */
}
.verto:hover {
  color: rgb(0, 191, 255); /* Change this to your desired hover color */
}
</style>