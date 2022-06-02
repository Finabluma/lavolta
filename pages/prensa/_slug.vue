<template>
  <div id="post">
    <app-header />
    <main>
      <prensa-header :item="res.entity" />
      <prensa-main :item="res.entity" />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import PrensaHeader from "~/components/PrensaHeader.vue";
import PrensaMain from "~/components/PrensaMain.vue";
import AppFooter from "~/components/AppFooter.vue";
import PrensaByAlias from "~/graphql/prensaByAliasquery";

export default {
  name: "prensa",
  components: {
    PrensaHeader,
    PrensaMain,
    AppHeader,
    AppFooter,
  },
  async asyncData({ app, params, redirect }) {
    const client = app.apolloProvider.defaultClient;
    const res = await client
      .query({
        query: PrensaByAlias,
        variables: { path: "/" + params.slug },
      })
      .then(({ data }) => data && data.route);
    if (!res) {
      redirect("/404");
    }
    return { res };
  },
};
</script>

<style lang="postcss">
#post {
  @apply bg-gray-300 dark:bg-gray-700;
  & section {
    & h2,
    & h3,
    & h4,
    & h5,
    & p,
    & ul {
      @apply mb-6;
    }

    & h2 {
      @apply text-4xl;
    }

    & h3 {
      @apply text-3xl;
    }

    & h4 {
      @apply text-2xl;
    }

    & blockquote p,
    & blockquote cite {
      @apply text-restaurante
      leading-tight;
    }
  }
}
</style>
