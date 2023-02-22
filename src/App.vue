<script setup></script>

<template>
  <router-view />
</template>

<style lang="scss">
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  #app {
    font-family: var(--ff-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    color: #2c3e50;
    background-color: #111;
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 7px;
    background-color: #111;
  }

  ::-webkit-scrollbar-thumb {
    background-color: $clr-primary-400;
    border-radius: 7px;
  }
</style>
