<template>

<div>
    <HeaderComponent></HeaderComponent>
    <SubheaderComponent></SubheaderComponent>
     <ul>
    <div class="row">
      <div class="col">Name</div>
      <div class="col">Code</div>
      <div class="col">Price</div>
      <div class="col">Chart</div>
    </div>

    <div class="row border">
      <div class="col">
        <ul>
          <li>
            <p>{{stock.actions.name}}</p>
          </li>
        </ul>
      </div>
      <div class="col">
        <ul>
          <li>
            <p>{{stock.actions.unique_code}}</p>
          </li>
        </ul>
      </div>
      <div class="col">
        <ul>
          <li>
            <p>{{stock.current_quantity}}</p>
          </li>
        </ul>
      </div>
      <div class="col">
        <ul>
          <li>
            <img class="chart" src="/src/assets/images/chart.jpg" alt="chart" />
          </li>
        </ul>
      </div>
      <div class="col">
        <ul>
          <button class="btn btn-primary" :id=" stock.actions.id ">Follow</button>
        </ul>
      </div>
    </div>
  </ul>
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

