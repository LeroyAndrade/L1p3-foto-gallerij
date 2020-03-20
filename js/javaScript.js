let linksFotos =[
  './splash/1.jpg',
  './splash/2.jpg',
  './splash/3.jpg',
  './splash/4.jpg',
  './splash/5.jpg',
  './splash/6.jpg',
  './splash/7.jpg',
  './splash/8.jpg',
  './splash/9.jpg',
  './splash/10.jpg',
  './splash/11.jpg',
  './splash/12.jpg',
  './splash/13.jpg',
  './splash/14.jpg',
  './splash/15.jpg',
  './splash/16.jpg',
  './splash/17.jpg',
  './splash/18.jpg',
  './splash/19.jpg',
  './splash/20.jpg'
];

let numr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

//document.getElementById('container').innerHTML = "<img src="fotos[0];
//plaatsFoto(linksFotos[0])

const container = document.getElementById('container');
// document.getElementById


function plaatsFoto(url){
    let item = document.createElement('figure');

    item.className='item0';
    let deFoto = document.createElement('img')
    deFoto.className = 'img'+rand;
    deFoto.src = url;
    deFoto.alt = 'Lekkernij';
    //foto in de figure plaatsen met de waarde: class = img0 & alt = fruit inclusief het pad van img
    // document.getElementById ->figure
    item.append(deFoto);
    //
    // document.getElementById ->figure img
    container.append(item);

}
/*
for (let i = linksFotos.length; i>1; i--){
  plaatsFoto( linksFotos[i] );}
*/
for (let i = linksFotos.length; i>0; i--){
   rand = (Math.floor(Math.random()*linksFotos.length));
  plaatsFoto( linksFotos[rand] );

//  linksFotos.splice();
}
