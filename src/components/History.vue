<template>
  <section class="history">
    <div class="history__item">
      <p class="history__price">{{ title }}</p>
      <p class="history__account-number">номер счёта</p>
      <p class="history__date">дата перевода</p>
    </div>
  </section>
</template>

<script>
import { bus } from './../index.js';

export default {
  data () {
    return {
      title: 'Header title',
    }
  },
  created() {
    bus.$on('message', data => {
      this.title = data;
    })
  }
}
</script>

<style>

</style>
