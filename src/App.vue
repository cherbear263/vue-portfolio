<template>
  <div class="py-16">
    <nav class="fixed inset-x-0 top-0 z-10 h-16 bg-gray-900 ">
      <div class="flex items-center justify-between max-w-screen-xl py-5 mx-9 xl:mx-auto">
        <a class="text-white" href="/#intro">Cheryl Jones</a>
        <ul class="flex gap-4">
          <a href="/#about" class="text-white hover:text-blue-500">About</a>
          <a href="/#work" class="text-white hover:text-blue-500">Work</a>
          <a href="/#contact" class="text-white hover:text-blue-500">Contact</a>
        </ul>
      </div>
    </nav>
    <!-- SIDEBAR -->
    <div class="fixed left-0 z-10 invisible w-1/4 h-screen bg-gray-900 sm:visible top-16">
      <img class="object-contain shadow-inner" src="./assets/2018.png" />

      <div class="flex justify-center gap-3 mx-auto mt-6">
        <a href="https://github.com/cherbear263"><img class="w-8 h-8" src="./assets/icons/github.png"
            alt="github icon" /></a>
        <a href="https://www.linkedin.com/in/cheryl-jones-733179142/"><img class="w-8 h-8"
            src="./assets/icons/linkedin.png" alt="linkedin icon" /></a>
      </div>
    </div>
    <!-- MAIN CONTENT -->
    <div id="main" class="absolute top-0 right-0 w-full min-h-screen bg-gray-800 sm:w-3/4">
      <router-view />
    </div>
  </div>
</template>

<style>
boyd {
  overflow: hidden;
}
</style>
