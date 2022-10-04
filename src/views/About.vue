<template>
  <section id="about" class="section">
    <h1 class="mt-40 text-5xl text-white">About me</h1>
    <p class="mt-8 text-gray-100"> My educational background is in Science, though I dabbled a bit in web design
      design when I built an e-commerce site for sewing supplies. I was then
      then asked to teach digital technologies so I took a computer science
      course from HarvardX in order to upskill. I have been hooked ever since.
      I love the creativity and the challenge that coding brings, and I enjoy
      using my skills to solve problems for friends and coworkers.</p>

    <p class="mt-8 text-gray-100">After teaching and working with Python, SQL and Javascript, I have very recently
      discovered Vue and Nuxt and I am really enjoying using Javascript
      frameworks for frontend
      development and API integration. In fact, this portfolio was created in Vue. I love that I can create dynamic
      sites that turn into
      static pages which can be easily (and cheaply) hosted. </p>

    <div class="flex items-center gap-9 mt-14">
      <a class="btn" href="#contact">Contact me</a>
      <a href="/#skills"
        class="text-center text-indigo-500 bg-transparent border-2 border-indigo-500 rounded-full hover:bg-indigo-700 hover:border-transparent h-14 w-14">
        <i class="mt-5 text-indigo-500 fa-solid fa-chevron-down animate-bounce end hover:text-bg-gray-800">
        </i>
      </a>
    </div>

  </section>

  <!-- SKILLS -->
  <section id="skills" class="py-40">
    <h1 class="text-5xl text-white">Skills</h1>
    <div class="justify-between block mt-8 md:flex md:gap-8">
      <div class="w-3/4">
        <h3 class="mt-4 text-lg tracking-wide text-indigo-500 uppercase font-nunito">
          Technical Skills
        </h3>
        <ul class="">
          <li class="mt-1 text-gray-100">version control (git)</li>
          <li class="mt-1 text-gray-100">analytical skills</li>
          <li class="mt-1 text-gray-100">data flow and wireframing</li>
          <li class="mt-1 text-gray-100">testing and debugging</li>
          <li class="mt-1 text-gray-100">api integration</li>
          <li class="mt-1 text-gray-100">responsive design</li>
        </ul>
      </div>
      <div class="w-full">
        <h2 class="mt-4 text-lg tracking-wide text-indigo-500 uppercase font-nunito">
          Languages and Frameworks
        </h2>
        <ul class="">
          <li class="mt-1 text-gray-100">Python</li>
          <li class="mt-1 text-gray-100">HTML</li>
          <li class="mt-1 text-gray-100">CSS</li>
          <li class="mt-1 text-gray-100">Javascript</li>
          <li class="mt-1 text-gray-100">Flask</li>
          <li class="mt-1 text-gray-100">Django</li>
          <li class="mt-1 text-gray-100">Vue</li>
          <li class="mt-1 text-gray-100">Tailwind CSS</li>
          <li class="mt-1 text-gray-100">Nuxt</li>
        </ul>
      </div>
    </div>
    <div class="items-center hidden sm:flex gap-9 mt-14">
      <a href="/#contact" class="btn">Contact me</a>
      <a href="/#work"
        class="text-center text-indigo-500 bg-transparent border-2 border-indigo-500 rounded-full hover:bg-indigo-700 hover:border-transparent h-14 w-14">
        <i class="mt-5 text-indigo-500 fa-solid fa-chevron-down animate-bounce end hover:text-bg-gray-800">
        </i>
      </a>
    </div>
  </section>
</template>
