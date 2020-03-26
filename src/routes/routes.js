import Home from '../components/Home';
import Top from '../components/Top';
import Detail from '../components/Detail';


export default [
    {path: '/home', component: Home},
    {path: '/', component: Home},
    {path: '/top', component: Top},
    {path: '/search', component: Home},
    {path: '/detail/:id', name: Detail,  component: Detail},

];