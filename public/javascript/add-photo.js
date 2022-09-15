async function addPhoto(event) {
    event.preventDefault();
//MAKE SURE THIS IS THE RIGHT HTML 
    const image = document.querySelector('textarea[name= "photo"]').value.trim();

    if(image) {
        const response = await fetch('/api/houses', {
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
document.querySelector('#new-house').addEventListener('submit', addPhoto);