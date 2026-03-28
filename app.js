let tar=document.querySelector('.item-target');

tar.style.backgroundColor = `rgb(241, 46, 24)`;
let value=0;
let score=document.querySelector('.score-btn');
score.textContent=`${value}`;

let color=document.querySelectorAll('.item');

color.forEach(color_generator);

function color_generator(e) {
 
    e.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
}
for(let i=0;i<color.length;i++)
{
    color[i].setAttribute('data-index',`${i+1}`);
};


let click_event=document.querySelector('.container');
click_event.addEventListener('click',count);

function count(e)
{
    
    if(e.target.tagName==='BUTTON')
    {
        if(e.target.style.backgroundColor === `${tar.style.backgroundColor}`)
        {
            value=value+10;
            score.textContent=`${value}`;
        }
        
        color.forEach(color_generator);
    }

    
}
