<template>
    <div>
        <button v-on:click="addFav" class="btn btn-success" v-if="this.signal == false">Add</button>
        <button v-on:click="deleteFav" class="btn btn-danger" v-else-if="this.signal == true">Delete</button>
    </div>
</template>

<script>

export default {
    name: 'FavoriteButton',
    props: [
        'idFavorite', 
        'nameFavorite'   
    ],
        
    components: {
        
    },
    data() {
        return{
            objectSave: [],
            localstorageContent: '',
            index:'',
            signal:'' 
        }
    },
    created() {       
        // this.existFav();
    },
    mounted(){    
        this.startFav();
        this.existFav();
    },
    updated(){
        
        
    },
    methods: {
        startFav(){
            this.localstorageContent = localStorage.getItem('favorites');
            if(this.localstorageContent === null){
                localStorage.setItem('favorites', '');
            }
        },
        addFav(){
            this.localstorageContent = localStorage.getItem('favorites');            
            if(this.localstorageContent == ''){
                this.localstorageContent = [];
            }else{
                this.localstorageContent = JSON.parse(this.localstorageContent);
            }
            this.objectSave = {
                id_Favorite: this.idFavorite,
                name_Favorite: this.nameFavorite
            }
            this.localstorageContent.push(this.objectSave);
            const localStorageUploaded = JSON.stringify(this.localstorageContent);
            localStorage.removeItem('favorites');
            localStorage.setItem('favorites', localStorageUploaded);
            // this.existFav();
            location.reload();
        },
        deleteFav(){
            this.localstorageContent = JSON.parse(localStorage.getItem('favorites'));
            let i = this.index;
            for(i=0; i < this.localstorageContent.length; i++){
                if(this.localstorageContent[i].id_Favorite == this.idFavorite){
                    this.localstorageContent.splice(i,1);                   
                }               
            }
            const localStorageUploaded = JSON.stringify(this.localstorageContent);
            localStorage.removeItem('favorites');
            localStorage.setItem('favorites', localStorageUploaded);
            // this.existFav();
            location.reload();
        },
        existFav(){
            this.localstorageContent = JSON.parse(localStorage.getItem('favorites'));
            let i = this.index;
            if(this.localstorageContent == null || this.localstorageContent.length == 0 || this.localstorageContent == ''){
                this.signal = false;  
            }else{
                for(i=0; i < this.localstorageContent.length; i++){
                    if(this.localstorageContent[i].id_Favorite == this.idFavorite){
                        this.signal = true;                  
                    }else{
                        this.signal = false; 
                    }               
                }
            }               
        },

    }
}
</script>