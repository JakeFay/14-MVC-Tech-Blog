async function editFormHandler(event) {
    event.preventDefault();

    await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

document.querySelector('.update-post-form').addEventListener('submit', editFormHandler);