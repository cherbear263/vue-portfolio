<template>
  <div class="max-w-xs mx-auto sm:mx-20 xl:mx-40 sm:max-w-xl">
    <section id="intro" class="section">
      <h1 class="mt-40 text-white sm:mt-60 text-7xl">Cheryl Jones</h1>
      <h3 class="mt-4 text-lg tracking-wide text-indigo-500 uppercase font-nunito">
        web developer
      </h3>
      <p class="mt-8 text-gray-100">
        Hi! I'm a web developer and teacher based in Queensland, Australia. I
        love helping people find creative solutions to problems, and providing a
        user experience that is accessible and easy to use.
      </p>
      <div class="flex items-center gap-9 mt-14">
        <a href="/#contact" class="btn">Contact me</a>
        <a href="/#about"
          class="text-center text-indigo-500 bg-transparent border-2 border-indigo-500 rounded-full hover:bg-indigo-700 hover:border-transparent h-14 w-14">
          <i class="mt-5 text-indigo-500 fa-solid fa-chevron-down animate-bounce end hover:text-bg-gray-800">
          </i>
        </a>
      </div>
    </section>
    <!-- ABOUT section -->
    <about />

    <!-- WORK SAMPLES -->

    <work-page id="work" />
    <!-- Contact me -->
    <contact-page />


  </div>
</template>

<script>
import WorkPage from "../components/workPage.vue";
import About from './About.vue';
import ContactPage from '../components/contactPage.vue'
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    WorkPage,
    About,
    ContactPage
  },
  methods: {
    sendMail(values) {
      // send using sendgrid?? should this be async - await?
      const mail = {
        name: values.name,
        email: values.email,
        message: values.message,
      };
      console.log(mail);
    },
  },
};
</script>
