export default async function getImages(itemName) {

    let images = [];
    const files = import.meta.glob('../assets/pictures/*.{png,jpg,jpeg,svg}');
    const fileNames = Object.keys(files);
    
    await Promise.all(fileNames.map(async (fileName) => {
        if (fileName.includes(itemName)) {
            const module = await files[fileName]();
            images.push(module.default);
        }
    }));

    
    return images;
}
