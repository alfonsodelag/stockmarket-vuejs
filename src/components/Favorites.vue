<template>
    <div class="container d-flex flex-column">
        <div class="row card-header bg-dark text-light justify-content-center"><h5>Favorites</h5></div>
        <div class="row border card-body flex-wrap border " >
            <div class="d-inline-flex flex-column border rounded border-dark m-2 p-2" v-for="fav in favData" v-bind:key="fav.id_Favorite">
                <div class=" d-inline-flex"><h6>{{fav.name_Favorite}}</h6></div>
                <div class="d-inline-flex justify-content-center">
                    <DetailButton class="btn btn-primary mr-1" :idDetail="fav.id_Favorite">Detail</DetailButton>
                    <favorite-button :idFavorite="fav.id_Favorite" :nameFavorite="fav.name_Favorite"></favorite-button>
                </div>       
            </div>
            
            
        </div>
        <hr>        
    </div>
</template>

<script>
import FavoriteButton from './FavoriteButton.vue';
import DetailButton from './DetailButton';

export default {
    name: 'Favorites',
    components: {
        FavoriteButton,
        DetailButton
    },
    data() {
        return{
            favData : ''
        }
    },
    created() {

        
    },
    mounted(){    
        this.getFavData();
    },

    methods: {
        getFavData(){
            this.localstorageContent = JSON.parse(localStorage.getItem('favorites'));
            let i = this.index;
            if(this.localstorageContent == null || this.localstorageContent.length == 0 || this.localstorageContent == ''){
                console.log("no data"); 
            }else{
                this.favData = this.localstorageContent
                console.log(this.favData);
            }               
        }
    }
}
</script>