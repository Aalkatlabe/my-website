let puzzle = document.getElementById('puzzle');


let a = ["img/1.jpg", "img/2.jpg","img/3.jpg","img/4.jpg", "img/5.jpg",
"img/6.jpg", "img/7.jpg", "img/8.jpg",
"img/9.jpg"]
.map( (x,i) => [x,i, Math.random()])
.sort( (a,b) => a[2]-b[2])

console.log(a);

for(let i = 0; i < a.length; i++){
    let pic = document.createElement('img');
    pic.src = a[i][0];
    pic.place = a[i][1];
    pic.clicked = false;
    puzzle.appendChild(pic);
}
let step = 1;
let p1, p2;

document.addEventListener('click', function(e){
    switch(step){
        case 1:
            if (e.target.tagName == 'IMG' && !e.target.clicked){
            e.target.className = 'select';
            e.clicked = true;
            p1 = e.target;
            step = 2;
            }
            break;
        case 2:
            if (e.target.tagName == 'IMG' && !e.target.clicked){
                e.target.className = 'select';
                e.clicked = true;
                p2 = e.target;
                step = 3;
                }
            break;
            case 3:
                let place = p2.place;
                let src = p2.src;
                p2.place = p1.place;
                p2.src = p1.src;
                p1.place = place;
                p1.src = src;
                p1.className = p2.className = "";
                step = 1;
                break;
  }       
})

let darkMode = false;
const changeHandler = function(event){
    if(darkMode){
        darkMode = false;
        button.textContent = "Dark mode off";
    }
    else{
        darkMode = true;
        button.textContent = "Dark mode on";
    }
};

const button = document.querySelector(".btn-dark");
const toggleTheme =function(){
    const elements = document.querySelectorAll('section, .theSidebar, .card, .list-group-item');
    console.log(elements);
    for ( let i = 0; i < elements.length; i++){
     const element = elements[i];
     element.classList.toggle('dark-mode');
    }
    
    }

   
button.addEventListener('click', toggleTheme)
button.addEventListener('click', changeHandler)


//------------------------timer---------------------------------------------------------------------------//
const checkTheme = function(){
    const date = new Date();
    console.log(date);
    if(date.getHours() > 7 && date.getHours() < 17){
        if(darkMode === true){
        toggleTheme();
        changeHandler();
        }
    }
    else{
        if(darkMode === false){
            toggleTheme();
            changeHandler();
        
        }
        
    }
   
};

// setInterval(checkTheme, 1000);


//------------------------------------------------------------------------------------------------------------///
