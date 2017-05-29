import { Component, OnInit, OnChanges } from '@angular/core';
import { GetPostExampleService } from './get-post-example.service';

@Component({
  selector: 'get-post-example',
  templateUrl: './get-post-example.component.html',
  providers: [ GetPostExampleService ],
  styles: ['h1 { font-weight: normal; }']
})
export class GetPostExample implements OnInit {
  message: string;
  constructor(private getPostExampleService: GetPostExampleService) {}

  ngOnInit() {
    this.get();
    this.post();
  }
  get(){
    this.getPostExampleService.getData().subscribe((data) => {
        this.message=data[0].title;
        });
  }
  post(){
    this.getPostExampleService.postData().subscribe((data) => {
        console.log("data posted successfully");
        });
  }

}