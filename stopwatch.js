
let start = document.getElementById('start-btn');
let pause = document.getElementById('pause-btn');
let reset = document.getElementById('reset-btn');
let cast = document.getElementById('cast-btn');

let hrTime = document.getElementById('hr-time');
let minTime = document.getElementById('min-time');
let secTime = document.getElementById('sec-time');
let milisecTime = document.getElementById('milisec-time');

let hr = 0, min = 0, sec = 0, milisec= 0;
let castArr = []; let count =0, castStr = '';

start.addEventListener('click' ,function(){
    timer = true;
    console.log("hello");
    stopWatch();
})

pause.addEventListener('click', function(){
    timer = false;
    console.log("kill");
})

reset.addEventListener('click', function(){
    timer =false;
    hr=0; min = 0; sec = 0; milisec = 0;
    hrTime.innerHTML = '00';
    minTime.innerHTML = '00';
    secTime.innerHTML = '00';
    milisecTime.innerHTML = '000';
    console.log("dare");
})

cast.addEventListener('click' ,function(){
    // timer = false;
    console.log("pale");
    // watch();
    // clickCast();
    let str = castWatch(w);
    console.log();
    castArr.push(castStr);
    for(let i=0; i<castArr.length;i++){
        console.log(`${i+1} ${castArr[i]}`);
    }
})

function stopWatch(){
    
    if(timer){
        milisec++;
        if(milisec == 100){
            sec++; milisec=0;
        }
        if(sec == 60){
            min++; sec=0;
        }
        if(min == 60){
            hr++; min = 0; sec =0;
        }
        let hour = hr;
        let second = sec;
        let minute = min;
        let milisecond = milisec;
        if(hr<10){
            hour = '0' + hour;
        }
        if(min<10){
            minute = '0' + minute;
        }
        if(sec<10){
            second = '0' + second;
        }
        if(milisec<10){
            milisecond = '0' + milisecond;
        }

        hrTime.innerHTML = hour;
        minTime.innerHTML = minute;
        secTime.innerHTML = second;
        milisecTime.innerHTML = milisecond;
        let w = castWatch(hour,minute,second,milisecond);
        let str = clickCast(w);
        // console.log(milisec);
        // castStr = `${hour}:${minute}:${second}:${milisecond}`;
        setTimeout(stopWatch, 10);
    }
}

function castWatch(h,m,s,ms){
    castStr = `${h}:${m}:${s}:${ms}`;
    // console.log(castStr);
    return castStr;
}

// function clickCast(w){
//     let str = w;
//     console.log();
//     // castArr.push(castStr);
//     // for(let i=0; i<castArr.length;i++){
//     //     console.log(`${i+1} ${castArr[i]}`);
//     // }
// }
