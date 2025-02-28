<script setup>
import DefaultTheme from 'vitepress/theme';
const { Layout: DefaultLayout } = DefaultTheme;
</script>

<template>
  <DefaultLayout>
    <template #content-bottom>
      <Footer />
    </template>
  </DefaultLayout>
</template>
