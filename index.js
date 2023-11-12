"use strict";
const avatar = document.getElementById('avatar');
const comment = document.getElementById('comment');
const button = document.querySelector('.add-comment');
const commentsBox = document.querySelector('.chat');

const addName = (name) => {
    name = document.getElementById('name');
    const userName = document.createElement('h3');
    userName.innerText = (name.value[0].toUpperCase() + name.value.substr(1).toLowerCase()).replace(/[\s0-9@#$%^&*(){}+=]/g,'');
    commentsBox.append(userName);
}

const addPhoto = (avatar) => {
    avatar = document.getElementById('avatar');
    const userPhoto = document.createElement('img');
    userPhoto.setAttribute('src', avatar.value);
    commentsBox.append(userPhoto);
}

const addComment = (comment) => {
    comment = document.getElementById('comment');
    const userComment = document.createElement('p');
    userComment.innerText = (comment.value[0].toUpperCase() + comment.value.substr(1)).replace(/\bviagra\b|\bxxx\b/gi, '***');
    commentsBox.append(userComment);
    }


button.addEventListener('click', addName);
button.addEventListener('click', addPhoto);
button.addEventListener('click', addComment);