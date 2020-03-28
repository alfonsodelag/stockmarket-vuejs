<template>
    <ul>
        <div class="row card-header">
            <div class="col"><h6>Name</h6></div>
            <div class="col"><h6>Code</h6></div>
            <div class="col"><h6>Price</h6></div>
            <div class="col"><h6>Chart</h6></div>
            <div class="col"><h6>Actions</h6></div>
        </div>

        <div class="row border card-body " v-for="stock in stocks" v-bind:key="stock.id">
            <div class="col d-flex align-items-center">
                <p>{{stock.actions.name}}</p>
            </div>
            <div class="col d-flex align-items-center">
                <p>{{stock.actions.unique_code}}</p>
            </div>
            <div class="col d-flex align-items-center">
                <p>{{stock.current_quantity}}$</p>
            </div>
            <div class="col">
                <Chart  class="chart" :idUrl="stock.actions.id" ></Chart>
            </div>
            <div class="col d-flex align-items-center">
                <button v-on:click="goDetail" class="btn btn-primary" :id=" stock.actions.id ">Detail</button>
            </div>
        </div>
    </ul>
</template>

<script>
const URL = "https://market-place-laravel.herokuapp.com/api/v1/prices?page=1";

import Chart from './Chart.vue';

export default {
  name: 'Home',
    components: {
        Chart
    },
  data() {
    return {
      stocks: [],
      load: [],
      page: 1
    };
  },
  mounted() {
    // console.log("mounted working");
    this.getContentFromApi();

  },
  methods: {
    updateScrollEvent() {
    //   console.log("update scroll working");
      var updated = false;
      window.onscroll = ev => {
        var userPosition = window.innerHeight + window.scrollY;
        var height = document.body.offsetHeight;
        if (!updated && userPosition >= height) {
          updated = true;
          this.getContentFromApi();
        }
      };
    },
    getContentFromApi() {
    //   console.log("Getting Content From API...");
      //document.write(content);
      axios
        .get(`https://market-place-laravel.herokuapp.com/api/v1/prices`)
        .then(res => {
        //   console.log("then working");
        
          this.stocks = [...this.stocks, ...res.data.data];
        })
        .catch(err => console.log(err));
    },

    goDetail(e) {
      const idTarget = e.target.id;
      window.location.href='/#/detail/'+idTarget;
      // console.log(idTarget);
    }
  }
};
</script>
