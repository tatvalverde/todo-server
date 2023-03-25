 const names = [];
export default function info(reg, res) {
names.push(req.body.name)
res.status(200).json(names);
}



// const a = req.body.a;
// const b = req.body.b;
// const sum = a + b;
// res.send('Info here! ' + sum );
