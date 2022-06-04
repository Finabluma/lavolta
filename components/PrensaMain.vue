<template>
  <section>
    <h2 class="sr-only">{{ item.title }}</h2>
    <div class="enlaces">
      <nav id="breadcrumb" aria-label="Breadcrumb">
        <h2 class="sr-only">Breadcrumbs</h2>
        <div>
          <ol class="breadcrumbs" role="list">
            <li><NuxtLink to="/">Inicio</NuxtLink></li>
            <li><NuxtLink to="/prensa">Prensa</NuxtLink></li>
            <li>
              <i>{{ item.title }}</i>
            </li>
          </ol>
        </div>
      </nav>
    </div>
    <article>
      <h2 class="sr-only">contenido {{ item.title }}</h2>
      <div v-html="item.mainbody.value" class="body"></div>
      <figure v-if="item.secondimage.entity.fieldImagen">
        <nuxt-picture
          :src="item.secondimage.entity.fieldImagen.entity.field.url"
          :alt="item.secondimage.entity.fieldImagen.entity.field.alt"
          sizes="md:50vw lg:100vw"
        />
        <figcaption>
          {{ item.secondimage.entity.fieldImagen.entity.field.alt }}
        </figcaption>
      </figure>
      <div v-if="item.secondtext.entity.fieldBody" class="body">
        <div v-html="item.secondtext.entity.fieldBody.value"></div>
      </div>
      <div v-if="item.video.entity.fieldVideo" class="video">
        <video-player :src="item.video.entity.fieldVideo.entity.url" />
      </div>
      <aside>
        <p>Vuelve a <NuxtLink to="/prensa">Prensa</NuxtLink></p>
      </aside>
    </article>
  </section>
</template>

<script>
import VideoPlayer from "nuxt-video-player";

var moment = require("moment");
require("nuxt-video-player/src/assets/css/main.css");
export default {
  props: ["item"],
  data: () => ({
    moment: moment,
  }),
  components: {
    VideoPlayer,
  },
};
</script>

<style lang="postcss" scoped>
section {
  @apply relative
  z-30
  bg-gray-300
  w-10/12
  mx-auto
  pb-20
  md:w-10/12
  lg:w-8/12
  xl:w-7/12
  2xl:w-6/12
  dark:bg-gray-700;

  & .enlaces {
    @apply py-3
    md:py-6;

    & nav {
      @apply py-3 lg:py-6;

      & ol {
        @apply flex flex-wrap;

        & li {
          @apply font-hero
          lowercase
          leading-7
          flex
          items-center
          content-after;

          &:last-child::after {
            @apply content-none;
          }

          & a {
            @apply content-after;

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
  }

  & article {
    @apply w-full;

    & .body {
      @apply font-dejanire font-light
      leading-normal
      text-[21px]
      lg:text-[24px];

      & p {
        @apply py-3;
      }
    }

    & figure {
      @apply w-11/12 mx-auto md:w-6/12;
      & picture {
        @apply p-1 border border-white/60
        mb-2;
      }

      & figcaption {
        @apply text-[14px]
        font-hero;
      }
    }

    & figure,
    & .video {
      @apply flex flex-col
      items-center
      justify-center
      p-3;
    }

    & .video {
      @apply mt-3;

      & .v-player {
        @apply shadow-slate400 dark:shadow-md;
      }
    }

    & aside {
      @apply mt-8;
      & p {
        @apply flex;
      }
      & a {
        @apply ml-2 block content-after;

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
</style>
