<template>
  <footer class="custom-footer">
    © 2025 ForNet Project - DFG gefördert
    <div class="social-links">
      <a 
        href="https://github.com/vuejs/vitepress" 
        class="github-link"
        target="_blank"
      >
        GitHub Repository
      </a>
    </div>
  </footer>
</template>

<style scoped>
.custom-footer {
  padding: 1.5rem;
  text-align: center;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  margin-top: 4rem;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
}

.social-links {
  margin-top: 1rem;
}

.github-link {
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: opacity 0.2s;
}

.github-link:hover {
  opacity: 0.7;
}
</style>
