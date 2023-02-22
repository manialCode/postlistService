<template>
  <div class="about">
    <div class="true">
      <header class="bg-neutral-900 home-btn">
        <h1 class="fs-800 fw-bold">This is an about page</h1>
        <router-Link :to="{ name: 'home' }" class="btn btn-primary fw-bold"
          >Inicio</router-Link
        >
      </header>
      <div class="about_paragraph fs-600">
        <p class="text-primary-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
          molestiae qui! Totam, iusto? Minima eaque recusandae odio nihil
          accusantium aliquid qui, dolor doloribus cumque iure nulla voluptatem
          eius omnis eveniet! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. <br />
          in accusantium ea laboriosam laborum quae facilis rerum tenetur porro
          odit, voluptatibus, eos quos. Magnam officia deleniti possimus,
          perspiciatis libero adipisci?. <br />Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quae eum fugit quasi temporibus officiis
          impedit explicabo minus ab corporis magni porro hic tenetur,
          voluptates unde, modi perferendis dolores autem in, <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          assumenda nihil molestias facere, incidunt animi. Nihil ex porro
          officia, tempore delectus minus inventore? Voluptatem eaque iure,
          repudiandae aliquid, esse voluptate, omnis earum ab distinctio beatae
          nemo deserunt perferendis nulla! Alias consectetur adipisci eos, harum
          libero rem obcaecati excepturi inventore quae deleniti, iusto commodi
          vel dolores delectus nesciunt, fuga quis quam voluptates nihil quaerat
          nobis rerum. Repellendus dolorem quaerat nam, quas maxime perspiciatis
          odit tempore aliquam corporis sunt! At explicabo magni, reprehenderit
          voluptatem nulla, quis illum consequatur non, libero exercitationem
          quo tempore tempora assumenda mollitia vero maxime quas doloremque
          fugiat fuga.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .about .true {
    text-align: center;

    .home-btn {
      padding: 1em;
    }

    .home-btn > * {
      margin: 1em;
    }

    h1 {
      color: $clr-primary-400;
    }

    .about_paragraph {
      margin: 0 auto;
      padding: 2em;
    }
  }

  @media (min-width: 60em) {
    .about .true {
      background-color: #111;
    }

    .home-btn {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
