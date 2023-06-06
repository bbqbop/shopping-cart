export default function getImages(itemName) {
    let images = [];
    let path = require.context(`../assets/pictures/`, false, /\.(png|jpe?g|svg)$/);
    path.keys().forEach((item) => {
        if (item.includes(itemName)){
            images.push(path(item))
        }
    });
    
    return images;
}
