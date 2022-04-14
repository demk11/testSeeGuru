document.addEventListener("DOMContentLoaded", function(){
	
	function view(data){
		console.log(data);
		let person_view = document.createElement("div"),
			person_view_h2 = document.createElement("h2"),
			person_view_span = document.createElement("span"),
			person_view_span_1 = document.createElement("span"),
			person_view_span_2 = document.createElement("span"),
			person_view_h3 = document.createElement("h3"),
			person_view_p = document.createElement("p"),
			person_view_p1 = document.createElement("p"),
			person_view_p2 = document.createElement("p"),
			person_view_a = document.createElement("a"),
			person_view_br = document.createElement("br");
		
		person_view.classList.add("person__view");
		person_view_h2.classList.add("person__h2__view");
		person_view_h2.innerHTML = data.name;
		person_view_span.classList.add("person__span");
		person_view_span.innerHTML = `id: ${data.id} | username: ${data.username} | email: ${data.email}`;
		
		person_view.appendChild(person_view_h2);
		person_view.appendChild(person_view_span);
		
		document.getElementsByClassName("main-block__div__view")[0].appendChild(person_view);
		
		
		person_view = document.createElement("div");
		person_view_span = document.createElement("span");
		
		person_view.classList.add("person__view");
		person_view_h3.classList.add("person__h3__view");
		person_view_h3.innerHTML = "Address";
		person_view_p1.classList.add("person__p__view");
		person_view_p1.innerHTML = `${data.address.zipcode} ${data.address.city}, ${data.address.street}, ${data.address.suite}`;
		person_view_p2.classList.add("person__p__view");
		person_view_p2.innerHTML = "Geo: ";
		person_view_span.classList.add("person__span");
		person_view_span.innerHTML = `lat "${data.address.geo.lat}" - lng "${data.address.geo.lng}"`;
		
		person_view_p2.appendChild(person_view_span);
		
		person_view.appendChild(person_view_h3);
		person_view.appendChild(person_view_p1);
		person_view.appendChild(person_view_p2);
		
		document.getElementsByClassName("main-block__div__view")[0].appendChild(person_view);
		
		
		person_view = document.createElement("div");
		person_view_h3 = document.createElement("h3");
		person_view_p = document.createElement("p");
		
		person_view.classList.add("person__view");
		person_view_h3.classList.add("person__h3__view");
		person_view_h3.innerHTML = "Phone";
		person_view_p.classList.add("person__p__view");
		person_view_p.innerHTML = data.phone;
		
		person_view.appendChild(person_view_h3);
		person_view.appendChild(person_view_p);
		
		document.getElementsByClassName("main-block__div__view")[0].appendChild(person_view);
		
		
		person_view = document.createElement("div");
		person_view_h3 = document.createElement("h3");
		person_view_p = document.createElement("p");
		
		person_view.classList.add("person__view");
		person_view_h3.classList.add("person__h3__view");
		person_view_h3.innerHTML = "Website";
		person_view_p.classList.add("person__p__view");
		person_view_a.classList.add("person__a__view");
		person_view_a.setAttribute("href", data.website);
		person_view_a.innerHTML = data.website;
		
		person_view_p.appendChild(person_view_a);
		person_view.appendChild(person_view_h3);
		person_view.appendChild(person_view_p);
		
		document.getElementsByClassName("main-block__div__view")[0].appendChild(person_view);
		
		
		person_view = document.createElement("div");
		person_view_h3 = document.createElement("h3");
		person_view_p = document.createElement("p");
		
		person_view.classList.add("person__view");
		person_view_h3.classList.add("person__h3__view");
		person_view_h3.innerHTML = "Company";
		person_view_p.classList.add("person__p__view");
		person_view_p.innerHTML = data.company.name;
		person_view_span_1.classList.add("person__span");
		person_view_span_1.innerHTML = data.company.catchPhrase;
		person_view_span_2.classList.add("person__span");
		person_view_span_2.innerHTML = data.company.bs;
		
		person_view.appendChild(person_view_h3);
		person_view.appendChild(person_view_p);
		person_view.appendChild(person_view_span_1);
		person_view.appendChild(person_view_br);
		person_view.appendChild(person_view_span_2);
		
		document.getElementsByClassName("main-block__div__view")[0].appendChild(person_view);
	}
	
	fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(data => {
			
			for (var i = 0; i < data.length; i++){
				const person = document.createElement("li"),
					  person_name = document.createElement("div"),
					  person_h2 = document.createElement("h2"),
					  person_p = document.createElement("p"),
					  person_id = document.createElement("div"),
					  person_span = document.createElement("span"),
					  person_buttons = document.createElement("div"),
					  person_button_view = document.createElement("button"),
					  person_button_delete = document.createElement("button");
				
				person.classList.add("person");
				
				person_name.classList.add("person__div");
				person_name.classList.add("person__div__name");
				person_h2.classList.add("person__h2");
				person_p.classList.add("person__p");
				
				person_id.classList.add("person__div");
				person_id.classList.add("person__div__id");
				person_span.classList.add("person__span");
				
				person_buttons.classList.add("person__div");
				person_buttons.classList.add("person__div__buttons");
				person_button_view.classList.add("person__button__view");
				person_button_delete.classList.add("person__button__delete");
				
				person_button_view.setAttribute("data", JSON.stringify(data[i]));
				
				person_button_view.addEventListener("click", function(){
					var data_person = JSON.parse(this.getAttribute("data"));
					
					document.getElementsByClassName("main-block__div__list")[0].style.opacity = 0;
					
					document.getElementsByClassName("main-block__div__list")[0].addEventListener("transitionend", function(){
						document.getElementsByClassName("main-block__div__list")[0].style.display = "none";
						
						document.getElementsByClassName("main-block__div__view")[0].style.display = "block";
						document.getElementsByClassName("main-block__div__view")[0].style.opacity = 1;
						
						view(data_person);
					});
					
				});
				
				person_button_delete.addEventListener('click', function(){
					
					if (document.getElementById("people-list").children.length > 1){
						this.parentElement.parentElement.remove();
					}
					
				});
				
				person_h2.innerHTML = data[i].name;
				person_p.innerHTML = data[i].address.city;
				person_span.innerHTML = data[i].id;
				person_button_view.innerHTML = "View";
				person_button_delete.innerHTML = "Delete";
				
				person_name.appendChild(person_h2);
				person_name.appendChild(person_p);
				
				person_id.appendChild(person_span);
				
				person_buttons.appendChild(person_button_view);
				person_buttons.appendChild(person_button_delete);
				
				person.appendChild(person_name);
				person.appendChild(person_id);
				person.appendChild(person_buttons);
				
				document.getElementById("people-list").appendChild(person);
			}
			
		});
	
});