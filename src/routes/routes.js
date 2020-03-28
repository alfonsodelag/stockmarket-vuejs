import Home from '../components/Home';
import Top from '../components/Top';
import Detail from '../components/Detail';
import Search from '../components/Search';


export default [
    {path: '/home', component: Home},
    {path: '/', component: Home},
    {path: '/top', component: Top},
    {path: '/search/:input', component: Search},
    {path: '/detail/:id', component: Detail},

];