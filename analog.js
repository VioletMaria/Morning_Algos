//clock angles!!!!

//given a number of minutes past midnight, determine
//the angle between the hour and minute hands at that point in time
//return the angle between the two hands
//keep in mind that on an analog clock, the hour hand is
//not perfectly aligned with the number hour
//e.g. at 4:45, the hour hand is 3/4 the way between 4 and 5

const clockAngles = (minutes) => {
    // Joe's solution plus my own stuff:
    // let hrsDeg =minutes/2%360
    // let minDeg = minutes*6%360
    // total =  hrsDeg - minDeg
    // return Math.abs(Math.round(total))

    // Me and Serge's solution:

    let time = minutes / 60;
    let angle = time * 30;
    angle = angle % 360;
    return Math.round(angle);
}

console.log(clockAngles(360));
console.log(clockAngles(180));
console.log(clockAngles(210));
console.log(clockAngles(588));
console.log(clockAngles(980));
console.log(clockAngles(361));