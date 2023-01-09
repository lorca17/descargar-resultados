 let a = document.createElement("a");
 let enlaces = document.querySelectorAll('.yuRUbf a');
 let datos = [];
 enlaces.forEach((e)=>datos.push(e.href));
 let file = new Blob([JSON.stringify(datos)], {type: 'text'});
 let url = URL.createObjectURL(file);
 a.href = url;
 a.download = 'datos.txt';
 a.click();
