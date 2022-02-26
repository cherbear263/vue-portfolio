<template>
<div class="max-w-xs mx-auto sm:mx-20 xl:mx-40 sm:max-w-xl ">
  <section id="intro" class="section">
    <h1 class="mt-40 text-white sm:mt-60 text-7xl" >Cheryl Jones</h1>
    <h3 class="mt-4 text-lg tracking-wide text-indigo-500 uppercase font-nunito">web developer</h3>
    <p class="mt-8 text-gray-100">Hi! I'm a web developer and teacher based in Queensland, Australia. I love helping people find creative solutions to problems, and providing a user experience that is accessible and easy to use.
</p>
    <div class="flex items-center gap-9 mt-14">
      <a class="btn">Contact me</a>
      <a href="/#about" class="text-center text-indigo-500 bg-transparent border-2 border-indigo-500 rounded-full hover:bg-indigo-700 hover:border-transparent h-14 w-14">
      <i class="mt-5 text-indigo-500 fa-solid fa-chevron-down animate-bounce end hover:text-bg-gray-800">
      </i>
      </a>
      </div>
  </section>
  <!-- ABOUT section -->
  <section id="about" class="section">
    <h1 class="mt-40 text-5xl text-white">About me</h1>
    <p class="mt-8 text-gray-100">I am a teacher of digital technologies, multimedia arts, and science.
      I have taught computer science from grades 7 to 11, using a range of technologies including
      block-based coding, text-based languages such as Python and Javascript, SQL queries and database design,
      as well as using Flask to create a data-driven solutions. </p>
      <p class="mt-8 text-gray-100"> My educational background is in Science, though I dabbled a bit in web design
        when I built an e-commerce site for sewing supplies. I was then asked to teach digital technologies so
        I took a computer science course from HarvardX in order to upskill. I have been hooked ever since.
        I love the creativity and the challenge that coding brings, and I enjoy using my skills to solve
        problems for friends and coworkers. My more recent projects have used
        Python (including Flask and Django), and previously I have
          dabbled in Wordpress. Most recently I have been interested in 
        learning Vue JS (which this site was created with). </p>

      <div class="flex items-center gap-9 mt-14">
      <a class="btn">Contact me</a>
      <a href="/#skills" class="text-center text-indigo-500 bg-transparent border-2 border-indigo-500 rounded-full hover:bg-indigo-700 hover:border-transparent h-14 w-14">
      <i class="mt-5 text-indigo-500 fa-solid fa-chevron-down animate-bounce end hover:text-bg-gray-800">
      </i>
      </a>
      </div>

  </section>
 
 <!-- SKILLS --> 
  <section id="skills" class="section mt-80 md:mb-0">
    <h1 class="text-5xl text-white">Skills</h1>
    <div class="justify-between block mt-8 md:flex md:gap-8">
      <div class="w-3/4">
        <h3 class="mt-4 text-lg tracking-wide text-indigo-500 uppercase font-nunito">Technical Skills</h3>
        <ul class="">
          <li class="mt-1 text-gray-100">version control (git)</li>
          <li class="mt-1 text-gray-100">analytical skills</li>
          <li class="mt-1 text-gray-100">data flow and wireframing</li>
          <li class="mt-1 text-gray-100">testing and debugging</li>
          <li class="mt-1 text-gray-100">api integration</li>
          <li class="mt-1 text-gray-100">responsive design</li>
        </ul>
      </div>
      <div class="w-full mt-10 sm:mt-0">
        <h2 class="mt-4 text-lg tracking-wide text-indigo-500 uppercase font-nunito">Languages and Frameworks</h2>
          <ul class="">
          <li class="mt-1 text-gray-100">Python</li>
          <li class="mt-1 text-gray-100">HTML</li>
          <li class="mt-1 text-gray-100">CSS</li>
          <li class="mt-1 text-gray-100">Javascript</li>
          <li class="mt-1 text-gray-100">Flask</li>
          <li class="mt-1 text-gray-100">Django</li>
          <li class="mt-1 text-gray-100">Vue</li>
          <li class="mt-1 text-gray-100">Tailwind CSS</li>
        </ul>
      </div>
      </div>
      <div class="items-center hidden sm:flex gap-9 mt-14">
        <a class="btn">Contact me</a>
        <a href="/#work" class="text-center text-indigo-500 bg-transparent border-2 border-indigo-500 rounded-full hover:bg-indigo-700 hover:border-transparent h-14 w-14">
        <i class="mt-5 text-indigo-500 fa-solid fa-chevron-down animate-bounce end hover:text-bg-gray-800">
        </i>
        </a>
      </div>
  </section>
