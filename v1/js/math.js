export const lerp16 = (x, y, t) => {
    let dt = (y - x) / (t - 1);
    let r = new Array();
    for (let i = 0; i <= t - 1; i++) {
        r.push(Number(("0x" + Math.round(x + dt * i).toString(16))));
    }
    return r;
};
