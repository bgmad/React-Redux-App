export const swapArray = (array, index1, index2) => {
    const arr = array.map((x, i, a) => {
        if (i === index1) {
            return a[index2];
        } else if (i === index2) {
            return a[index1]
        } 
        return x;
    })
    return arr;
}

export const getSongName = (str) => {
    return str
        .split(' - ')[1]
        .split(' ')
        .map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
}
export const getArtistName = (str) => {
    return str
    .split(' - ')[0]
    .split(' ')
    .map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

