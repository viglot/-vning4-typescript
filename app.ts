const show = <HTMLElement>document.querySelector('.show')

function loadPosts(){
   fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    json.forEach(post=>{
        console.log(post);
        show.innerHTML += `<div class="post" id="${post.id}"><h1>${post.title}</h1><p>${post.body}</p></div>`
        const node = document.querySelectorAll('.post')
        node.forEach(element=>{
            element.addEventListener('click', ()=>{
               loadPost(element.id) 
            })
        })
    })
}) 
}
loadPosts()

function loadPost(id:string){
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>res.json())
    .then(post=> {
        show.innerHTML = ''
        show.innerHTML += `<div class="post" id="${post.id}"><h1>${post.title}</h1><p>${post.body}</p></div>`
    })
}