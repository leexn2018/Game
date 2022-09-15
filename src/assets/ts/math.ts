export const lerp16 = ( x:number, y:number, t:number ) => {
	//let dt =  ( 1 - t ) * x + t * y;
    let dt = (y - x) / (t - 1)
    //console.log(dt);

    let r = new Array()
    for (let i = 0;i <= t -1;i++){
        r.push(Number(("0x" + Math.round(x + dt * i).toString(16))))
    }
    return r
} 