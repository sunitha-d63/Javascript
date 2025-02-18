const element = document.querySelector('#container')
const input = document.querySelector('#input')
const btnadd = document.querySelector('#btn-add')


btnadd.addEventListener('click', (addtext) => {
    const input = document.querySelector('#input')
    addtext.preventDefault()
    // console.log(input.value);
    const list=document.createElement('li');
    element.append(list)
    const input_value=input.value;
    list.append(input_value);
    
    let remove=document.createElement('button')
    remove.classList.add('btnremove')
    remove.innerText="Remove"
    console.log(remove);
    list.append(remove)
    
    remove.addEventListener('click',(remove)=>
    {
        list.remove() 
    })


})

