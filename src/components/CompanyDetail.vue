<template>

<div>
  <HeaderComponent></HeaderComponent>
  <SubheaderComponent></SubheaderComponent>
  <div>
    <div class="row">
      <div class="col">Name</div>
      <div class="col">Code</div>
      <div class="col">Price</div>
      <div class="col">Chart</div>
    </div>

    <div class="row border">
      <div class="col">
        <p>{{stock.actions.name}}</p>
      </div>
      <div class="col">
        <p>{{stock.actions.unique_code}}</p>
      </div>
      <div class="col">
        <p>{{stock.current_quantity}}</p>
      </div>
      <div class="col">
        <img class="chart" src="/src/assets/images/chart.jpg" alt="chart" />
      </div>
      <div class="col">
        <button class="btn btn-primary" :id=" stock.actions.id ">Follow</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import HeaderComponent from './HeaderComponent.vue';
import SubheaderComponent from './SubheaderComponent' ;
export default {
    name: 'CompanyDetail',
    components: {
    HeaderComponent,
    SubheaderComponent
  },
  
}
</script>

