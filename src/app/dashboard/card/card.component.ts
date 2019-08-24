import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor(private httpClient: HttpClient) { }
  color = "link";
  colorBadge = "accent";

  ngOnInit() {
  }

  onLike(card: any){  
     this.httpClient.post('/api/skills', card).subscribe( ret => {
      console.log(ret);
    }, err => {
      console.log(err);
    });
    card.likes += 1;
    this.checkColor(card);
    console.log(this.color);
  }

  checkColor(card: any){
    if(card.likes > 4)
      this.color = "primary";
    if(card.likes > 9){
      this.color = "warn"
      this.colorBadge = "primary"
    }
  }

  onShare(){
    window.open('https://www.linkedin.com/in/raphael-marques-977411119/');
  }

}
