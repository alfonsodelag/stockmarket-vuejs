<template>
    <div>
        <button v-on:click="addFav" class="btn btn-success" >Add</button>
        <button v-on:click="deleteFav" class="btn btn-danger" >Delete</button>
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

    },
    mounted(){    

    },
    updated(){

    },
    methods: {
        addFav(){
            this.localstorageContent = localStorage.getItem('favorites');
            if(this.localstorageContent === null){
                localStorage.setItem('favorites', '');
            }
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
            console.log(this.localstorageContent, "add");
            localStorage.removeItem('favorites');
            localStorage.setItem('favorites', localStorageUploaded);
        },
        deleteFav(){
            this.localstorageContent = JSON.parse(localStorage.getItem('favorites'));
            let i = this.index;
            for(i=0; i < this.localstorageContent.length; i++){
                if(this.localstorageContent[i].id_Favorite == this.idFavorite){
                    this.localstorageContent.splice(i,1);                   
                }               
            }
            console.log(this.localstorageContent, "deleted");
            const localStorageUploaded = JSON.stringify(this.localstorageContent);
            localStorage.removeItem('favorites');
            localStorage.setItem('favorites', localStorageUploaded);
        },
        existFav(){
            this.localstorageContent = JSON.parse(localStorage.getItem('favorites'));
            let i = this.index;
            for(i=0; i < this.localstorageContent.length; i++){
                if(this.localstorageContent[i].id_Favorite !== this.idFavorite){
                    this.signal = true;
                    console.log("true");                   
                }else{
                    this.signal = false;
                    console.log("false"); 
                }               
            }
        }
    }
}
</script>