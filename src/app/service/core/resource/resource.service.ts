import { OnDestroy, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { share } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ResourceService implements OnDestroy {
  private url = 'assets/data/resources.json';
  private data: string[] = [];
  private change$ = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) {}

  get change(): Observable<string[]> {
    return this.change$.pipe(share());
  }

  setResources(items: string[]) {
    this.data = items;
    this.change$.next(this.data);
  }

  //   加载拥有资源权限码
  async load(userId: string) {
    return this.http
      .get<string[]>(this.url, {
        params: { userId }
      })
      .subscribe(data => {
        this.setResources(data);
      });
  }

  ngOnDestroy() {
    this.change$.unsubscribe();
  }
}
