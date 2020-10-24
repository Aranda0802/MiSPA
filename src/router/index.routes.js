const router = (route) => {
    switch(route) {
        case '#/':
           return console.log('home')
        case '#/posts':
            return console.log('Posts') 
        case '#/products':
            return console.log('Products')     
        default:
            return console.log('404!!')   
                    
    }
};

export {router};