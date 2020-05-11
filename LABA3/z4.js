let n = 0;
var arr = [
{value: 100, type: 'USD'},
{value: 215, type: 'EUR'},
{value: 7, type: 'EUR'},
{value: 99, type: 'USD'},
{value: 354, type: 'USD'},
{value: 12, type: 'EUR'},
{value: 77, type: 'USD'},
];
for(let i = 0; i < 7 ; i++){
	if ( (arr[i].type == 'USD') && (arr[i].value < 100)){
	n= n + arr[i].value;
	}
}
var res = arr.filter(function(typ) {
  return typ.type == 'USD';
});

alert( JSON.stringify(res) );
alert (n);