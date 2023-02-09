let result=document.getElementById('result')
let filter=document.getElementById('filter')

const listItems=[]
getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData(){
    const res= await fetch ('https://randomuser.me/api?results=50')

    const {results}= await res.json()

    result.innerHTML='' 

    results.forEach(user => {
        const li=document.createElement('li')

        listItems.push(li)

        li.innerHTML=  '
        <img ,src="${user.picture.large}", alt="${user.name}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>

        </div>

        result.appendChild(li)
        
    })
}
function filterData(seacchTerm){
    listItems.forEach(item =>{
        if(item.innerHTML.toLowercase().includes(seacchTerm.toLowercase())){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
}