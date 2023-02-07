import { ReplaySubject } from 'rxjs';

export const rs$ = new ReplaySubject();

rs$.subscribe({
  next: (data) => console.log(data),
  error: (error) => console.warn(error),
  complete: () => console.log('ReplaySubject completed'),
});

const fakeAPIValuesOne = [7, 11, 13];

for (const element of fakeAPIValuesOne) {
  await wait(2000);
  rs$.next(element);
}

function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
