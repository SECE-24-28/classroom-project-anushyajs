
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Arrays</h1>

<p id="demo"></p>

<script>
let students =["Anu","vini","sam","varasu"];
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
for(let i=0;i<students.length;i++){
    console.log(students[i]);

}
console.log(students.length);
let a=[1,2];
a.push(3);
console.log(a);

let b=[1,2,3];
b.pop();
console.log(b);

let c=[1,2,3,4];
c.unshift();
console.log(c);

let d=[1,2,3,4,5];
d.tshift();
console.log(d);


</script>

</body>
</html>