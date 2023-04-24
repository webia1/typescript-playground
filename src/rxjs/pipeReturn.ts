import { Observable, from, map, tap } from 'rxjs';

function foo(x: Array<number>): Observable<boolean> {
  return from(x).pipe(map((n) => (n % 2 === 0 ? true : false)));
}

foo([1, 2, 3, 4, 5])
  .pipe(tap((n) => console.log(n)))
  .subscribe();
