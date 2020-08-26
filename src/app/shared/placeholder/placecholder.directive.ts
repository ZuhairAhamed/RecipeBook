import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlacecholder]'
})
export class PlacecholderDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
