<template>
<div class="mx-auto sm:mx-20 xl:mx-40 max-w-xs sm:max-w-xl ">
  <section id="intro" class="section">
    <h1 class="mt-60 text-7xl text-white" >Cheryl Jones</h1>
    <h3 class="font-nunito uppercase text-lg text-indigo-500 tracking-wide mt-4">web developer</h3>
    <p class="text-gray-100 mt-8">Hi! I'm a web developer and teacher based in Queensland, Australia. I love helping people find creative solutions to problems, and providing a user experience that is accessible and easy to use.
</p>
    <div class="flex items-center gap-9 mt-14">
      <a class="btn">Contact me</a>
      <a href="/#about" class="bg-transparent border-2 hover:bg-indigo-700 hover:border-transparent
    border-indigo-500 text-center  text-indigo-500 rounded-full h-14 w-14">
      <i class="fa-solid mt-5 fa-chevron-down animate-bounce end 
    text-indigo-500 hover:text-bg-gray-800">
      </i>
      </a>
      </div>
  </section>
  <!-- ABOUT section -->
  <section id="about" class="section">
    <h1 class="text-5xl text-white sm:mt-20 mt-60">About me</h1>
    <p class="text-gray-100 mt-8">I am a teacher of digital technologies, multimedia arts, and science.
      I have taught computer science from grades 7 to 11, across a range of technologies including
      block-based coding, text-based languages such as Python and Javascript, SQL queries and database design,
      as well as using Flask to create a data-driven solutions. </p>
      <p class="text-gray-100 mt-8"> My background is in Science. I have a B.Sc. in Biochemistry (Hons),
      and a B.Ed. (secondary). After taking the CS50 course from HarvardX in
      computer science, I discovered that I really love programming. Since
      then, I have devoured programming courses and have tried to use my
      skills to solve problems for friends and coworkers. I just love the
        creativity and the challenge that coding brings! My more recent projects have used
        Python (including Flask and Django), and previously I have
          dabbled in Wordpress. Most recently I have been interested in 
        learning Vue JS (which this site was created with). </p>

  <p class="text-gray-100 mt-8">I'm looking for opportunities to do web
  development. If you think we could work together, please get in touch! </p>
      <div class="flex items-center gap-9 mt-14">
      <a class="btn">Contact me</a>
      <a href="/#skills" class="bg-transparent border-2 hover:bg-indigo-700 hover:border-transparent
    border-indigo-500 text-center  text-indigo-500 rounded-full h-14 w-14">
      <i class="fa-solid mt-5 fa-chevron-down animate-bounce end 
    text-indigo-500 hover:text-bg-gray-800">
      </i>
      </a>
      </div>

  </section>
 
 <!-- SKILLS --> 
  <section id="skills" class="section mt-80 sm:mt-20 mb-40 md:mb-0">
    <h1 class="text-5xl text-white ">Skills</h1>
    <div class="block md:flex md:gap-8 justify-between mt-8">
      <div class="w-3/4">
        <h3 class="font-nunito uppercase text-lg text-indigo-500 tracking-wide mt-4">Technical Skills</h3>
        <ul class="">
          <li class="text-gray-100 mt-1">version control (git)</li>
          <li class="text-gray-100 mt-1">analytical skills</li>
          <li class="text-gray-100 mt-1">data flow and wireframing</li>
          <li class="text-gray-100 mt-1">testing and debugging</li>
          <li class="text-gray-100 mt-1">api integration</li>
          <li class="text-gray-100 mt-1">responsive design</li>
        </ul>
      </div>
      <div class="w-full mt-10 sm:mt-0">
        <h2 class="font-nunito uppercase text-lg text-indigo-500 tracking-wide mt-4">Languages and Frameworks</h2>
          <ul class="">
          <li class="text-gray-100 mt-1">Python</li>
          <li class="text-gray-100 mt-1">HTML</li>
          <li class="text-gray-100 mt-1">CSS</li>
          <li class="text-gray-100 mt-1">Javascript</li>
          <li class="text-gray-100 mt-1">Flask</li>
          <li class="text-gray-100 mt-1">Django</li>
          <li class="text-gray-100 mt-1">Vue</li>
          <li class="text-gray-100 mt-1">Tailwind CSS</li>
        </ul>
      </div>
      </div>
      <div class="flex items-center gap-9 mt-14">
        <a class="btn">Contact me</a>
        <a href="/#work" class="bg-transparent border-2 hover:bg-indigo-700 hover:border-transparent
      border-indigo-500 text-center  text-indigo-500 rounded-full h-14 w-14">
        <i class="fa-solid mt-5 fa-chevron-down animate-bounce end 
      text-indigo-500 hover:text-bg-gray-800">
        </i>
        </a>
      </div>
  </section>
<!-- WORK SAMPLES --> 

  <section id="work" class="section">
    <h1 class="text-5xl text-white mt-60">Work Samples</h1>
  <div class="block md:flex my-20 md:gap-10 ">
    <div class="w-full bg-gray-200 rounded-lg mb-5 shadow-md ">
        <a href="#">
            <img class="rounded-t-lg object-cover h-30" src=".././assets/SLAS_dashboard.png" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Flask Coffeeshop</h5>
            </a>
            <p class="mb-8 font-normal text-gray-700 dark:text-gray-400">A coffee-ordering app, custom-designed in flask,
              for teachers to order a coffee with delivery from the Year 10 hospitality class.
              Authentication, ordering, keeping track of payments, order history, custom printed order labels, and more... </p>
            <a href="http://cheryl.pythonanywhere.com" class="btn mt-4 mb-10">
                View Project
            </a>
        </div>
    </div>
        <div class="w-full bg-gray-200 rounded-lg mb-5 shadow-md ">
        <a href="#">
            <img class="rounded-t-lg object-cover h-32 w-full object-center" src=".././assets/cazz.png" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Crafting with Cazz</h5>
            </a>
            <p class="mb-8 font-normal text-gray-700 dark:text-gray-400">A blog made in Wordpress for a prolific crafting blogger and
              card-maker. This was customised to make posting a simple process. She wanted a lot of photos in her blog posts and links back
              to her existing store. 
              
             </p>
            <a href="https://craftingwithcazz.com/" class="btn mt-4">
                View Project
            </a>
        </div>
    </div>
  </div>

  </section>

<!-- Contacct me --> 

  <section id="contact" class="section mt-32">
    <h1 class="text-5xl text-white mt-60 md:mt-20">Contact me</h1>
    <form class="w-full max-w-xs mt-10" autocomplete="off">
      <div class="mb-4">
        <label class="block text-gray-300 text-sm font-bold mb-2" for="name">Name:</label>
        <input class="appearance-none bg-gray-600 focus:bg-gray-500 focus:border-1 focus:border-gray-600 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none " type="text" id="name">
      </div>
      <div class="mb-4">
        <label class="block text-gray-300 text-sm font-bold mb-2" for="email">Email:</label>
        <input class="appearance-none bg-gray-600 focus:bg-gray-500 focus:border-1 focus:border-gray-600 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none " type="email" id="email">
      </div>
          <div class="mb-4">
        <label class="block text-gray-300 text-sm font-bold mb-2" for="message">Message</label>
        <textarea class="appearance-none bg-gray-600 focus:bg-gray-500 focus:border-1 focus:border-gray-600 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none " type="textarea" id="message" rows="6"></textarea>
      </div>
      <button class="btn" type="submit">Submit</button>
    </form>
  </section>
 
 </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  },
};
</script>
