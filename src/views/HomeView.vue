<template>
  <nav class="container">
    <h1 class="fs-900 fw-bold">Bienvenido</h1>
    <div>
      <router-link :to="{ name: 'posts' }" class="btn btn-primary fw-bold"
        >Post List</router-link
      >
      <router-link :to="{ name: 'about' }" class="btn btn-primary fw-bold"
        >About</router-link
      >
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .container {
    height: fit-content;
    display: flex;
    justify-content: space-between;

    padding: 1em;

    h1 {
      color: $clr-primary-400;
    }

    div {
      align-self: center;
    }

    .btn {
      margin: 0 1rem;
    }
  }

  @media (max-width: 40em) {
    .container {
      flex-direction: column;
    }
  }
</style>
