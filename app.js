let left_btn =document.getElementsByClassName('fa-chevron-left')[0];
let right_btn =document.getElementsByClassName('fa-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementsByClassName('search_input')[0];
left_btn.addEventListener('click', ()=> {
cards.scrollLeft -= 140;
})
right_btn.addEventListener('click', ()=> {
    cards.scrollLeft += 140;
})
let json_url ="movie.json";
fetch(json_url).then(Response => Response.json())
.then((data) => {
     data.forEach((ele, i) => {
         let {name, imdb, date, sposter, bposter, genre, type, url} = ele;
         let card =document.createElement('a');
         card.classList.add('card');
         card.href = url;
         card.innerHTML =`
         <img src="${sposter}" alt="${name}" class="poster">
         <div class="rest_card">
             <img src="${bposter}" alt="">
             <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                   <p>${genre}, ${date}</p>
                   <h3><span>IMDB</span><i class="fa-solid fa-star"></i>${imdb}</h3>
 </div>
             </div>
         </div>
         `
         cards.appendChild(card);

  });

     document.getElementById('title').innerText = data[0].name;
     document.getElementById('gen').innerText = data[0].genre;
     document.getElementById('date').innerText = data[0].date;
     document.getElementById('rate').innerHTML = `<span>IDMB</span><i class="fa-solid fa-star"></i> ${data[0].imdb}`;

    // search data load 
    data.forEach(element => {
        let {name, imdb, date, sposter, genre, type, url} = element;
        let card =document.createElement('a');
         card.classList.add('card');
         card.href = url;
         card.innerHTML =`
         <img src="${sposter}" alt="">
         <div class="cont">
             <h3>${name}</h3>
             <p>${genre}, ${date} ,<span>IDMB</span><i class="fa-solid fa-star"></i> ${imdb}</p>
         </div>
        `
        search.appendChild(card);
   });

   // search filter

   search_input.addEventListener('keyup', () => {
    let filter = search_input.Value.toUpperCase();
    let a = search.getElementsByTagName('a');
    for (let index = 0; index < a.length; index++) {
        let b = a[i].getElementsByClassName('cont')[0];
        // console.log(a.textcontent)
        let TextValue = b.textContent || b.innerText;
        if (TextValue.touppercase().indexof(filter) > -1) {
            a[index].style.display ="flex";
            search.style.visibility = "visible";
            search.style.opacity = 1;
        } else {
            a[index].style.display = "none";
        }
        if(search_input.Value == 0){
            search.style.visibility = "hidden";
            search.style.opacity = 0; 
        }
    }
   }) 

let video = document.getElementsByTagName('video')[0];
let play = document.getElementById('play');
play.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        play.innerHTML = `play <i class="fa-solid fa-pause"></i>`
    } else {
        video.pause();
        play.innerHTML = `watch <i class="fa-solid fa-play"></i>`
    }
})

let series =document.getElementById('series');

     series.addEventListener('click', () => {
        cards.innerHTML = '';

     })
});
