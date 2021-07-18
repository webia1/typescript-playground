import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  subscriber.next('Alice');
  subscriber.next('Ben');
  subscriber.error('Error happened!');
  subscriber.complete();
  return () => {
    console.log('Tear Down Process');
  };
});

observable$.subscribe({
  next: (value: any) => console.log(value),
  error: (error: any) => console.log(error),
  complete: () => console.log('Completed!'),
});
