<template>
  <ul ref="root" class="property-list">
    <li class="header">
      <div class="container">Owner</div>
      <div class="property">Property</div>
      <div class="types">Type(s)</div>
    </li>
    <li v-for="(props, container) in data[props.scope]">
      <div class="container">{{ container }}</div>
      <ul class="properties">
        <li v-for="prop in props" class="property">
          <div class="name">{{ prop['name'] }}</div>
          <div class="type">{{ prop['types'].join(', ') }}</div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
  import { onMounted, ref } from 'vue'

  const root = ref(null)
  let data = ref({})

  const props = defineProps({
    url: {type: String, required: true},
    scope: {type: String, required: true}
  })

  onMounted(async () => {
    const element = root.value
    let changed = false
    data.value = await fetch(props.url).then(r => r.json())
  })
</script>
