const container=document.querySelector('.container')
console.log(container);

const leftside=document.createElement('div')
leftside.classList.add('profile-image')

const image=document.createElement('img')
image.classList.add("profileimg")
image.src='assets/image/image-1.webp'
image.alt='profileimg'

leftside.append(image)

// ------------------------content
const rightside=document.createElement('div')
rightside.classList.add('profile-text')

const heading=document.createElement('div')
heading.classList.add('title')

const h1=document.createElement('h1')
h1.textContent="How Jobpath Works"

const subtext=document.createElement('p')
subtext.textContent="From entry-level positions to executive roles browse through."

heading.append(h1)
heading.append(subtext)

//-----------text

const content=document.createElement('div')
content.classList.add("content-text")

//card1
const card=document.createElement('div')
card.classList.add("card")

const icon1=document.createElement('img')
icon1.classList.add("iconimg");
icon1.src='https://html.themewant.com/jobpath/template/assets/img/icon/create.svg'

const cardtext=document.createElement('div')
cardtext.classList.add('cardlist')

const text=document.createElement('h4')
text.textContent="Create a Free Account"

const para=document.createElement('p')
para.textContent="Consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum."

cardtext.append(text);
cardtext.append(para);

card.append(icon1)
card.append(cardtext)

//card2
const card2=document.createElement('div')
card2.classList.add("card")

const icon2=document.createElement('img')
icon2.classList.add("iconimg");
icon2.src='https://html.themewant.com/jobpath/template/assets/img/icon/khata.svg'

const cardtext2=document.createElement('div')
cardtext2.classList.add('cardlist')

const text2=document.createElement('h4')
text2.textContent="Make Your Resume Amazing"

const para2=document.createElement('p')
para2.textContent="Consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum."

cardtext2.append(text2);
cardtext2.append(para2);

card2.append(icon2)
card2.append(cardtext2)

//card3

const card3=document.createElement('div')
card3.classList.add("card")

const icon3=document.createElement('img')
icon3.classList.add("iconimg");
icon3.classList.add("iconimg3");
icon3.src='https://html.themewant.com/jobpath/template/assets/img/icon/apply.svg'

const cardtext3=document.createElement('div')
cardtext3.classList.add('cardlist')

const text3=document.createElement('h4')
text3.textContent="Apply job"

const para3=document.createElement('p')
para3.textContent="Consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit mollitia eum ipsum."

cardtext3.append(text3);
cardtext3.append(para3);

card3.append(icon3)
card3.append(cardtext3)

content.append(card)
content.append(card2)
content.append(card3)

rightside.append(heading)
rightside.append(content)

container.append(leftside)
container.append(rightside)