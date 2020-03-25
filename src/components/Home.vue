<template>
  <ul>
    <div class="row">
      <div class="col">Name</div>
      <div class="col">Code</div>
      <div class="col">Price</div>
      <div class="col">Chart</div>
    </div>

    <div class="row border" v-for="stock in stocks" v-bind:key="stock.id">
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
</template>

<script>
const URL = "https://market-place-laravel.herokuapp.com/api/v1/prices";

export default {
  data() {
    return {
      stocks: [],
      load: [],
      page: 1
    };
  },
  mounted() {
    console.log("mounted working");
    this.getContentFromApi();
  },
  methods: {
    updateScrollEvent() {
      console.log("update scroll working");
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
      console.log("Getting Content From API...");
      //document.write(content);
      axios
        .get(`https://market-place-laravel.herokuapp.com/api/v1/prices`)
        .then(res => {
          console.log("then working");
          console.log(res.data.data[0]);
          this.stocks = [...this.stocks, ...res.data.data];
        })
        .catch(err => console.log(err));
    }
  }
};
</script>