export let grade:number = 81;
let noteA:string = 'A';
let noteB:string = 'B';
let noteC:string = 'C';
let noteD:string = 'D';
let noteF:string = 'F';

if ( grade >= 90 ) {
    console.log( 'La nota es A: ', grade);
} else if ( grade >= 80) {
    console.log( 'La nota es B: ', grade);;
} else if (grade >= 70 ) {
    console.log( 'La nota es C: ', grade);;
} else if (grade >= 60 ) {
     console.log( 'La nota es D: ', grade);;
} else {
    console.log( 'La nota es', noteF,':', grade);
}
    
