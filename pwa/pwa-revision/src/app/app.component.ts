import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ProductService } from './shared/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa-revision';
  update:boolean = false;
  p:any;
  errMsg:any
  constructor(private _swU: SwUpdate,private service:ProductService){}
  ngOnInit(){
    this._swU.activateUpdate().then(()=>{
      this.update = true
    })
    this.service.getSampleData().subscribe({
      next:dt => this.p = dt,
      error:err => this.errMsg = err
    })
  }
}
