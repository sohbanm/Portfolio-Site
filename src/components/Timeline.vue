<template>
    <div class="mx-auto" style="width:80%">
        <p class="head">Experience</p>
          
        <v-timeline>
            <v-timeline-item
            v-for="(year, i) in jobs"
            :key="i"
            color="accent"
            small
            v-scrollanimation
            >
              <template v-slot:opposite>
                  <span :class="`headline font-weight-light ${year.color}--text`">{{year.interval}}</span>
              </template>
              <div class="py-4">
                  <h2 class="`headline font-weight-bold mb-4`">{{year.title}}</h2>
                  <div>{{year.description}}</div>
                  <div class="text-left images" v-html="year.technologies"></div>
              </div>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>

<script>
export default {
  data: () => ({
    jobs: [
      {color: 'accent', interval: 'Feb 2024 - April 2024', title:'Research Software Engineer',
        description:'In my third year second semester I have begun a part time research position at York University. In this position I will be leading the research and development of automating the creation of Invoice generation after orders are placed on a 3rd party software.',
        technologies: `
        `
      },
      {color: 'accent', interval: 'May 2023 - August 2023', title:'Software Engineer Intern',
        description:'In my second year summer I interned as a Software Engineer at Verto Health, where I worked with a bigger organization and learned more industry standards/practices, as well as new fullstack web languages and frameworks.',
        technologies: `
        <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg" />
        <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" />
        <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" />
        <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
        `
      },
      {color: 'accent', interval: 'Sept 2022 - April 2023', title: 'Web Developer',
      description:'In my second year I was doing a work/study program part-time at a Company named Walk With Web and learned many new technologies and worked professionally as a Web Developer',
      technologies:`
      <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
      <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
      <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
      <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
      `
      },
      {color: 'accent', interval: 'June 2022 - August 2022', title:'Information Technology Intern',
      description:'I had previously worked as an Information Technology Intern at the Ahmadiyya Muslim Community in Canada, where I had a number of instances where I could showcase my technical ability',
      technologies: `
      <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
      <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
      `
      },
    // colors: pink, amber, orange, green, cyan, indigo, teal, blue
    //other colors are custom made in vuetify.js file
    ],
  }),
}
</script>

<style scoped lang="scss">
.head{
  font-size: 5em;
  @media (max-width: 600px){font-size: 2em;}
}

*{
  font-family: 'Prompt', sans-serif;
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
.images::v-deep .pic{height: 50px;width: 50px;}

</style>