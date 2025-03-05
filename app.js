let url = 'https://jsonplaceholder.typicode.com';
const page = window.location.pathname.split('/').pop().replace('.html', '');

function fetchData(url, elementId, formatFunction) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let content = document.getElementById(elementId);
            if (content) {
                content.innerHTML = data.map(formatFunction).join('');
            }
        })
        .catch(err => console.log("Xatolik:", err));
}

let renderUsers = el => `
<div class="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer">
  <div class="flex p-2 gap-1">
    <span class="bg-blue-500 inline-block w-3 h-3 rounded-full"></span>
    <span class="bg-purple-500 inline-block w-3 h-3 rounded-full"></span>
    <span class="bg-pink-500 inline-block w-3 h-3 rounded-full"></span>
  </div>
  <div class="card__content p-4">
    <div><strong class="text-[#32a6ff]">Name: </strong> <span>${el.name}</span></div>
    <div><strong class="text-[#32a6ff]">Number: </strong> <span>${el.phone}</span></div>
    <div><a href="${el.website}"class="underline decoration-2 text-lg">${el.website}</a></div>
    <strong class="text-[#32a6ff]">Location : </strong>
    <div><strong class="text-[#32a6ff]">City :</strong> <span>${el.address.city}</span></div>
    <div><strong class="text-[#32a6ff]">Street :</strong> <span>${el.address.street}</span></div>
    <div><strong class="text-[#32a6ff]">Suite :</strong> <span>${el.address.suite}</span></div>
    <div><strong class="text-[#32a6ff]">Geo :</strong> Lat: <span>${el.address.geo.lat}</span> Lng: <span>${el.address.geo.lng}</span></div>
    <div><strong class="text-[#32a6ff]">Company : </strong></div>
    <div><strong class="text-[#32a6ff]">Name: </strong><span>${el.company.name}</span></div>
    <div><strong class="text-[#32a6ff]">Position: </strong><span>${el.company.catchPhrase}</span></div>
  </div>
</div>
`
let renderPosts = el => `
<div class="notification cursor-pointer">
    <div class="notiglow"></div>
    <div class="notiborderglow"></div>
    <div class="notititle">${el.title}</div>
    <div class="notibody">${el.body}</div>
  </div>
`
let renderAlbum = el => `
<div class="notification cursor-pointer">
    <div class="notiglow"></div>
    <div class="notiborderglow"></div>
    <div class="notititle">${el.id}</div>
    <div class="notibody">${el.title}</div>
  </div>
`

let renderTodos = el => `
<div class="notification cursor-pointer">
    <div class="notiglow"></div>
    <div class="notiborderglow"></div>
    <div class="notititle">${el.title}</div>
    <div class="notibody">${el.completed ? '✅' : '❌'}</div>
  </div>
`
let renderComments = el => `
<div class="notification cursor-pointer">
    <div class="notiglow"></div>
    <div class="notiborderglow"></div>
    <div class="notititle">${el.name}</div>
    <div class="notibody text-red-500">${el.email}</div>
    <div class="notibody">${el.body}</div>
  </div>
`



if (page === "users") {
    fetchData(`${url}/users`, 'content_wrapper', renderUsers);
}else if(page === 'posts'){
    fetchData(`${url}/posts`, 'posts', renderPosts)
}else if(page === 'albums') {
    fetchData(`${url}/albums`,'album', renderAlbum)
}else if(page === 'todos') {
    fetchData(`${url}/todos`,'todos', renderTodos)
}else if(page === 'comments') {
    fetchData(`${url}/comments?_limit=30`, 'comments', renderComments)
}

