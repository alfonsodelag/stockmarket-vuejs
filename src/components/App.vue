<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <SubheaderComponent></SubheaderComponent>
    <router-view></router-view>
  </div>
    
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import SubheaderComponent from './SubheaderComponent' ;


export default {
  name: 'app',
  components: {
    HeaderComponent,
    SubheaderComponent
  },
}
</script>