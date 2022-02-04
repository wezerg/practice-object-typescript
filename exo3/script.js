"use strict";
const getPosts = async () => {
    const req = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await req.json();
    return response;
};
const getUsers = async () => {
    const req = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await req.json();
    return response;
};
const main = async () => {
    // Search and mix data
    const posts = await getPosts();
    const users = await getUsers();
    const focus = document.querySelector("#articleView");
    const postsOfUsers = users.map((us) => {
        us.posts = posts.filter((post) => post.userId === us.id);
        return us;
    });
    // Append Data
    for (const p of postsOfUsers) {
        let div = document.createElement("div");
        div.classList.add('col-4');
        let title = document.createElement('h3');
        title.style.color = "blue";
        title.innerHTML = p.name;
        let email = document.createElement('p');
        email.innerHTML = p.email;
        let subTitle = document.createElement('h4');
        subTitle.innerHTML = "Titre des articles rédigés";
        subTitle.style.color = "yellow";
        let ul = document.createElement('ul');
        if (p.posts && p.posts.length > 0) {
            for (const pp of p.posts) {
                let li = document.createElement('li');
                li.innerHTML = pp.title;
                ul.append(li);
            }
        }
        div.append(title);
        div.append(email);
        div.append(subTitle);
        div.append(ul);
        focus === null || focus === void 0 ? void 0 : focus.append(div);
    }
};
main();
