<template>
    <div>
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
            <div class="col d-flex justify-content-center align-items-center">
              <div>
                <button v-on:click="goDetail" class="btn btn-primary mr-3" :id="stock.actions.id">Detail</button>
              </div>                
                <favorite-button :idFavorite="stock.actions.id" :nameFavorite="stock.actions.name"></favorite-button>
            </div>
        </div>

    </div>
</template>

<script>
const URL = "https://market-place-laravel.herokuapp.com/api/v1/prices?page=1";

export default {
  name: 'Home',
    components: {
        Chart,
        FavoriteButton
    },
  data() {
    return {
      stocks: [],
      load: [],
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
    followUp(){
        window.location.href="localhost:8080/detail"
    },
    getContentFromApi() {
    //   console.log("Getting Content From API...");
      //document.write(content);
      axios
        .get(`https://market-place-laravel.herokuapp.com/api/v1/prices`)
        .then(res => {
        //   console.log("then working");
          this.pages = res.data.meta.last_page;
          console.log(this.pages);
          this.stocks = [...this.stocks, ...res.data.data];
        })
        .catch(err => console.log(err));
    },
    goDetail(e) {
      const idTarget = e.target.id;
      window.location.href='/#/detail/'+idTarget;
      // console.log(idTarget);
    },
  }
};
</script>