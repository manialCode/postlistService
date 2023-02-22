<script setup>
  import PostService from "../services/PostService";
  import { onMounted } from "vue";
  import PostItem from "../components/PostItem.vue";

  const service = new PostService();
  const posts = service.getPosts();

  onMounted(async () => await service.fetchAll());
</script>

<template>
  <div>
    <h1 class="fs-900 fw-bold">Listado de Posts</h1>
    <router-Link :to="{ name: 'home' }" class="btn btn-primary"
      >Inicio</router-Link
    >
    <ul class="post-list">
      <li v-for="item in posts" :key="item.id">
        <router-link
          :to="{
            name: 'PostDetail',
            params: {
              id: item.id,
            },
          }">
          <PostItem :title="item.title" :body="item.body" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  div {
    h1 {
      color: azure;
      padding: 1rem;
    }
  }

  ul {
    margin: 0;
    padding: 0;
  }
  .post-list {
    list-style: none;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    place-items: center;

    padding: 2.5rem;
    gap: 3rem;

    font-family: var(--ff-body);

    ul {
      margin: 1rem;
    }
  }

  @media (max-width: 40em) {
    .post-list {
      flex-direction: column;
      flex-wrap: nowrap;
    }
  }
</style>
