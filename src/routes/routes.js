import Home from '../components/Home';
import Top from '../components/Top';
import Detail from '../components/Detail';
import Favorites from '../components/Favorites.vue';


export default [
    {path: '/home', component: Home},
    {path: '/', component: Home},
    {path: '/top', component: Top},
    {path: '/search', component: Home},
    {path: '/detail/:id', name: Detail,  component: Detail},
    {path: '/favorites/:id', name: Favorites,  component: Favorites},
];