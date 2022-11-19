import { BehaviorSubject, ReplaySubject } from 'rxjs';

export const rs$ = new ReplaySubject();
export const bs$ = new BehaviorSubject(100);

rs$.next(10);
rs$.next(20);
rs$.next(30);

bs$.next(200);
bs$.next(300);

rs$.next(40);
bs$.next(400);

rs$.next(50);
bs$.next(500);
