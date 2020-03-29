<template>
    <button v-on:click="goDetail">Detail</button>
</template>

<script>

export default {
    name: 'FavoriteButton',
    props: [
        'idDetail',  
    ],
        
    components: {
        
    },
    data() {
        return{

        }
    },
    created() {       
        // this.existFav();
    },
    mounted(){    

    },
    updated(){
        
        
    },
    methods: {
        goDetail(e) {
            window.location.href='/#/detail/'+this.idDetail;
      // console.log(idTarget);
    },
    }
}
</script>