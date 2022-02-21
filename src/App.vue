<template>
<div>
<nav class="bg-gray-900 top-0 z-10 w-full fixed h-16 ">
  <div class="flex justify-between items-center py-5 max-w-screen-xl mx-9 xl:mx-auto">
    <router-link class="text-white" to="/">Cheryl <br class="sm:hidden"/> Jones</router-link>
    <ul class="flex gap-4">
      <a href="#" class="text-white hover:text-blue-500">About</a>
      <a href="#" class="text-white hover:text-blue-500">Work</a>
      <a href="#" class="text-white hover:text-blue-500">Contact</a>
    </ul>
  </div>
</nav>
<!-- SIDEBAR -->
<div class="invisible sm:visible fixed left-0 top-16 z-10 bg-gray-900 w-1/4 h-screen overflow-y-auto">
    <img class="object-contain shadow-inner" src="./assets/2018.png"/>

    <div class="flex mx-auto gap-3 mt-6 justify-center">
      <a href="#"><img class="h-8 w-8" src="./assets/icons/github.png" alt="github icon" /></a>
      <a href="#"><img class="h-8 w-8" src="./assets/icons/linkedin.png" alt="linkedin icon" /></a>
    </div>
</div>
  <!-- MAIN CONTENT -->
<div class="absolute bg-gray-800 w-full sm:w-3/4 top-0 right-0 min-h-screen">
<router-view/>
</div>
</div>
</template>

<style>

</style>
