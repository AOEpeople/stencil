/*!
Object.entries
*/
Object.entries||(Object.entries=function(c){for(var b=Object.keys(c),a=b.length,d=Array(a);a--;)d[a]=[b[a],c[b[a]]];return d});
/*!
Object.values
*/
Object.values||(Object.values=function(n){return Object.keys(n).map(function(r){return n[r]})});
