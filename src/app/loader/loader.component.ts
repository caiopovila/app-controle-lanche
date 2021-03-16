import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  template: `
  <div class="loader" [hidden]="!loading">
    <mat-progress-bar mode="indeterminate"></mat-progress-bar>
  </div>
  `,
  styles: [`
  .loader {
    position: fixed; 
    top: 0; 
    width: 100%;
  };
  `]
})
export class LoaderComponent {
  
  loading: boolean;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });
   }
}
