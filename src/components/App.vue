<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <SubheaderComponent></SubheaderComponent>
    <router-view></router-view>
  </div>
    
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import Home from './Home.vue';
import SubheaderComponent from './SubheaderComponent' ;


export default {
  name: 'app',
  components: {
    HeaderComponent,
    Home,
    SubheaderComponent,
  },
}
</script>