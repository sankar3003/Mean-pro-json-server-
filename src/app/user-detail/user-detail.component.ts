import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Pet {
	id: any;
	type: string;
	name: string;
	age: string; // NOTE: This is a String because it is an open-ended form value.
	isPastOn: boolean;
}
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

api="http://localhost:2000/pets";

userApi="http://localhost:2500/skills";

obj:any={}	

public form: {
		pets: Pet[];
	};
	skills: { id: number; skill: string; }[];
 

	// I initialize the app component.
	constructor(
	private http:HttpClient ,
	
  ) {
 
		this.form = {
			pets: []
		};
 
		// Add an initial pet form-entry.
		this.addPet();
 
	}
  ngOnInit(): void {

this.skills=[
	{
		id:1,
		skill:"php"
	},
	{
		id:1,
		skill:"js"
	},
	{
		id:1,
		skill:"Html"
	},
]

	var myObj, i, j, x = "";
	myObj = {
	   "name":"John",
	   "age":30,
	   "cars": [
	 	{"name":"Ford", "models":["Fiesta", "Focus", "Mustang"]},
	 	{"name":"BMW", "models":["320", "X3", "X5"]},
	 	{"name":"Fiat", "models":["500", "Panda"] }
	   ]
	 };


console.log("obj" , myObj);


  }
 
	// ---
	// PUBLIC METHODS.
	// ---
 
	// I add a new pet record to the form-model.
	public addPet() : void {
 
		// CAUTION: When we output the form controls, we need to provide a unique name
		// for each input (so that it can be registered with the parent NgForm). For the
		// sake of this demo, we're going to use the current TIMPESTAMP (Date.now()) as a
    // hook into something unique about this model.

		this.form.pets.push({
			id: new Date(), // <--- uniqueness hook.
			type: "Dog",
			name: "",
			age: "",
			isPastOn: false
		});
 
	}

 
	// I process the form-model.
	public processForm( form: any ) {
 
		console.warn( "Handling form submission!" );
 
		console.group( "Form Data" );
		console.log( this.form.pets );
		console.groupEnd();
 
		console.group( "Form Model" );
		console.log( form );
    console.groupEnd();
    var reqobj=this.form.pets;
    reqobj.forEach(element => {
      this.http.post(`${this.api}`,element).subscribe(res=>{

      })
    });
 
 
	}
 
 
getData(){
  this.http.get(this.api).subscribe((res:any)=>{
    console.log(res);
   // return false;
this.form.pets= res;
  })
}

	// I remove the pet at the given index.
	public removePet( index: number ) : void {
 
		this.form.pets.splice( index, 1 );
 
	}

	saveSkill(form){
		console.log("form" ,form)
		this.http.post(`${this.userApi}`,this.obj).subscribe(res=>{
			console.log(res);
		})
	}
}
