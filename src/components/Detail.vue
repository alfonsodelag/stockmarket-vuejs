<template>
    <div class="container ">
        <div class="row d-flex justify-content-around">
            <div>
                <h3>{{ stocks.name }}</h3>
                <h4 class="text-secondary">{{ stocks.unique_code }}</h4>
                <favorite-button :idFavorite="this.idUrl" :nameFavorite="stocks.name"></favorite-button>
            </div>
            <div>
                <img class="chart" src="/src/assets/images/Logo.png" alt="chart" />
            </div>
        </div>
        <div class="row d-flex flex-column align-items-center">
            <h5 class="text-secondary">Description</h5>
            <span>{{ stocks.description }}</span>
        </div>
        <div class="row d-flex">
            <Chart :idUrl="idUrl" ></Chart>
        </div>
        
    </div>
</template>

<script>
import Chart from './Chart.vue';
import FavoriteButton from './FavoriteButton.vue';

export default {
    name: 'Detail',
    components: {
        Chart,
        FavoriteButton
    },
    data() {
        return{
            idUrl: '',
            stocks: [],
            prices: '',
            index:'',
            chartData: []
        }
    },
    created() {
        this.idUrl = this.$route.params.id;  
        this.getStockData();
        // this.getHistoryData();
        
    },
    mounted(){    
        
    },

    methods: {
        getStockData(){
            axios
        .get(`https://market-place-laravel.herokuapp.com/api/v1/actions/${this.idUrl}`)
        .then(res => {
        //   console.log("then working");
            this.stocks = res.data[0];
        })
        .catch(err => console.log(err));
        },
    }
}
</script>