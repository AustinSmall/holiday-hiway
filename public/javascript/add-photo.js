async function addPhoto(event) {
    event.preventDefault();
//MAKE SURE THIS IS THE RIGHT HTML 
    const image = document.querySelector('textare[name= "comment-body"]').value.trim();

    // const user_id =  // HOW TO FIND USER ID??

    if(comment_text) {
        const response = await fetch('/api/photos', {
            method: 'Post',
            body: JSON.stringify({image}),
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
document.querySelector('.comment-form').addEventListener('submit', addPhoto);