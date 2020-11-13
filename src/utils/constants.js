// export const LAMBDA_ENDPOINT = 'https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const META = {
    common: {
        image: '../assets/favicon.png',
    },
    index: {
        title: 'PONCHO',
        description: 'Welcome to PONCHO '
    },
    about: {
        title: 'About | PONCHO',
        description: 'About Us'
    },
    menu: {
        title: 'Menu | PONCHO',
        description: 'Poncho exclusive food and drinks'
    },
    gallery: {
        title: 'Gallery | PONCHO',
        description: 'A Peek at Our Space'
    },
    live: {
        title: 'Live Stream | PONCHO',
        description: 'Current Event at PONCHO'
    }
}
