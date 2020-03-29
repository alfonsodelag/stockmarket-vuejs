<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <SubheaderComponent></SubheaderComponent>
    <Favorites></Favorites>
    <router-view></router-view>
  </div>
    
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import SubheaderComponent from './SubheaderComponent' ;
import Favorites from './Favorites';


export default {
  name: 'app',
  components: {
    HeaderComponent,
    SubheaderComponent, 
    Favorites
  },
}
</script>