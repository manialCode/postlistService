<script setup>
  import PostService from "@/services/PostService";
  import { onMounted } from "vue";
  import { useRoute } from "vue-router";

  const service = new PostService();
  const post = service.getPost();

  onMounted(async () => {
    const route = useRoute();
    let elm = route.params.id;
    await service.fetchById(elm);
  });
</script>

<template>
  <h1 class="text-primary-400 fw-bold">Detalles del post: {{ post.userId }}</h1>
  <div class="post-container bg-primary-400">
    <div class="box">
      <h3 class="fs-750 fw-semi-bold text-primary-400">{{ post.title }}</h3>
    </div>
    <p class="fw-bold fs-4 text-neutral-800">{{ post.body }}</p>
  </div>
  <router-Link :to="{ name: 'posts' }" class="btn btn-primary fw-bold fs-600"
    >Volver</router-Link
  >
  <router-view />
</template>

<style lang="scss" scoped>
  .post-container {
    width: 90vw;
    width: 90svw;

    display: grid;
    place-items: center;
    align-content: center;
    margin: 2rem auto;
    text-align: center;
  }

  .post-container {
    height: fit-content;
    border-radius: 1rem;
    overflow: hidden;

    .box {
      background-color: $clr-neutral-800;
      border-radius: 0.5rem 0.5rem 0 0;
      padding: 1em;
      width: 100%;
    }

    h3 {
      text-transform: uppercase;
      padding: 0.5em;
    }

    p {
      padding: 1em;
    }

    text-align: center;
  }

  @media (min-width: 30em) {
    .post-container {
      p {
        font-size: $fs-900;
      }
    }
  }
</style>
