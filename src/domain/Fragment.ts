export abstract class Fragment {
  private element: any;

  getElement () {
    return this.element
  }

  setElement (element : any) {
    this.element = element
  }
}