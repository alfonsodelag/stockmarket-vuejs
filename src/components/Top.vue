<template>
    <ul>
        <div class="row card-header">
            <div class="col"><h6>Name</h6></div>
            <div class="col"><h6>Code</h6></div>
            <div class="col"><h6>Price</h6></div>
            <div class="col"><h6>Actions</h6></div>
        </div>

        <div class="row border card-body" v-for="stock in stocks" v-bind:key="stock.id">
            <div class="col">
                <p>{{stock.name}}</p>
            </div>
            <div class="col" >
                <p>{{stock.unique_code}}</p>
            </div>
            <div class="col">        
                <p>{{stock.max_price}}$</p>
            </div>
            <div class="col">
                <button v-on:click="goDetails" class="btn btn-primary" :id=" stock.id ">Detail</button>
            </div>
        </div>
    </ul>
</template>

<script>

export default {
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
        goDetails(e) {
            const idTarget = e.target.id;
            window.location.href='/#/detail/'+idTarget;
        },
        updateScrollEvent() {
            // console.log("update scroll working");
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
            // console.log("Getting Content From API...");
            //document.write(content);
            axios
                .get(`https://market-place-laravel.herokuapp.com/api/v1/top`)
                .then(res => {
                    // console.log("then working");
                    // console.log(res.data.data);
                    this.stocks = [...this.stocks, ...res.data.data];
                })
                .catch(err => console.log(err));
            }
        },
        
};
</script>