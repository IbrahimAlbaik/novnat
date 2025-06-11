<template>
  <section class="faq_one" id="faqs">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="faq_one_left wow slideInLeft">
            <div class="block-title text-left">
              <p>frequently asked questions</p>
              <h3>have any question?</h3>
              <div class="leaf">
                <img src="~/assets/images/resources/leaf.png" alt="leaf" />
              </div>
            </div>
            <div class="faq_one_image">
              <div class="phone_number">
                <p>
                  email us<a :href="`mailto:${aboutNovNat.email}`">{{
                    aboutNovNat.email
                  }}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="faq_one_right wow slideInLeft">
            <div class="accrodion-grp" data-grp-name="faq-one-accrodion">
              <div class="accordion-container-one">
                <div class="ac" v-for="(faq, index) in faqs" :key="faq.id" :class="{ 'is-active': isOpen(index) }">
                  <h2 class="ac-q" tabIndex="0" @click="toggle(index)">
                    {{ faq.question }}
                  </h2>
                  <div class="ac-a" :style="getContentStyle(index)">
                    <div class="accordion__content-desc" ref="content" v-html="faq.answer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FaqOne",
  props: ["faqs"],
  data() {
    return {
      openIndex: null,
      heights: {},
    };
  },
  computed: {
    aboutNovNat() {
      return this.$store.state.novnat;
    },
  },
  mounted() {
    // Initialize heights after component is mounted and when content changes
    this.updateHeights();
    // Add a small delay to ensure content is fully rendered
    setTimeout(this.updateHeights, 100);
  },
  methods: {
    updateHeights() {
      const contents = this.$refs.content;
      if (Array.isArray(contents)) {
        contents.forEach((content, index) => {
          if (content) {
            this.heights[index] = content.scrollHeight;
          }
        });
      }
    },
    toggle(index) {
      // Update heights before toggling to ensure accurate measurements
      this.$nextTick(() => {
        this.updateHeights();
      });
      this.openIndex = this.openIndex === index ? null : index;
    },
    isOpen(index) {
      return this.openIndex === index;
    },
    getContentStyle(index) {
      const isOpen = this.isOpen(index);
      return {
        maxHeight: isOpen ? `${this.heights[index]}px` : '0',
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        transition: 'all 0.3s ease-in-out'
      };
    }
  },
  watch: {
    // Watch for changes in faqs data
    faqs: {
      handler() {
        this.$nextTick(() => {
          this.updateHeights();
        });
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.faq_one_image {
  background-image: url("/assets/images/resources/faq.webp");
}

.ac {
  margin-top: 10px;
  padding: 10px;
  background: #ffffff;
  box-sizing: border-box;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.ac:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.ac > .ac-q {
  font-size: 1rem;
  color: #444;
  padding: 15px 30px 15px 15px;
  margin: 0;
  text-decoration: none;
  display: block;
  cursor: pointer;
  position: relative;
  font-weight: 600;
  transition: all 0.3s ease;
}

.ac.is-active .ac-q {
  color: #5a8b50 !important;
}

.ac > .ac-q::after {
  content: "+";
  text-align: center;
  width: 15px;
  right: 15px;
  top: 50%;
  transform: translate(0, -50%);
  position: absolute;
  transition: transform 0.3s ease;
}

.ac > .ac-a {
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  padding: 0 15px;
  will-change: max-height, opacity, visibility;
}

.ac > .ac-a .accordion__content-desc {
  padding: 15px 0;
  color: #878e9c;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
}

.ac.is-active > .ac-q::after {
  content: "\2013";
  color: #5a8b50;
  transform: translate(0, -50%) rotate(180deg);
}

.ac.is-active > .ac-a {
  visibility: visible;
  opacity: 1;
}

/* Add transition for height changes */
.ac-a {
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0s;
}

.ac-a[style*="visibility: hidden"] {
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0s 0.3s;
}
</style>
