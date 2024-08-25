const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",
  
    heroHeadText:
      "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
      "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  
    sectionHeadText:
      "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  };
  
  export { styles };
  
  const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

// const colors = [
//   "#FFFFFF",
//   "#FFFFFF",
//   "#FFFFFF", // White color
//   "#FFFFFF",
//   "#FFFFFF",
//   "#FFFFFF",
//   "#800080",
//   "#800080",
//   "#800080" // Purple color
// ];

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

// const timeElm = document.getElementById('time');
// const doc = document.documentElement;
// const { clientWidth, clientHeight } = doc;

// const pad = (val) => val < 10 ? `0${val}` : val;

// const animationFrame$ = Rx.Observable.interval(0, Rx.Scheduler.animationFrame);

// const time$ = Rx.Observable
//   .interval(1000)
//   .map(() => {
//     const time = new Date();
    
//     return {      
//       hours: time.getHours(),
//       minutes: time.getMinutes(),
//       seconds: time.getSeconds(),
//     };
//   })
//   .subscribe(({ hours, minutes, seconds}) => {
//     timeElm.setAttribute('data-hours', pad(hours));
//     timeElm.setAttribute('data-minutes', pad(minutes));
//     timeElm.setAttribute('data-seconds', pad(seconds));
//   });

// const mouse$ = Rx.Observable
//   .fromEvent(document, 'mousemove')
//   .map(({clientX, clientY}) => ({
//     x: (clientWidth / 2 - clientX) / clientWidth,
//     y: (clientHeight / 2 - clientY) / clientHeight,
//   }));

// const smoothMouse$ = animationFrame$
//   .withLatestFrom(mouse$, (_, m) => m)
//   .scan(RxCSS.lerp(0.1));

// RxCSS({
//   mouse: smoothMouse$
// }, timeElm);