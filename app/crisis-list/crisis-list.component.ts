import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
  urllink: string="/assets/img/tof.jpg";
  
  // selectFiles(event){
  //   if(event.target.files){{
  //     var reader = new FileReader()
  //     reader.readAsDataURL(event.target.file[0])
  //     reader.onload=(event:any)=>{
  //       this.urllink=event.target.result
  //     }
  //   }}
  // }
   constructor() { }

  info = {
    "orders": {
    "total":17,
    "data":[
      {
        "nom":"Nom:TONYE NWALAL ",
        "prenom":"jules"
      }
    ]



    }
   
  }

  ngOnInit() {
  }

}
