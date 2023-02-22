<script setup>
  import { defineProps } from "vue";

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
      default: "Empty",
    },
  });
</script>

<template>
  <div class="post-item">
    <h3 class="fs-650">{{ props.title }}</h3>
    <p class="fs-400 fw-regular">{{ props.body }}</p>
  </div>
</template>

<style lang="scss" scoped>
  h3 {
    margin: 0;
  }

  .post-item {
    width: 18em;
    height: 23em;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .post-item > * {
      flex-grow: 1;
    }

    border-radius: 0.75rem;
    padding: 1rem;

    background-color: $clr-primary-400;
    box-shadow: -0.7rem 0.7rem 0 $clr-neutral-700;
    overflow: hidden;

    color: rgb(30, 0, 49);

    transition: all 0.3s ease;

    h3 {
      margin: 2rem;
      color: $clr-neutral-700;
      text-shadow: -0.08rem 0.05rem 0 $clr-neutral-800;

      text-decoration: underline;
      text-transform: uppercase;

      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
      letter-spacing: 0;
    }

    &:hover {
      background-color: darken($clr-neutral-800, 10%);
      color: $clr-primary-400;
      h3 {
        color: $clr-accent-100;
      }
    }
  }

  *::selection {
    background-color: $clr-primary-400;
    color: $clr-neutral-800;
  }

  @media (max-width: 20em) {
    .post-item {
      width: 15em;
    }
  }

  @media (min-width: 30em) {
    .post-item {
      width: 14em;
      height: 16em;

      h3 {
        margin: 0.7rem;
      }
    }
  }
</style>
