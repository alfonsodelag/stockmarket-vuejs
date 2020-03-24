<template>

    <ul>
        <div class="row border" v-for="stock in stocks" v-bind:key="stock.id">
          <div class="col">
            <ul>
              <li>
                <p>{{stock.name}}</p>
              </li>
            </ul>
          </div>
          <div class="col">
            <ul>
              <li>
                <p>{{stock.unique_code}}</p>
              </li>
            </ul>
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
const URL = 'http://localhost:3000/posts';

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
          ` http://localhost:3000/posts`
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