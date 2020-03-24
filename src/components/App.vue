<template>

    <ul>

      <div class="row">
        <div class="col-3">
          Name
        </div>
        <div class="col-3">
          Code
        </div>
        <div class="col-3">
          Chart
        </div>
      </div>
      <div class="row border" v-for="stock in stocks" v-bind:key="stock.id">
      <div class="col">
        <p>{{stock.name}}</p>
      </div>
      <div class="col">
        <p>{{stock.unique_code}}</p>
      </div>
      <div class="col">
        <ul>
          <li>
            <img class="chart" src="/src/assets/images/chart.jpg" alt="chart">
          </li>
        </ul>
      </div>
      <div class="col">
        <ul>
            <button class="btn btn-primary">Follow</button>
        </ul>
      </div>
    </div>    
    </ul>
    
</template>

<script> 
const URL = 'https://market-place-laravel.herokuapp.com/api/v1/actions';

export default {
	data() {
    return {
      el: '#app', 
      stocks: [],
      load: [],
      page: 1,
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
        .get(
          `https://market-place-laravel.herokuapp.com/api/v1/actions`
        )
        .then(res => {
                console.log("then working");
                console.log(JSON.stringify(res.data[0].description));
          this.stocks = [...this.stocks, ...res.data];
        })
        .catch(err => console.log(err));
    }
  }
}
</script>