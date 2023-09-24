document.addEventListener('DOMContentLoaded', function() {
    const postBtn = document.getElementById('postBtn');
    const postContent = document.getElementById('postContent');
    const postFeed = document.getElementById('postFeed');
    const logoutBtn = document.getElementById('logout');

    postBtn.addEventListener('click', function() {
        const content = postContent.value;
        if (content.trim() !== '') {
            createPost(content);
            postContent.value = '';
        }
    });

    function createPost(content) {
        const post = document.createElement('div');
        post.classList.add('post');

        const userInfo = document.createElement('div');
        userInfo.classList.add('user-info');

        const avatar = document.createElement('img');
        avatar.src = 'user-avatar.jpg'; // Replace with actual path to user avatar
        userInfo.appendChild(avatar);

        const userName = document.createElement('h2');
        userName.textContent = 'John Doe'; // Replace with actual user name
        userInfo.appendChild(userName);

        post.appendChild(userInfo);

        const postText = document.createElement('p');
        postText.textContent = content;
        post.appendChild(postText);

        postFeed.appendChild(post);
    }

    logoutBtn.addEventListener('click', function() {
        // Add logout functionality here
        alert('Logged out!');
    });
});
