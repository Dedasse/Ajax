'use strict';

const ul= document.getElementById('sarjalista');
const hakutexti= document.getElementById('hakuteksti');
const hakunappi= document.getElementById('hakunappi');



const haeTVSarja = async (haku)=>{
  ul.innerHTML= '';
  const fetchOptions = {
  /*  method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer: adqwedapdtoken',
    },
    body: JSON.stringify(objeckti),*/
  }
  
  try{
  const vastaus = await fetch('http://api.tvmaze.com/search/shows?q='+haku,fetchOptions);  //,fetchoptions
  if (!vastaus.ok) throw new Error('jokin meni pieleen');
  const sarjat = await vastaus.json();
  
  console.log(sarjat);
    

  sarjat.forEach((sarja) => {
 /*   if(sarja.show.officialSite === null){
      sarja.show.officialSite = sarja.show.url;
    }
    if(sarja.show.image === null){
      sarja.show.image= {medium: 'http://placekitten.com/320/200'};
    }*/

    ul.innerHTML+=`
      <li>
      <h2>${sarja.show.name}</h2>
      <a href="${sarja.show.officialSite === null ?
      sarja.show.url :
      sarja.show.image}">Linkki kotisivulle</a>
      <img src="${sarja.show.image === null ?
      sarja.show.image= {medium: 'http://placekitten.com/320/200'} :
      sarja.show.image.medium}" alt="${sarja.show.name}">
      <p>${sarja.show.summary}</p>
      </li>
      `
  });
  } catch(error) {
    console.log(error);
  }
} 
hakunappi.addEventListener('click',()=>{
  haeTVSarja(hakutexti.value);
});
//haeTVSarja('dead');