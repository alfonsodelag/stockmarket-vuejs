<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">    
        <div class="mt-4 navbar-collapse row justify-content-around" id="navbarSupportedContent">
            <ul class="navbar-nav ">
                <li class="nav-item">
                    <router-link to="/home" class="nav-link">List </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/top" class="nav-link">Top</router-link>
                </li>
            </ul>
            <Searcher></Searcher>
        </div>
    </nav>
</template>

<script>
import Searcher from './Searcher.vue';
export default {
    name: 'HeaderComponent',
    components: {
    Searcher
    },
}
</script>