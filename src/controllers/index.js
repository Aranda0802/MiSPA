import Home from './home.controllers';
import Posts from './posts.controller';
import notFound from './404.controller';

const  pages = {
    home: Home,
    posts: Posts,
    notFound: notFound,

}

export {pages};