// marquee clock

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('marquee').innerHTML =  h + ":" + m + ":" + s;
    document.getElementById('marquee-2').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  }

// analog clock

  setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
  
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

// switch images

let images = ['img/riso-1.gif', 'img/riso-2.gif', 'img/riso-3.gif' , 'img/riso-5.gif'];

let index = 0;
const imgElement = document.querySelector('#riso-1');

function change() {
   imgElement.src = images[index];
   index > 2 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 5000);
};

// last modified

let text = document.lastModified;
document.getElementById("lastUpdate").innerHTML = text;