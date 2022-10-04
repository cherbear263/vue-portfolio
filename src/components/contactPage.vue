<!-- eslint-disable no-undef -->
<!-- eslint-disable prettier/prettier -->
<template>
  <section id="contact" class=" section">
    <h1 class="text-5xl text-white">Contact me</h1>
    <form class="w-full max-w-xs mt-10" @submit.prevent="sendMail" autocomplete="off">
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-300" for="name">Name:</label>
        <input
          class="w-full px-3 py-2 leading-tight text-gray-300 bg-gray-600 rounded appearance-none focus:bg-gray-500 focus:border-1 focus:border-gray-600 focus:outline-none "
          name="name" type="text" id="name" v-model="formValues.name" />
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-300" for="email">Email:</label>
        <input
          class="w-full px-3 py-2 leading-tight text-gray-300 bg-gray-600 rounded appearance-none focus:bg-gray-500 focus:border-1 focus:border-gray-600 focus:outline-none "
          name="email" type="email" id="email" v-model="formValues.email" />
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-300" for="message">Message</label>
        <textarea
          class="w-full px-3 py-2 leading-tight text-gray-300 bg-gray-600 rounded appearance-none focus:bg-gray-500 focus:border-1 focus:border-gray-600 focus:outline-none "
          type="textarea" name="message" id="message" rows="6" v-model="formValues.message"></textarea>
      </div>
      <input class="btn" type="submit" value="submit">
    </form>
  </section>
</template>
<script>
export default {
  name: 'contactPage',
  data() {
    return {
      formValues: {
        name: '',
        email: '',
        message: ''

      }
    }
  },
  methods: {
    sendMail() {
      // connect 3rd party app for sending mail

      console.log('form values ', this.formValues)
      // clear form
      this.formValues.name = ''
      this.formValues.email = ''
      this.formValues.message = ''
    }
  }


}


</script>
