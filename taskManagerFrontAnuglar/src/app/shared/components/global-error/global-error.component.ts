import { Component } from '@angular/core';
import { GlobalErrorService } from 'src/app/services/global-error/global-error.service';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss'],
})
export class GlobalErrorComponent {
  constructor(public errorService: GlobalErrorService) {}
}
