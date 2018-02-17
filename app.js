var app = {};
app.add = function(numbers,callback){
    var result = 0;
    if(numbers !== null  && numbers.length > 0){
        for(number in numbers){
            result = result + numbers[number];

        }
        if(callback !== undefined){
            callback(result);
        }
    }
}
/*

    <script src="app.js"></script>
    <script>
    app.add([10,3],function(result){
        console.log("Result is " + result);
    });
 function addRow(){
 var table = document.getElementById("emp");
 var tr = document.createElement("tr");
 var td = document.createElement("td");
 td.innerHTML = document.getElementById("firstName").value;
 var td2 = document.createElement("td");
 td2.innerHTML = document.getElementById("lastName").value;
 tr.appendChild(td);
 tr.appendChild(td2);
 table.appendChild(tr);
 document.getElementById("firstName").value = "";
 document.getElementById("lastName").value = "";
 document.getElementById("firstName").focus();
 var data =[
 {"firstName" :"Ali","lastName" : "Imran"},
 {"firstName" :"Shahid","lastName" : "Afridi"},
 {"firstName" :"Tahir","lastName" : "Imran"}
 ]
 for( emp in data){

 console.log(data[emp].firstName + " " + data[emp].lastName);
 }
 }
</script>*/
