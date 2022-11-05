function creatGame(player1,hour,player2){
    return`
    
    <li>
    <img src="assets/imagens/${player1}.svg" alt="bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="assets/imagens/${player2}.svg" alt="bandeira da ${player2}">
</li>
    
`
}

let delay = -0.4;
function createCard(date,day,games){
    delay = delay + 0.4;
    return `
    
    <div class="card" style='animation-delay:${delay}s'>
     <h2>${date}<span>${day}</span></h2> 
     
     <ul>
        
    ${games}
     </ul>
 </div>
      
 `
}

document.querySelector('#cards').innerHTML=
createCard('24/11','quinta',
creatGame('brazil', '16:00','serbia')) +

createCard('28/11', 'segunda',
creatGame('switzerland', '16:00','brazil')+creatGame('portugal', '13:00','uruguay'))+

createCard('02/12', 'sexta',
creatGame('brazil', '16:00','cameroon'))


