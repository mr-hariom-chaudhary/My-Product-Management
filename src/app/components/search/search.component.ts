import { Component, EventEmitter, Output, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,FormsModule,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

@Output() search = new EventEmitter <string>();

text = "";
// inputChange(event:any){
//   console.log("input changed",event.target.value);
//   // this.text=event.target.value;
// }

onSearch(){
  console.log("Called on search");
  this.search.emit(this.text);
}

}

