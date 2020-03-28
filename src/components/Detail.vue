<template>
<div class="container ">
        <div class="row d-flex justify-content-around">
            <div>
                <h3>{{ stocks.name }}</h3>
                <h4 class="text-secondary">{{ stocks.unique_code }}</h4>
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
    <!-- <div class="container fle">
        <h1>Hello Detail</h1>
        <h2>{{ idUrl }}</h2>
        <h3>{{ stocks.name }}</h3>
    </div> -->
</template>

<script>
import Chart from './Chart.vue';
export default {
    name: 'Detail',
    components: {
        Chart
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
        // getHistoryData(){
        //     axios
        //     .get(`https://market-place-laravel.herokuapp.com/api/v1/historic/${this.idUrl}`)
        //     .then(res => {
        //     //   console.log("then working");
        //     // console.log(res.data.data[0].price, "History");
        //         this.prices = res.data.data[0].price;
        //     })
        //     .then( () =>{
        //         let data = this.prices;
        //         let i = this.index;
        //         for(i=0; i < data.length; i++){
        //             let time = data[i].created_at;
        //             let price = data[i].current_quantity;
        //             let historicItem = [time, price];
        //             this.chartData.push(historicItem);
        //         }
        //         // console.log(this.chartData, 'chartData for');
        //     })
        //     .catch(err => console.log(err));
        // },

    }
}
</script>