import { BehaviorSubject } from 'rxjs'

export const LayoutService = new (
  class {
    readonly footer$ = new BehaviorSubject<boolean>(true)

    get footer() {
      return this.footer$.getValue()
    }

    set footer(value) {
      this.footer$.next(value)
    }
  }
)()
