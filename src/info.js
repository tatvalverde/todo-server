export default function info(reg, res) {
  const a = 123;
  const b = Math.random();
  const c = a + b;
  res.send('Info here! ' + c);
}
