function randomRgbaColorFactory() {
    const o = Math.round, r = Math.random, s = 255;
    const rgb= 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',';

    return function(opacity){
        return rgb+opacity + ')';
    }
}

export default randomRgbaColorFactory