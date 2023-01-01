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
      {color: 'amber', interval: 'Sept 2022 - Present', title: 'Junior Web Developer',
      description:'I am currently doing a work/study part-time at a Company named Walk With Web and am learning many new technologies and working professionally as a Web Developer',
      technologies:`
      <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
      <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
      <img class="pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
      `
      },
      {color: 'orange', interval: 'June 2022 - August 2022', title:'Information Technology Intern',
      description:'I had previously worked as an Information Technology Intern at the Ahmadiyya Muslim Jama`at in Canada, where I had a number of instances where I could showcase my technical ability',
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