const itemLength = 10;
const gap = 10;

function circle(wr, hr, radian) {
  // x = W * cos(R)
  const x = wr * Math.cos(radian);
  // y = H * sin(R)
  const y = hr * Math.sin(radian);
  return {
    x,
    y,
  };
}

function display(cx, cy, wr, hr) {
  for (let i = 0; i < itemLength; i++) {
    const degree = (360 / itemLength) * i;
    console.log(degree);
    const radian = (degree * Math.PI) / 180;
    const point = circle(wr, hr, radian);
    const x = Math.floor(point.x + cx);
    const y = Math.floor(point.y + cy);
    console.log(point);
    const el = document.querySelector(`.point${i}`);

    el.style.left = x - gap + "px";
    el.style.top = y - gap + "px";
  }
}

display(265, 265, 265, 265);
/*   const degree = 360 / 8 * (...i) - 90;
 */
