<script setup>
import DefaultTheme from 'vitepress/theme';
import Footer from './components/Footer.vue'; // Import the Footer component
const { Layout: DefaultLayout } = DefaultTheme;
</script>

<template>
  <DefaultLayout>
    <template #content-bottom>
      <Footer /> <!-- Use the Footer component -->
    </template>
  </DefaultLayout>
</template>