<!-- WORK SAMPLES --> 

  <section id="work" class="section flex xl:w-[calc(100%_+_10rem)] mr-0 mt-80 mb-64">
    <h1 class="text-5xl text-white mt-60">Work Samples</h1>
  <div class="block my-20 lg:flex lg:gap-20 ">
    <div class="w-full mb-10 bg-gray-600 rounded-lg shadow-md xl:w-2/3 ">
        <a href="#">
            <img class="object-cover object-center w-full h-32 rounded-t-lg" src=".././assets/SLAS_dashboard.png" alt="" />
        </a>
        <div class="p-5 pb-10">
            <a href="#">
                <h5 class="mb-2 text-lg font-bold tracking-wide text-indigo-400 uppercase font-nunito">Flask Coffeeshop</h5>
            </a>
            <p class="mb-8 font-normal text-gray-300 dark:text-gray-200">A coffee-ordering app, custom-designed in flask,
              for teachers to order a coffee with delivery from the Year 10 hospitality class.
              Authentication, ordering, keeping track of payments, order history, custom printed order labels, and more... </p>
            <a href="http://cheryl.pythonanywhere.com" class="btn">
                View Project
            </a>
        </div>
    </div>
    
        <div class="w-full mb-10 bg-gray-600 rounded-lg shadow-md xl:w-2/3 ">
        <a href="#">
            <img class="object-cover object-center w-full h-32 rounded-t-lg" src=".././assets/cazz.png" alt="" />
        </a>
        <div class="p-5 pb-8">
            <a href="#">
                <h5 class="mb-2 text-lg font-bold tracking-wide text-indigo-400 uppercase font-nunito">Crafting with Cazz</h5>
            </a>
            <p class="mb-8 font-normal text-gray-300 dark:text-gray-400">A blog made in Wordpress for a prolific crafting blogger and
              card-maker. This was customised to make posting a simple process. She wanted a lot of photos in her blog posts and links back
              to her existing store. 
              
             </p>
            <a href="https://craftingwithcazz.com/" class="btn">
                View Project
            </a>
        </div>
    </div>
  </div>

  </section>

<!-- Contact me --> 

  <section id="contact" class="mb-10 section">
    <h1 class="text-5xl text-white">Contact me</h1>
    <form class="w-full max-w-xs mt-10" autocomplete="off">
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-300" for="name">Name:</label>
        <input class="w-full px-3 py-2 leading-tight text-gray-300 bg-gray-600 rounded appearance-none focus:bg-gray-500 focus:border-1 focus:border-gray-600 focus:outline-none " type="text" id="name">
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-300" for="email">Email:</label>
        <input class="w-full px-3 py-2 leading-tight text-gray-300 bg-gray-600 rounded appearance-none focus:bg-gray-500 focus:border-1 focus:border-gray-600 focus:outline-none " type="email" id="email">
      </div>
          <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-300" for="message">Message</label>
        <textarea class="w-full px-3 py-2 leading-tight text-gray-300 bg-gray-600 rounded appearance-none focus:bg-gray-500 focus:border-1 focus:border-gray-600 focus:outline-none " type="textarea" id="message" rows="6"></textarea>
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
