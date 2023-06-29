const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// MILESTONE 2:

const postsContainer = document.getElementById('container');
posts.forEach(singlePosts => {
    console.log(singlePosts.author.name);
    postsContainer.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${singlePosts.author.image}" alt="${singlePosts.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${singlePosts.author.name}</div>
                        <div class="post-meta__time">${singlePosts.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${singlePosts.content}</div>
            <div class="post__image">
                <img src="${singlePosts.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${singlePosts.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${singlePosts.id}" class="js-likes-counter">${singlePosts.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
});

// MILESTONE 3:
const likeButton = document.querySelectorAll('.js-like-button');
const likedPosts = [];

likeButton.forEach(singleLikeButton => {
    singleLikeButton.addEventListener('click', function(event) {
    event.preventDefault();

    const postId = parseInt(this.getAttribute('data-postid'));
    const likeCounter = document.getElementById(`like-counter-${postId}`);
    let currentLikeNumber = parseInt(likeCounter.innerText);

    if (!this.classList.contains('like-button--liked')) {
        this.classList.add('like-button--liked');
        likeCounter.innerText = ++currentLikeNumber;
        likedPosts.push(postId);
    }   
    else {
        this.classList.remove('like-button--liked');
        likeCounter.innerText = --currentLikeNumber;
        const index = likedPosts.indexOf(postId);
        if (index !== -1) {
            likedPosts.splice(index, 1);
        }
    }
    });
});





// comportamneto di HREF con # Blocchiamo il suo normale funzionamento. sottomettiamo l'href.
//metodo 1: levare HREF dall' <a>
//metodo 2: nogo scritto nell'href
//metodo 3: Gerstiamo l' " event" dalla function per prevenire il comprotamento di default. ovvero event.preventDefault().