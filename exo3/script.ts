type Post = {body:string, id: number, title: string, userId: number};
type User = {email: string, id: number, name: string, phone: string, username: string, website: string, posts?: Post[]};
const getPosts = async () => {
    const req = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await req.json();
    return response;
}
const getUsers = async () => {
    const req = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await req.json();
    return response;
}
const main = async () => {
    // Search and mix data
    const posts:Post[] = await getPosts();
    const users:User[] = await getUsers();
    const focus = document.querySelector("#articleView");
    const postsOfUsers:User[] = users.map((us:User) => {
        us.posts = posts.filter((post:Post) => post.userId === us.id);
        return us;
    });
    // Append Data
    for (const p of postsOfUsers) {
        let div:HTMLElement = document.createElement("div");
        div.classList.add('col-4');
        let title:HTMLElement = document.createElement('h3');
        title.style.color = "blue";
        title.innerHTML = p.name;
        let email:HTMLElement = document.createElement('p');
        email.innerHTML = p.email;
        let subTitle:HTMLElement = document.createElement('h4');
        subTitle.innerHTML = "Titre des articles rédigés";
        subTitle.style.color = "yellow";
        let ul:HTMLElement = document.createElement('ul');
        if (p.posts && p.posts.length > 0) {
            for (const pp of p.posts) {
                let li:HTMLElement = document.createElement('li');
                li.innerHTML = pp.title;
                ul.append(li);
            }
        }
        div.append(title);
        div.append(email);
        div.append(subTitle);
        div.append(ul);
        focus?.append(div);
    }
}
main();