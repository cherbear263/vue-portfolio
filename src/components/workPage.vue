<!-- eslint-disable prettier/prettier -->
<template>

  <section class="pt-10">
    <h1 class="my-10 text-5xl text-white">Work Samples</h1>
    <div v-for="project in projects" :key="project.name" class="flex flex-row my-5 rounded-md">
      <div class="flex flex-col">
        <div class="">
          <a :href="project.projectLink">
            <img :src="project.imageData.url" :alt="project.imageData.alt"
              class="max-w-full rounded rounded-b-none cover" />
          </a>
        </div>


        <div class="bg-gray-700 rounded-md ">
          <div class="flex flex-col p-4">
            <a :href="project.projectLink">
              <h3 class="my-2 font-semibold text-white">{{project.title}}</h3>
            </a>
            <p class="text-gray-200">{{project.description}}</p>
            <ul class="flex flex-row flex-wrap gap-2 py-3">
              <li class="px-2 py-1 text-xs font-medium text-blue-900 uppercase bg-indigo-300 rounded-full"
                v-for="keyword in project.keywords" :key="keyword">
                {{keyword}}</li>
            </ul>
          </div>

        </div>


      </div>
    </div>


  </section>
</template>
<script>
import work from "../data/work.JSON";
export default {
  data() {
    return {
      projects: work,
    };
  },
};
</script>
