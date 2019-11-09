//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (x) => {

  for(var i=97; i<122; i++){ 
	  if (x.toLowerCase().includes(String.fromCharCode(i))!==true){
		  break;
	  }
	  
	  
  }
  if (i===122){
	  return true
  }else {
	  return false
  }
};
