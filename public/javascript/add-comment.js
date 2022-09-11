async function addComment(event) {
    event.preventDefault();
//MAKE SURE THIS IS THE RIGHT HTML 
    const comment_text = document.querySelector('textare[name= "comment-body"]').value.trim();

    const house_id = window.location.toString().split('/')[window.location.toString().split('/').length -1];

    // const user_id =  // HOW TO FIND USER ID??

    if(comment_text) {
        const response = await fetch('/api/comments', {
            method: 'Post',
            body: JSON.stringify({comment_text, house_id, user_id}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}
// MAKE SURE THIS IS THE RIGHT HTML
document.querySelector('.comment-form').addEventListener('submit', addComment);