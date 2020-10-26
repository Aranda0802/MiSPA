import {pages} from '../controllers/index'

let content = document.getElementById('root')


const router = (route) => {

    content.innerHTML = '';

    switch(route) {
        case '#/': {
            return content.appendChild(pages.home());
        }           
        case '#/posts':
            return content.appendChild(pages.posts()) 
        case '#/products':
            return content.appendChild(pages.products())    
        default:
            return console.log('404!!')   
                    
    }
};

export {router};