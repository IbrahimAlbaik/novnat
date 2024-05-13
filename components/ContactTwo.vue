<template>
  <section class="contact-one">
    <div class="container">
      <div class="row">
        <!-- <div class="col-xl-7">
          <div class="contact-one__form__wrap">
            <div class="block-title text-left">
              <p>contact with us</p>
              <h3>write us a message</h3>
              <div class="leaf">
                <img src="/assets/images/resources/leaf.png" alt="">
              </div>
            </div>
            <form action="#" class="contact-one__form">
              <div class="row low-gutters">
                <div class="col-md-6">
                  <div class="input-group">
                    <input type="text" name="name" placeholder="Your Name">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-group">
                    <input type="text" name="email" placeholder="Email Address">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-group">
                    <input type="text" name="phone" placeholder="Phone Number">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-group">
                    <input type="text" name="subject" placeholder="Subject">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="input-group">
                    <textarea name="message" placeholder="Write Message"></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="input-group contact__btn">
                    <button type="submit" class="thm-btn contact-one__btn">Send message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div> -->
        <div class="col-xl-12">
          <div class="have_questions">
            <!-- <div class="image_box">
              <img src="/assets/images/resources/contact_img.jpg" alt="">
            </div> -->
            <div class="block-title text-center">
              <p>get in touch with us</p>
              <h3>Have a question?</h3>
              <div class="leaf">
                <img src="/assets/images/resources/leaf.png" alt="" />
              </div>
            </div>
            <div class="have_questions_text">
              <p>
                Please feel free to get in touch <br />
                by clicking in the button below <br /> if you are interested in
                collaborating or partnering with us,<br /> please email
                <span> abdulbari@novnat.uk </span>
              </p>
            </div>
            <div class="have_questions_btn">
              <a :href="`mailto:abdulbari@novnat.uk`" class="thm-btn"
                >Send a Message</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactTwo",
  computed: {
    aboutNovNat() {
      return this.$store.state.novnat;
    },
  },
};
</script>

<style scoped>
.have_questions_text p span {
  color: #6ea1bb;
}
</style>
