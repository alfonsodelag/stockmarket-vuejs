<template>
    <div v-if="stocks.length > 0">
        <div class="row card-header">
            <div class="col"><h6>Name</h6></div>
            <div class="col"><h6>Code</h6></div>
            <div class="col"><h6>Last price</h6></div>
            <div class="col"><h6>Chart</h6></div>
            <div class="col"><h6>Actions</h6></div>
        </div>
        <div class="row border card-body " v-for="stock in stocks" v-bind:key="stock.id">
            <div class="col d-flex align-items-center">
                <p>{{stock.name}}</p>
            </div>
            <div class="col d-flex align-items-center">
                <p>{{stock.unique_code}}</p>
            </div>
            <div class="col d-flex align-items-center">
                <p>{{stock.price[10].current_quantity}}$</p>
            </div>
            <div class="col">
                <Chart  class="chart" :idUrl="stock.id" ></Chart>
            </div>
            <div class="col d-flex justify-content-center align-items-center">
              <div>
                <DetailButton class="btn btn-primary mr-3" :idDetail="stock.id">Detail</DetailButton>
              </div>                
                <favorite-button :idFavorite="stock.id" :nameFavorite="stock.name"></favorite-button>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="row card-header">
            <div class="col"><h6>Name</h6></div>
            <div class="col"><h6>Code</h6></div>
            <div class="col"><h6>Last price</h6></div>
            <div class="col"><h6>Chart</h6></div>
            <div class="col"><h6>Actions</h6></div>
        </div>
        <div class="row border card-body alert alert-danger d-block text-center" >
            No match founds
        </div>
    </div>
</template>

<script>
import Chart from './Chart.vue';
import FavoriteButton from './FavoriteButton.vue';
import DetailButton from './DetailButton';

export default {
    name: 'Search',
    components: {
        Chart,
        FavoriteButton,
        DetailButton
    },
    
    data() {
        return{
            stocks: [],
            input: ''
        }
    },

    mounted(){
        this.resultSearch();
    },

    methods: {
        resultSearch(){
            this.input = this.$route.params.input;            
                axios
            .get(`https://market-place-laravel.herokuapp.com/api/v1/historic?name=${this.input}`)
            .then(res => {
                this.stocks = [...this.stocks, ...res.data.data];
                // this.stocks = res.data[0];
            })
            .catch(err => console.log(err));
        },
    }
    
}
</script>
