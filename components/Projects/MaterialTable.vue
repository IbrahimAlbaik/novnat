<template>
  <div>
    <h3>Tuning our Nov-4 Group of MOFs:</h3>
    <p>
      We have successfully fine-tuned our NOV-4 MOF material at different
      inflection points to optimize its performance in three key applications:
      heat pumps, atmospheric water generation (AWG), and dehumidifiers. Our
      tailored MOF demonstrates enhanced heat exchange capabilities in heat
      pumps, rapid water vapor adsorption and desorption for efficient AWG, and
      exceptional moisture removal efficiency in dehumidifiers. By adapting
      NOV-4 MOF to suit the specific needs of each application, we have
      maximized its potential to address various environmental challenges and
      advance sustainable technologies.
    </p>
    <div class="row">
      <div class="col-xl-12">
        <div class="cart_table_box">
          <table class="cart_table">
            <thead class="cart_table_head">
              <tr>
                <th></th>
                <th>Maximum Water Uptake (gH2O/gads)</th>
                <th>Inflection point (Po/P)</th>
                <th>Atmospheric Water Generation</th>
                <th>Heat pump</th>
                <th>Dehumidification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nov-04.1</td>
                <td class="pro_price">0.61</td>
                <td class="pro_qty">0.06</td>
                <td class="pro_sub_total">arid area with moderate amb temp</td>
                <td>cooling temp below 5<sup>o</sup>C</td>
                <td>Super dry condition required</td>
              </tr>
              <tr>
                <td>Nov-04.2</td>
                <td class="pro_price">0.6</td>
                <td class="pro_qty">0.1</td>
                <td class="pro_sub_total">arid area with moderate amb temp</td>
                <td>cooling temp below 5<sup>o</sup>C</td>
                <td>dry condition required</td>
              </tr>
              <tr>
                <td>Nov-04.3</td>
                <td class="pro_price">0.59</td>
                <td class="pro_qty">0.15</td>
                <td class="pro_sub_total">
                  semi-arid area with moderate amb temp
                </td>
                <td>cooling temp below 10<sup>o</sup>C</td>
                <td>moderate condition</td>
              </tr>
              <tr>
                <td>Nov-04.4</td>
                <td class="pro_price">0.58</td>
                <td class="pro_qty">0.2</td>
                <td class="pro_sub_total">high amb temp with RH>20%</td>
                <td>cooling temp below 15<sup>o</sup>C</td>
                <td>moderate condition</td>
              </tr>
              <tr>
                <td>Nov-04.5</td>
                <td class="pro_price">0.55</td>
                <td class="pro_qty">0.25</td>
                <td class="pro_sub_total">high amb temp with RH>30%</td>
                <td>cooling temp below 15<sup>o</sup>C</td>
                <td>moderate condition</td>
              </tr>
              <tr>
                <td>Nov-04.6</td>
                <td class="pro_price">0.54</td>
                <td class="pro_qty">0.3</td>
                <td class="pro_sub_total">high amb temp with RH>40%</td>
                <td>cooling temp below 20<sup>o</sup></td>
                <td>No heating for regeneration is required</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MaterialTable",
  props: ["singleProject"],
};
</script>

<style scoped></style>
