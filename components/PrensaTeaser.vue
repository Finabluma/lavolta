<template>
  <section :class="teaserClass">
    <header>
      <h1>{{ title }}</h1>
      <span>{{ subtitle }}</span>
    </header>
    <div class="list-articles">
      <ul>
        <li
          v-for="teaser in teasers"
          :key="teaser.nid"
          itemscope
          itemtype="http://schema.org/BlogPosting"
        >
          <article>
            <nuxt-link
              :to="{
                name: 'prensa-slug',
                params: { slug: teaser.url.path.replace('/', '') },
              }"
            >
              <div class="img">
                <div v-if="teaser.media" class="has-img">
                  <nuxt-picture
                    :src="teaser.media.entity.field.img.url"
                    :alt="teaser.media.entity.field.alt"
                    :sizes="size"
                    format="webp"
                    lazy
                  />
                </div>
                <div class="has-not-img" v-else>
                  <SVGMarieta />
                </div>
              </div>

              <div class="content">
                <h2>{{ teaser.title }}</h2>
                <ul>
                  <li>
                    <span
                      itemprop="author"
                      itemscope
                      itemtype="http://schema.org/Person"
                    >
                      <span itemprop="name">{{ teaser.user.entity.name }}</span>
                    </span>
                  </li>
                  <li>
                    <time
                      datetime="2020-01-09"
                      itemprop="dateCreated pubdate datePublished"
                    >
                      {{ moment(teaser.created).format("D MMM YY") }}
                    </time>
                  </li>
                </ul>
              </div>
            </nuxt-link>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
var moment = require("moment");
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default {
  name: "PrensaTeasers",
  props: {
    teasers: {
      type: Array,
      // required: true,
    },
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    size: {
      type: String,
      // required: true,
    },
    layout: {
      type: String,
    },
  },
  data: () => ({
    moment: moment,
  }),
  computed: {
    teaserClass() {
      return {
        teaser: true,
        aside: this.layout === "aside",
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
.teaser {
  @apply w-full
  mx-auto
  mb-10
  pt-20
  sm:w-11/12
  md:pt-24
  lg:w-10/12
  xl:w-9/12
  2xl:w-7/12;

  & header {
    @apply mb-5 px-6
    sm:py-4
    md:py-8
    md:mb-8
    lg:py-10
    lg:mb-0;

    & h1 {
      @apply font-dejanire content-after mb-2
      text-5xl
      lg:text-7xl;
    }

    & span {
      @apply font-hero font-light;
    }
  }

  & .list-articles {
    @apply p-2;

    & ul {
      & li {
        @apply mb-5;

        & a {
          @apply flex items-center justify-around sm:justify-start sm:items-start dark-hover:opacity-80 transition-opacity;

          & .img {
            @apply w-20 h-20 overflow-hidden sm:mr-6 lg:w-24 lg:h-24;
          }

          & .has-img,
          & .has-not-img {
            @apply w-full h-full flex justify-center p-1 border border-slate300 rounded-full bg-slate100
            dark:border-black/40 dark:bg-black/20;
          }

          & picture {
            @apply rounded-full overflow-hidden;
            height: fit-content;
          }

          & .content {
            @apply w-8/12 border-b border-black/30 sm:mb-3 sm:w-9/12 md:mb-5 lg:w-9/12 xl:w-10/12 dark:border-gray-500;

            & h2 {
              @apply font-hero font-light text-altheader lg:text-left;
            }

            & ul {
              @apply text-xs flex
              justify-start;

              & li {
                @apply border-b-0;

                &:first-child {
                  @apply content-after flex items-center;
                }
              }
            }
          }
        }

        &:last-child a .content {
          @apply border-b-0;
        }
      }
    }
  }
}

.aside {
  @apply lg:w-full py-0 my-0;

  & header {
    @apply py-1 mb-3 flex flex-col justify-center;
    & h1 {
      @apply text-altheader mb-2;
    }

    & span {
      @apply font-hero font-light;
    }
  }
  & .list-articles {
    @apply w-full;
  }
  & .list-articles ul {
    @apply md:flex
    md:justify-center;

    & li {
      @apply md:mr-5;

      &:last-child {
        @apply md:mr-0;
      }

      & a {
        @apply md:flex-row
        md:items-start
        md:justify-around
        lg:justify-center
        md:mb-0
        md:px-3
        md:py-2
        md:border
        md:border-slate400
        md:bg-white/50
         2xl:pt-5
        dark:border-gray-700
        dark:md:bg-gray-500
        dark:md:bg-opacity-30;

        & .content {
          @apply md:border-b-0
          md:mb-1 md:w-2/3;

          & h2 {
            @apply md:mx-0
            md:text-2xl
            md:leading-tight
            lg:text-4xl;
          }

          & ul {
            @apply mt-1;

            & li {
              @apply mr-0 w-auto md:mb-0;
            }
          }
        }
      }
    }
  }
}
</style>
