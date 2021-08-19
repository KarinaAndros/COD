const img = document.querySelectorAll("img");
let one_part = document.querySelector(".one_part");
let two_part = document.querySelector(".two_part");
let three_part = document.querySelector(".three_part");
let four_part = document.querySelector(".four_part");
let five_part = document.querySelector(".five_part");
let left_1 = document.querySelector(".left_1");
let right_1 = document.querySelector(".right_1");
let left_2 = document.querySelector(".left_2");
let right_2 = document.querySelector(".right_2");
let left_3 = document.querySelector(".left_3");
let right_3 = document.querySelector(".right_3");
let left_4 = document.querySelector(".left_4");
let right_4 = document.querySelector(".right_4");
let left_5 = document.querySelector(".left_5");
let right_5 = document.querySelector(".right_5");


// Слайдер
right_1.onclick = function(){
    one_part.style.display = "none";
    two_part.style.display = "flex";
}
left_1.onclick = function(){
    one_part.style.display = "none";
    five_part.style.display = "flex";
}
right_2.onclick = function(){
    three_part.style.display = "flex";
    two_part.style.display = "none";
}
left_2.onclick = function(){
    one_part.style.display = "flex";
    two_part.style.display = "none";
}
right_3.onclick = function(){
    three_part.style.display = "none";
    four_part.style.display = "flex";
}
left_3.onclick = function(){
    three_part.style.display = "none";
    two_part.style.display = "flex";
}
right_4.onclick = function(){
    five_part.style.display = "flex";
    four_part.style.display = "none";
}
left_4.onclick = function(){
    three_part.style.display = "flex";
    four_part.style.display = "none";
}
right_5.onclick = function(){
    one_part.style.display = "flex";
    five_part.style.display = "none";
}
left_5.onclick = function(){
    four_part.style.display = "flex";
    five_part.style.display = "none";
}

// Список учеников
function openbox(students_cards_ten){
    let class_ten = document.getElementById("students_cards_ten").style.display;
    let photo = document.getElementById("photos").style.display;
    let class_eleven = document.getElementById("students_cards_eleven").style.display;
    if(class_ten == "none" && photo == "none" && class_eleven == "none"){
        document.getElementById("students_cards_ten").style.display = "flex";
        document.querySelector(".up").style.display = "block";
        document.querySelector(".down").style.display = "none";
    }
    else
    {
        document.getElementById("students_cards_ten").style.display = "none";
        document.querySelector(".down").style.display = "block";
        document.querySelector(".up").style.display = "none";
    }
}

function openbox_2(){
    let photo = document.getElementById("photos").style.display;
    let class_ten = document.getElementById("students_cards_ten").style.display;
    let class_eleven = document.getElementById("students_cards_eleven").style.display;
    if(photo == "none" && class_ten == "none" && class_eleven == "none"){
        document.getElementById("photos").style.display = "flex";
        document.querySelector(".up_3").style.display = "block";
        document.querySelector(".down_3").style.display = "none";
    }
    else
    {
        document.getElementById("photos").style.display = "none";
        document.querySelector(".down_3").style.display = "block";
        document.querySelector(".up_3").style.display = "none";
    }
}

function openbox_3(){
    let class_eleven = document.getElementById("students_cards_eleven").style.display;
    let photo = document.getElementById("photos").style.display;
    let class_ten = document.getElementById("students_cards_ten").style.display;
    if(class_eleven == "none" && class_ten == "none" && photo == "none"){
        document.getElementById("students_cards_eleven").style.display = "flex";
        document.querySelector(".up_2").style.display = "block";
        document.querySelector(".down_2").style.display = "none";
    }
    else
    {
        document.getElementById("students_cards_eleven").style.display = "none";
        document.querySelector(".down_2").style.display = "block";
        document.querySelector(".up_2").style.display = "none";
    }
}

// lightbox
let lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

img.forEach(image => {
	image.addEventListener('click', e =>{
lightbox.classList.add('active')
let img_2 = document.createElement('img')
img_2.src = image.src
while(lightbox.firstChild){
	lightbox.removeChild(lightbox.firstChild)
}
lightbox.appendChild(img_2)
	})
})

lightbox.addEventListener('click', e =>{
	if (e.target !== e.currentTarget) return
	lightbox.classList.remove('active')
})

