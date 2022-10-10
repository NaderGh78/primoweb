
//make the content of projects gallery display daynamicly
let productsDB = [
    {
        id: 1,
        bgUrl: 'primocar.jpg',
        logoImg: 'primo_car_logo.png',
        projectName: 'primocar',
        linkUrl: 'https:/www.primocar.ca/',
        linkName: 'www.primocar.ca',
        proj_desc:'Best used vehicles',
        bg_color:'#051AB3'
    },
    {
        id: 2,
        bgUrl: 'primoparts.jpg',
        logoImg: 'primo_parts_logo.png',
        projectName: 'Primoparts',
        linkUrl: 'https:/www.primoparts.ca/',
        linkName: 'www.primoparts.ca',
        proj_desc:'All the parts your car will ever need',
        bg_color:'#3F4040'
    },
    {
        id: 3,
        bgUrl: 'primoservice.jpg',
        logoImg: 'primo_service_logo.png',
        projectName: 'Primoservice ',
        linkUrl: 'https:/www.primoservice.ca/',
        linkName: 'www.primoservice.ca',
        proj_desc:'Best car repair services',
        bg_color:'#2A3181'
    },
    {
        id: 4,
        bgUrl: 'empty_proj.jpg',
        projectName: 'emptProj',
        linkUrl: 'https:/www.primoparts.ca/',
        linkName: 'www.primoparts.ca'
    },
    {
        id: 5,
        bgUrl: 'empty_proj.jpg',
        projectName: 'emptProj',
        linkUrl: 'https:/www.primoparts.ca/',
        linkName: 'www.primoparts.ca'
    },
    {
        id: 6,
        bgUrl: 'empty_proj.jpg',
        projectName: 'emptProj',
        linkUrl: 'https:/www.primoparts.ca/',
        linkName: 'www.primoparts.ca'
    },
    {
        id: 7,
        bgUrl: 'empty_proj.jpg',
        projectName: 'emptProj',
        linkUrl: 'https:/www.primoparts.ca/',
        linkName: 'www.primoparts.ca'
    },
    {
        id: 8,
        bgUrl: 'empty_proj.jpg',
        projectName: 'emptProj',
        linkUrl: 'https:/www.primoparts.ca/',
        linkName: 'www.primoparts.ca'
    },

];

localStorage.setItem('products', JSON.stringify(productsDB));
