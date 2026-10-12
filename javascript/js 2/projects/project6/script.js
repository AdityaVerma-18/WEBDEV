const randomcolor=function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalid;
const startcolor=function(){
    const changecolor=function color(){
        document.body.style.backgroundColor=randomcolor();
    }
    intervalid=setInterval(changecolor,1000);
}

const stop=function(){
    clearInterval(intervalid);
}

document.querySelector('#start').addEventListener('click',startcolor);
document.querySelector('#stop').addEventListener('click',stop);


// for better practices refer markdownfile