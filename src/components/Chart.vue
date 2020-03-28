<template>
<div class="container ">
        <line-chart :data="chartData"></line-chart>
</div>

</template>

<script>

export default {
    name: 'Chart',
    props: 
        ['idUrl']       
    ,

    data() {
        return{
            prices: '',
            index:'',
            chartData: []
        }
    },
    created() {
        
    },
    mounted(){    
        this.getHistoryData();
        
    },

    methods: {
        getHistoryData(){
            axios
            .get(`https://market-place-laravel.herokuapp.com/api/v1/historic/${this.idUrl}`)
            .then(res => {
            //   console.log("then working");
            // console.log(res.data.data[0].price, "History");
                this.prices = res.data.data[0].price;
            })
            .then( () =>{
                let data = this.prices;
                let i = this.index;
                for(i=0; i < data.length; i++){
                    let time = data[i].created_at;
                    let price = data[i].current_quantity;
                    let historicItem = [time, price];
                    this.chartData.push(historicItem);
                }
                // console.log(this.chartData, 'chartData for');
            })
            .catch(err => console.log(err));
        },
    }
}
</script>