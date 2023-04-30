import { from } from 'rxjs';
import { map, reduce } from 'rxjs/operators';
const add = (x: number, y: number) => x + y;
from([
  {
    date: '2016-07-01',
    amount: -320.0,
  },
  {
    date: '2016-07-13',
    amount: 1000.0,
  },
  {
    date: '2016-07-22',
    amount: 45.0,
  },
])
  .pipe(
    map((x) => x.amount),
    reduce(add, 0),
  )
  .subscribe(console.log);
