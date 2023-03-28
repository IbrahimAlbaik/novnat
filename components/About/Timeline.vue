<template>
  <section class="about_two">
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
              <img src="/assets/images/resources/leaf.png" alt="" />
            </div>
          </div>

          <div class="timeline">
            <div class="timeline_container left">
              <div class="content">
                <h2>
                  2018
                  <span>Idea</span>
                </h2>
                <p>
                  It all began with an idea. An idea to create novel nano porous
                  materials called metal organic frameworks (MOFs) and unleash
                  their power to enable the development of cost and energy
                  efficient solutions
                </p>
              </div>
            </div>
            <div class="timeline_container right">
              <div class="content">
                <h2>2019 <span>Experimentation</span></h2>
                <p>
                  Experimentation began to develop and engineer a novel MOF
                  precisely tuned for water sorption applications.
                </p>
              </div>
            </div>
            <div class="timeline_container left">
              <div class="content">
                <h2>2021 <span>Formulation</span></h2>
                <p>
                  Breakthrough…the novel MOF structure was successfully
                  synthesised after many trials. The initial results showed
                  revolutionary water sorption characteristics in terms of
                  capacity and kinetics.
                </p>
              </div>
            </div>
            <div class="timeline_container right">
              <div class="content">
                <h2>2022 (Q1-Q3) <span>Incorporation</span></h2>
                <p>
                  NovNat Tech is born based on the shared vision of its founders
                  to develop novel solutions for nature and a sustainable future
                  through commercialising the company-patented MOF.
                  Additionally, NovNat Tech was incubated as part of the elevate
                  programme at the UoB and also applied for an Innovate UK smart
                  grant (£350k).
                </p>
              </div>
            </div>
            <div class="timeline_container left">
              <div class="content">
                <h2>2022 (Q4) <span>IP/MVP</span></h2>
                <p>
                  Patent applied for to protect the novel MOF (UK patent
                  application number: 2218176.2) and an MVP has been designed
                  and developed to showcase the functionality and to allow
                  NovNat Tech to evaluate and characterise the key metrics of
                  the system.
                </p>
              </div>
            </div>
            <div class="timeline_container right">
              <div class="content">
                <h2>2023 <span>MVP 2.0</span></h2>
                <p>
                  The funding NovNat Tech seeks will go towards building a
                  large-scale prototype to demonstrate the applicability of our
                  technology in industrial processes.
                </p>
              </div>
            </div>
            <div class="timeline_container left">
              <div class="content">
                <h2>2024 <span> Pilot trials</span></h2>
                <p>
                  Based on the outputs from MVP 2.0, NovNat Tech aims to run
                  pilot trials at client sites to demonstrate integration of the
                  technology on an industrial scale.
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
