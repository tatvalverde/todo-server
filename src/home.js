export default function home(reg, res) {
  res.status(200).json({
    name: 'TATI',
    components: ['adv', 'asd', 'rty'],
    q: true,
  });
}
