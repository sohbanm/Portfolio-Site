<template>
    <div class="skills mx-auto">
        <p style="font-size:5em">Skills</p>
        <v-row v-scrollanimation>
            <v-col md="4" cols="12" class="skills-border">
                <div class="skill-section accent">
                    <h2>Languages</h2>
                    <h4 class="mb-3">
                        Python <br>
                        Java <br>
                        JavaScript <br>
                        TypeScript <br>
                        PHP <br>
                        Ruby <br>
                        C/C++ <br>
                        SQL <br>
                    </h4>
                </div>

            </v-col>
            <v-col md="4" cols="12" class="skills-border">
                <div class="skill-section accent">
                    <h2>Frameworks and Libraries</h2>
                    <h4 class="mb-3">
                        VueJS <br>
                        Spring Boot <br>
                        Django <br>
                        ReactJS <br>
                        Flask <br>
                        FastAPI <br>
                        AngularTS <br>
                        Rails <br>
                        ExpressJS <br>
                        Scikit-learn <br>
                        Pandas/NumPy <br>
                    </h4>
                </div>
            </v-col>
            <v-col md="4" cols="12" class="skills-border">
                <div class="skill-section accent">
                    <h2>Developer Tools</h2>
                    <h4 class="mb-3">
                        MySQL <br>
                        PostgreSQL <br>
                        MongoDB <br>
                        Azure <br>
                        Ollama <br>
                        Langchain <br>
                        AWS S3 <br>
                        Git <br>
                        Postman <br>
                        Linux <br>
                        Jupyter <br>
                    </h4>
                </div>

            </v-col>
        </v-row>
        


    </div>
</template>

<style lang="scss">
.skills{
    width: 80%;
    font-family: 'Prompt', sans-serif;
    margin-bottom: 25vh;
    svg{
        margin: 2.2em;
        height: 5em;
        width: 5em;
    }

    .skills-border{
        padding: 1rem;

        .skill-section{
        height: 100%;
        color: white;
        border-radius: 25px;
        }
    }
}
.before-enter{
  opacity: 0;
  transform: translateY(12vh);
  transition: all 2s ease-out;
}
.enter {
  opacity: 1;
  transform: translateY(0);
}

</style>