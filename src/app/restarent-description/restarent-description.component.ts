import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import {ActivatedRoute} from '@angular/router';
import { RestarentService} from '../service/restarent.service';
import { CKEditorComponent } from 'ng2-ckeditor';
@Component({
  selector: 'app-restarent-description',
  templateUrl: './restarent-description.component.html',
  styleUrls: ['./restarent-description.component.css']
})
export class RestarentDescriptionComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(): void {

     this.staticTabs.justified=true;
    let editor = this.editor.instance;

       editor.config.toolbarGroups = [
	// { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
	// { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
	{ name: 'insert' },
	// { name: 'forms' },
	// { name: 'tools' },
	// { name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
	{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
	{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
	{ name: 'styles' },
	{ name: 'colors' },
	// { name: 'about' },
{ name: 'font' }
];
  // editor.config.toolbarGroups = [
  //      { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
  //           { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] }
  //       ]

        // editor.config.removeButtons = 'Source,Save,Templates,Find,Replace,Scayt,SelectAll,Form,Radio';
  
  }
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
@ViewChild('editor') editor: CKEditorComponent;
public name=''
public restarent_id;
public toolbar=[{
  name:'clipboard',
  items:['cut']
}];
public responseData;
public newReview
  constructor(private router :ActivatedRoute,private RestarentService:RestarentService) { 
   
  }

  ngOnInit() {
    this.restarent_id=this.router.snapshot.params["id"];
    this.getRestarentApi();
 
  }
  getRestarentApi(){
    this.RestarentService.getRestarentDetails(this.restarent_id).subscribe(response=>{
      console.log(response)
      response[0].time=JSON.parse(response[0].time)
       response[0].product_list=JSON.parse(response[0].product_list)
      this.responseData=response[0];
    })
  }
  updateReview(){
    this.RestarentService.addReview(this.restarent_id,this.name,this.newReview,5).subscribe(res=>{
      console.log(res);
      this.responseData.reviews.push(res)
    })
  }
}
