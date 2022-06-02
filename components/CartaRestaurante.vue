<template>
  <div class="accordion-wrapper" :class="accordionClasses">
    <div @click="toggleAccordion" class="panel-header cursor-pointer">
      <slot></slot>
    </div>
    <div class="panel-body">
      <div class="panel-items">
        <div v-for="item in items" :key="item.id" class="menu-item">
          <div class="nombre_precio">
            <span>{{ item.nombre }}</span>
            <span v-if="item.precio">{{ item.precio }}€</span>
            <span v-else><i>s/peso</i></span>
          </div>
          <div v-if="item.do" class="do">
            <div
              v-for="origen in item.do"
              :key="origen.entity.entityLabel"
              class="do"
            >
              <abbr title="Denominación de Origen">D.O.</abbr
              >{{ origen.entity.entityLabel }}
            </div>
          </div>
          <div v-if="item.variedad" class="variedad">
            <div v-for="cat in item.variedad" :key="cat.entity.entityLabel">
              {{ cat.entity.entityLabel }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    toggleAccordion() {
      this.visible = !this.visible
    },
  },
  computed: {
    accordionClasses: function () {
      return {
        'is-closed': !this.visible,
        'is-open': this.visible,
        // 'is-dark': !this.visible,
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.accordion-wrapper {

  & .panel-header {
    @apply font-ibm
    align-middle
    capitalize
    transition-opacity
    content-after
    flex
    justify-between
    items-center
    py-3
    border-b
    border-slate400
    lg:px-1
    hover:opacity-80
    dark:border-gray-500;

    & h3{
      @apply block
        text-altheader
        font-ibm
        align-middle
        capitalize
    }
  }

  & .panel-body {
    @apply overflow-hidden
    h-auto
    transition-all
    duration-300;

    & .panel-items {
      @apply py-4 w-full;

      & .menu-item {
        @apply border-b
        border-slate400
        px-1
        py-2
        dark:border-gray-500;

        &:first-child {
          @apply pt-0;
        }

        &:last-child {
          @apply border-b-0;
        }

        & .nombre_precio {
          @apply flex
          justify-between
          font-hero
          text-paragraph;

          & span:first-child {
            @apply mr-5;
          }

          & span:last-child {
            @apply flex-shrink;
          }
        }

        & .do {
          & abbr {
            @apply font-medium
            no-underline;
          }
        }

        & .variedad {
          @apply flex flex-wrap;

          & div {
            @apply flex
            items-center
            content-after
            italic
            text-gray-500
            dark:text-gray-400;

            &:after {
              @apply block
              mx-1
              h-1
              w-1
              rounded-full
              bg-gray-500;
            }

            &:last-child:after {
              @apply hidden;
            }
          }
        }
      }
    }
  }

  &.is-open {
    & .panel-header, & .panel-header:hover {
      @apply opacity-80;
    }
  }

  &.is-closed {
    & .panel-body {
      @apply max-h-0;
    }
  }
}

.accordion-wrapper:last-child {
  & .panel-header {
    @apply border-0;
  }
}

.accordion-wrapper.is-open:last-child {
  & .panel-header {
    @apply border-b;
  }
}

/* .accordion-wrapper:nth-child(2) {
  & .panel-header {
    &:after {
      @apply bg-tinto;
    }
  }
}

.accordion-wrapper:nth-child(3) {
  & .panel-header:after {
    @apply bg-yellow-200;
  }
}

.accordion-wrapper:nth-child(4) {
  & .panel-header {

    &:after {
      @apply bg-rosa;
    }
  }
} */

/* .accordion-wrapper:last-child {
  & .panel-header {
    @apply border-0;

    &:after {
      @apply bg-red-400;
    }
  }
} */

/* .accordion-wrapper:last-child.is-open .panel-header {
  @apply border-b;
} */
</style>
