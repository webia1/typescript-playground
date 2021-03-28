import { of, from, Observable } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

const artist: Array<string> = [
  'Ge',
  'Geo',
  'George',
  'George Mi',
  'George Mich',
  'George Michael',
];

const fakeSearchApi = (artist: unknown): Observable<unknown> => {
  return of(`Response for: ${artist}`).pipe(delay(1000));
};

from(artist)
  .pipe(switchMap((artist) => fakeSearchApi(artist)))
  .subscribe((res) => console.log(res));
