<template>
    <div class="mx-auto" style="width:80%">
        <p class="head">Experience</p>
          
        <v-timeline>
            <v-timeline-item
            v-for="(year, i) in jobs"
            :key="i"
            :color="year.color"
            small
            v-scrollanimation
            >
              <template v-slot:opposite>
                  <span :class="`headline font-weight-bold ${year.color}--text`">{{year.interval}}</span>
              </template>
              <div class="py-4">
                  <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">{{year.title}}</h2>
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
      {color: 'red', interval: 'May 2023 - Present', title:'Software Developer Intern',
        description:'During this summer I am interning as a Software Developer at Verto Health where I am working with a bigger organization and learning more industry standards/practices',
        technologies: `
        <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg" />
        <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" />
        <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" />
        <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
        `
      },
      {color: 'orange', interval: 'Sept 2022 - April 2023', title: 'Web Developer',
      description:'In my second year I was doing a work/study program part-time at a Company named Walk With Web and learned many new technologies and worked professionally as a Web Developer',
      technologies:`
      <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
      <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
      <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
      `
      },
      {color: 'amber', interval: 'June 2022 - August 2022', title:'Information Technology Intern',
      description:'I had previously worked as an Information Technology Intern at the Ahmadiyya Muslim Community in Canada, where I had a number of instances where I could showcase my technical ability',
      technologies: `
      <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
      <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
      `
      },
    // colors: pink, amber, orange, green, cyan
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