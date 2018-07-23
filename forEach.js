
function getPeopleData(data){
	var data1 =[];
  var people;
  
  data.forEach(function (data) {
      data1.push(data.name);
  })
  
/*  
  for(var i=0;i<data.length;i++){
  		people=data[i]; 
      data1.push(people.name);
  }
  */
  return data1;
}

var data=getPeopleData([
  {   name:"jay", age:22 , gender:"M"  },
  {   name:"ravi", age:16 , gender:"M"  },
  {   name:"yashwini", age:42 , gender:"F"  },
])

