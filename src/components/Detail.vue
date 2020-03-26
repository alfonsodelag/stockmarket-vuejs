<template>
<div class="container ">
        <div class="row d-flex justify-content-around">
            <div>
                <h3>{{ stocks.name }}</h3>
                <h4 class="text-secondary">{{ stocks.unique_code }}</h4>
            </div>
            <div>
                <img class="chart" src="/src/assets/images/chart.jpg" alt="chart" />
            </div>
        </div>
        <div class="row d-flex flex-column align-items-center">
            <h5 class="text-secondary">Description</h5>
            <span>{{ stocks.description }}</span>
        </div>
        <div class="row d-flex">

        </div>
    </div>
    <!-- <div class="container fle">
        <h1>Hello Detail</h1>
        <h2>{{ idUrl }}</h2>
        <h3>{{ stocks.name }}</h3>
    </div> -->
</template>

<script>

export default {
    name: 'Detail',

    data() {
        return{
            idUrl: '',
            stocks: []
        }
    },
    created() {
        
    },
    mounted(){    
        this.idUrl = this.$route.params.id;  
        this.getStockData();
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
        }
    }
    
}
</script>