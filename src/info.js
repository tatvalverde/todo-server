export default function info(reg, res) {

 const a = req.body.a;
 const b = req.body.b;
 const sum = a + b;
 res.send('Info here! ' + sum );
}
