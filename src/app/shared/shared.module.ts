import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlacecholderDirective } from './placeholder/placecholder.directive';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlacecholderDirective,
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlacecholderDirective,
    DropdownDirective,
    CommonModule
  ],
  entryComponents: [AlertComponent]
})
export class SharedModule {

}
