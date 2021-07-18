import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  subscriber.next('Alice');
  subscriber.next('Ben');
  subscriber.complete();
});

observable$.subscribe({
  next: (value: any) => console.log(value),
  complete: () => console.log('Completed!'),
});
