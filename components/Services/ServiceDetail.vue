<template>
  <section class="service_detail">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-4">
          <div class="service_details_left">
            <ul class="list-unstyled service_all_list">
              <li><a href="#">All Services</a></li>
              <li v-for="service in services" :key="service.id">
                <nuxt-link
                  :to="'/service-detail/' + service.id"
                  v-if="singleService"
                  :class="service.id == singleService.id ? 'active' : ''"
                  >{{ service.title }}</nuxt-link
                >
              </li>
            </ul>
            <div class="need_help_box">
              <h2>Need Help?</h2>
              <p>
                Speak with a human to filling out a form? call corporate office
                and we will connect you with a team member who can help.
              </p>
              <h3><span class="icon-phone-call"></span>666 888 0000</h3>
            </div>
            <div class="download_file_box">
              <a href="#"><i class="icon-pdf"></i>Download PDF File</a>
            </div>
          </div>
        </div>
        <div class="col-xl-8 col-lg-8">
          <div class="service_details_right">
            <!-- <div class="service_details_One_img">
              <img
                src="/assets/images/service/service-detail_img_1.jpg"
                alt=""
              />
            </div> -->
            <!-- <div class="harvest_innovations">
              <h2>Harvest Innovations</h2>
              <p>
                There are many variations of passages of psum available, but the
                majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum,
                you need to be sure there isn't anything embarrassing hidden in
                the middle of text. Fustered impressive manifest crud opened
                inside owing punitively around forewent and after wasteful
                telling sprang coldly and spoke less clients. Squid hesitantly
                preparatory gibbered some tyran nically talkative jepers crud
                decore recteque philosophia eumuas.
              </p>

              <p class="harvest_innovations_bottom_text">
                Beyond more stoic this along goodness hey this this wow manatee
                mongoose one as since a far flustered impressive manifest far
                crud opened inside owing punitively around forewent and after
                wasteful telling sprang coldly and spoke less clients. Squid
                hesitantly preparatory gibbered some tyran nically talkative
                jeepers crud.
              </p>
            </div> -->
            <!-- <div class="row">
              <div class="col-xl-6 col-lg-6">
                <div class="service_details_single_img_box">
                  <img
                    src="/assets/images/service/service-detail_img_2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="service_details_single_img_box">
                  <img
                    src="/assets/images/service/service-detail_img_3.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div> -->
            <div class="agriculture_solutions">
              <h3>{{ singleService.title }}</h3>
              <div
                v-for="service in singleService.details"
                :key="service.detail"
              >
                <p>
                  <i class="fa fa-angle-right fa-xs"></i>
                  {{ service.detail }}
                </p>

                <ul class="list-unstyled">
                  <li v-for="option in service.options" :key="option">
                    <i class="fa fa-check"></i>{{ option }}
                  </li>
                </ul>
              </div>
            </div>
            <p class="service_details_last_text">
              Lorem Ipsum has been the ndustry standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FaqOne from "../FaqOne";
export default {
  name: "ServiceDetail",
  computed: {
    services() {
      return this.$store.state.services;
    },
    singleService() {
      return this.$store.state.services.find(
        (service) => service.id == this.$route.params.id
      );
    },
  },
  methods: {
    isActive(service) {
      return service.id == this.singleService.id ? "active" : null;
    },
  },
  components: { FaqOne },
  created() {},
};
</script>

<style scoped></style>
