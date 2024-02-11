const avatar = document.getElementById('avatar');
const comment = document.getElementById('comment');
const button = document.querySelector('.add-comment');
const commentsBox = document.querySelector('.chat');
const yesOption = document.getElementById('yes');
const noOption = document.getElementById('no');
const name = document.getElementById('name');
const nameDescription = document.getElementById('name-description');

const hideUsernameInput = () => {
    name.classList.add('hidden');
    nameDescription.classList.add('hidden');
}

const showUsernameInput = () => {
    if (name.classList.contains('hidden')){
        name.classList.remove('hidden');
        nameDescription.classList.remove('hidden');
    }

}

const addName = () => {
    const userName = document.createElement('h3');

    if (name.classList.contains('hidden')){
        userName.innerText = 'username';
        commentsBox.append(userName);
    } else {
        userName.innerText = (name.value[0].toUpperCase() + name.value.substr(1).toLowerCase()).replace(/[\s0-9@#$%^&*(){}+=]/g,'');
        commentsBox.append(userName);
    }
}

const addPhoto = () => {
    const userPhoto = document.createElement('img');
    userPhoto.setAttribute('src', avatar.value);
    commentsBox.append(userPhoto);
}

const chooseRandomAvatar = () => {
    if (avatar.value === ''){

        const images = [
            './images/1.jpg',
            './images/2.jpg',
            './images/3.jpg',
            './images/4.jpg',
            './images/5.jpg',
        ];
        const randomImage = Math.floor(Math.random() * images.length);
        const userPhoto = document.createElement('img');
        userPhoto.setAttribute('src', images[randomImage]);
        commentsBox.append(userPhoto);
    }
}

const addComment = () => {
    const userComment = document.createElement('p');
    userComment.innerText = (comment.value[0].toUpperCase() + comment.value.substr(1)).replace(/\bviagra\b|\bxxx\b/gi, '***');
    commentsBox.append(userComment);
    }

const addDate = () => {
    const date = document.createElement('p');
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    date.innerText = new Date().toLocaleString('ru-RU', options);
    date.classList.add('date');
    commentsBox.append(date);
}

noOption.addEventListener('click', hideUsernameInput);
yesOption.addEventListener('click', showUsernameInput);
button.addEventListener('click', addName);
button.addEventListener('click', addPhoto);
button.addEventListener('click', chooseRandomAvatar);
button.addEventListener('click', addComment);
button.addEventListener('click', addDate);
