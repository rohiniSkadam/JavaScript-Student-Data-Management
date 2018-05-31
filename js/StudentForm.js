jsonObj = [];
var index = 0;

function addStudent() {
    var student = {};
    student.name = document.getElementById("name").value;
    student.rollNo = document.getElementById("rollNo").value;
    student.sub1 = document.getElementById("sub1").value;
    student.sub2 = document.getElementById("sub2").value;

    var sub1=student.sub1;
    var sub2=student.sub2;
    var sum=parseInt(sub1)+ parseInt(sub2);
    var avg = sum /2;

    jsonObj[index] = new Object();
    jsonObj[index].name = student.name;
    jsonObj[index].rollNo = student.rollNo;
    jsonObj[index].sub1 = student.sub1;
    jsonObj[index].sub2 = student.sub2;
    jsonObj[index].avg = avg;
    showTable(index);
    index ++;
}
function showTable(i) {
    var table = document.getElementById("studData");
    var newRow = table.insertRow( i + 1);
    var name = newRow.insertCell(0);
    var rollNo = newRow.insertCell(1);
    var sub1 = newRow.insertCell(2);
    var sub2 = newRow.insertCell(3);
    var avg = newRow.insertCell(4);

    name.innerHTML = jsonObj[i].name;
    rollNo.innerHTML = jsonObj[i].rollNo;
    sub1.innerHTML = jsonObj[i].sub1;
    sub2.innerHTML = jsonObj[i].sub2;
    avg.innerHTML = jsonObj[i].avg;
}
function search() {
    var flag=false;
    var op='';
    for(var i=0;i<jsonObj.length;i++){
        if(jsonObj[i].name===document.getElementById('name').value){
            var rec="Record Found : Below are the details of student <br/>";
            var studName=jsonObj[i].name;
            var studRollNo=jsonObj[i].rollNo;
            var studSub1=jsonObj[i].sub1;
            var studSub2=jsonObj[i].sub2;
            var studAvg=jsonObj[i].avg;

            op=rec+"<br/> Student Name : "+studName+"<br/> Roll No : "+studRollNo+"<br/> Subject 1 : "+studSub1
                +"<br/> Subject 2 : "+studSub2+"<br/> Average : "+studAvg;

            document.getElementById('rollNo').value=studRollNo;
            document.getElementById('sub1').value=studSub1;
            document.getElementById('sub2').value=studSub2;
            document.getElementById("editBtn").disabled=false;
            document.getElementById("submitBtn").disabled=true;
            flag=true;
        }
    }
    if(flag){
        document.getElementById("showData").innerHTML=op;
    }
    else {
        op="Sorry !! No Records by this name"
        document.getElementById("showData").innerHTML=op;
        document.getElementById("submitBtn").disabled=false;
        document.getElementById("editBtn").disabled=true;
    }
}

function editData() {
    for(var i=0;i<jsonObj.length;i++){
        if(jsonObj[i].name===document.getElementById('name').value) {
            jsonObj[i].name=document.getElementById('name').value;
            jsonObj[i].rollNo=document.getElementById('rollNo').value;
            jsonObj[i].sub1=document.getElementById('sub1').value;
            jsonObj[i].sub2=document.getElementById('sub2').value;
            var sub1=jsonObj[i].sub1;
            var sub2=jsonObj[i].sub2;
            var sum=parseInt(sub1)+ parseInt(sub2);
            var avg = sum /2;
            jsonObj[i].avg=avg;
            search();
            document.getElementById("studData").deleteRow(i + 1);
            showTable(i);
        }
    }
}
function validateData() {
    var name = document.getElementById('name').value;
    var rollNo =document.getElementById('rollNo').value
    var sub1=document.getElementById('sub1').value;
    var sub2=document.getElementById('sub2').value;

    if (name === '' || rollNo ==='' || sub1==='' || sub2===''){
        alert("Please Enter All Details")
    }else {
        addStudent()
        document.getElementById('name').value='';
        document.getElementById('rollNo').value='';
        document.getElementById('sub1').value='';
        document.getElementById('sub2').value='';
    }

}

