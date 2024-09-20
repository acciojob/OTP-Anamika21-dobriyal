// //your JS code here. If required.
// const inputs = document.querySelectorAll('.code');
// inputs.forEach((input, index) => {
//  input.addEventListener('input', () => {
//  if (input.value.length === 1 && index < inputs.length - 1) {
//  inputs[index + 1].focus();
//  }
//  });
//  input.addEventListener('keydown', (event) => {
//  if (event.key === 'Backspace' && input.value === '') {
//  if (index > 0) {
//  inputs[index - 1].focus();
//  inputs[index - 1].value = '';
//  }
//  }
//  });
// });

//your JS code here. If required.
let inputElements = document.getElementsByClassName("code");
console.log(inputElements.length)
for(let i=0; i< inputElements.length; i++){
	inputElements[i].addEventListener("keyup", (event)=>{
		let currentElement = event.target ;
		let code = event.key.charCodeAt(0);
		console.log(event.key)
		if(event.key === "Backspace"){
			let prevElement = currentElement.previousElementSibling ;
			if(prevElement){
				prevElement.focus();
			}
			return ;
		}
		
		
		
		if(code>=48 && code<=57){
			let nextElement = currentElement.nextElementSibling ;
			if(nextElement){
				nextElement.focus() ;
			}
			
		}else{
			event.target.value="" ;
		}
	})
	
}
