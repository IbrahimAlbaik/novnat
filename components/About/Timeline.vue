<template>
  <section class="about_two" id="about">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="block-title text-center">
            <p>The story so far</p>
            <h3>
              Developing novel solutions <br />
              for a sustainable future
            </h3>
            <div class="leaf">
              <img src="/assets/images/resources/leaf.png" alt="leaf" />
            </div>
          </div>

          <div class="timeline">
            <div
              v-for="(story, index) in stories"
              :key="story.id"
              class="timeline_container wow"
              :class="index % 2 === 1 ? 'right slideInRight' : 'left slideInLeft'"
            >
              <div class="content">
                <h2>
                  {{ story.year }}
                  <span>{{ story.title }} </span>
                </h2>
                <p>
                  {{ story.description }}
                </p>
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
  name: "timeline",
  props: ["stories"],
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  background-color: #474e5d;
  font-family: Helvetica, sans-serif;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: "";
  position: absolute;
  width: 6px;
  background-color: #474e5d;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  border-radius: 1rem;
}

/* Container around content */
.timeline_container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.timeline_container::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  right: -13px;
  background-color: #474e5d;
  border: 4px solid #eddd5e;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the timeline_container to the left */
.left {
  left: 0;
}

/* Place the timeline_container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left timeline_container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid #474e5d;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #474e5d;
}

/* Add arrows to the right timeline_container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid #474e5d;
  border-width: 10px 10px 10px 0;
  border-color: transparent #474e5d transparent transparent;
}

/* Fix the circle for timeline_containers on the right side */
.right::after {
  left: -13px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: #474e5d;
  position: relative;
  border-radius: 6px;
}

.content p {
  color: white;
}

.content h2 {
  color: #eddd5e;
  font-size: 1rem;
}

.content h2 span {
  background: #eddd5e;
  border-radius: 0.3rem;
  padding: 0 0.5rem;
  color: #474e5d;
}
/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

  /* Full-width timeline_containers */
  .timeline_container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  /* Make sure that all arrows are pointing leftwards */
  .timeline_container::before {
    left: 60px;
    border: medium solid #474e5d;
    border-width: 10px 10px 10px 0;
    border-color: transparent #474e5d transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after,
  .right::after {
    left: 15px;
  }

  /* Make all right timeline_containers behave like the left ones */
  .right {
    left: 0%;
  }
}
</style>
