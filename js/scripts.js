var a = 2;
    b = 4;
    value = (a*a) + (2*a*b) - (b*b);
console.log("wynik działania: " + value);
if (value>0) {

    document.write('wynik jest dodatni');
    console.log('wynik jest dodatni');

} else if (value<0) {

   document.write('wynik jest ujemny');
   console.log('wynik jest ujemny');
} else {
	document.write('wynik jest równy zero');
    console.log('wynik jest równy zero');

}