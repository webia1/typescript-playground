import { rs$, bs$ } from './create';

rs$.subscribe({
  next: (data) => console.log(data),
  error: (error) => console.warn(error),
  complete: () => console.log('ReplaySubject completed'),
});

bs$.subscribe({
  next: (data) => console.log(data),
  error: (error) => console.warn(error),
  complete: () => console.log('BehaviorSubject completed'),
});
