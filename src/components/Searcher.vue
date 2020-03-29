<template>
    <form class="form-inline my-2 my-lg-0" id="searchForm">
        <div class="autocomplete">        
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="searchInput" autocomplete="off">
        </div>    
        <button :input="input" v-on:click="search"  class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
        <div id="searchDiv"></div>
    </form>
</template>

<script>

export default {
    name: 'Searcher',

    data() {
        return{
            input:'',
        }
    },

    mounted(){

    },
// https://market-place-laravel.herokuapp.com/api/v1/historic?name=W
    methods: {
        search(){
            this.input = document.getElementById('searchInput').value;
            if(this.input == ''){
                console.log("error");
                var alert = `<span class="alert alert-danger ml-3" role="alert" id="alertMessage">Insert a correct value</span>`
                var searchForm = document.getElementById('searchDiv');
                searchForm.innerHTML = alert;
                var alertMessage = document.getElementById('alertMessage');
                setTimeout(()=>{ alertMessage.parentNode.removeChild(alertMessage).remove}, 3000);
            }else{
                window.location.href='/#/search/'+this.input
            }
        },
    }
    
}
</script>