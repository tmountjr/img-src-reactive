export class CustomImageProvider {
  public hasOptions = false
  private vars: Record<string, Record<string, boolean>> = {}

  // constructor(private sourceUrl: string) {}

  // private getter (key: string): boolean {
  //   const [ parentKey, childKey ] = key.split('_')
  //   if (!(parentKey in this.vars)) {
  //     return false
  //   }
  //   if (!(childKey in this.vars[parentKey])) {
  //     return false
  //   }
  //   return this.vars[parentKey][childKey]
  // }

  // private setter (key: string, value: boolean) {
  //   const [parentKey, childKey] = key.split('_')
  //   if (value) {
  //     if (!(parentKey in this.vars)) {
  //       this.vars[parentKey] = {}
  //     }
  //     this.vars[parentKey][childKey] = value
  //   } else {
  //     delete this.vars[parentKey][childKey]
  //     if (Object.keys(this.vars[parentKey]).length === 0) {
  //       delete this.vars[parentKey]
  //     }
  //   }
  //   this.hasOptions = Object.keys(this.vars).length > 0
  // }

  // public get auto_webp (): boolean {
  //   return this.getter('auto_webp')
  // }

  // public set auto_webp (value: boolean) {
  //   this.setter('auto_webp', value)
  // }

  // public get auto_smallest (): boolean {
  //   return this.getter('auto_smallest')
  // }

  // public set auto_smallest (value: boolean) {
  //   this.setter('auto_smallest', value)
  // }

  constructor (private sourceUrl: string) {
    const props = ['auto_webp', 'auto_smallest']
    for (let prop of props) {
      Object.defineProperty(this, prop, {
        get: (): boolean => {
          const [parentKey, childKey] = prop.split('_')
          if (!(parentKey in this.vars)) {
            return false
          }
          if (!(childKey in this.vars[parentKey])) {
            return false
          }
          return this.vars[parentKey][childKey]
        },
        set: (value: boolean) => {
          const [parentKey, childKey] = prop.split('_')
          if (value) {
            if (!(parentKey in this.vars)) {
              this.vars[parentKey] = {}
            }
            this.vars[parentKey][childKey] = value
          } else {
            delete this.vars[parentKey][childKey]
            if (Object.keys(this.vars[parentKey]).length === 0) {
              delete this.vars[parentKey]
            }
          }
          this.hasOptions = Object.keys(this.vars).length > 0
        },
        enumerable: true,
        configurable: true,
      })
    }
  }

  public get imgSrcUrl (): string {
    return `${this.sourceUrl}${this.hasOptions ? this.qs() : ''}`
  }

  private qs (): string {
    return `?auto=${Object.keys(this.vars.auto).join(',')}`
  }
}