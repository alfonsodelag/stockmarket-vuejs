<template>
    <form class="form-inline my-2 my-lg-0 ">
        <input v-on:keyup="autocomplete" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="searchInput">
        <button v-on:click="search"  class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
</template>

<script>

export default {
    name: 'Searcher',

    data() {
        return{

        }
    },

    mounted(){

    },

    methods: {
        search: function(){
            console.log("search works");
        },
        autocomplete: function(){
            const input = document.getElementById('searchInput').value;
            console.log(input, "autocomplete works");
        }
    }
    
}
</script>