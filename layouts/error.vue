<template>
  <div id="error">
    <main>
      <div class="content">
        <h1 class="text-8xl">
          {{ error.statusCode }}
        </h1>
        <small># hay algo que no fue bien #</small>
      </div>
      <aside>
        <p>Vuelve al <NuxtLink to="/">¿página principal?</NuxtLink></p>
      </aside>
    </main>
    <app-footer />
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style lang="postcss">
#error {
  @apply w-screen
  min-h-screen
  flex
  flex-col
  justify-center
  bg-gradient-to-b
  from-gray-300
  dark:from-gray-700;

  & main {
    @apply w-11/12
    mx-auto
    pt-12
    flex
    justify-center
    items-center
    flex-col
    md:w-10/12
    md:pt-10
    lg:w-8/12
    xl:w-7/12
    xl:pt-48;

    & aside {
      & p {
        @apply flex;

        & a {
          @apply ml-2
          block
          content-after;

          &:after {
            @apply block w-full h-0.5 bg-slate800 dark:bg-gray-500;
          }

          &:hover {
            @apply text-opacity-60;

            &:after {
              @apply bg-opacity-60;
            }
          }
        }
      }
    }
  }

  & footer {
    @apply mt-auto;
  }
}
</style>
