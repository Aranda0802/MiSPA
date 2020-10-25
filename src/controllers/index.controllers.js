import views from '../views/home.html'

export default () => {

    const divElement = document.createElement('div');
    divElement.classList= 'text-Red';
    divElement.innerHTML = views;

     return divElement;
};

