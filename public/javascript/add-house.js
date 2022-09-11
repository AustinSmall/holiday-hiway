async function addHouse(event) {
    event.preventDefault();
    const owner_name = document.querySelector('input[name = "owner"]').value;
    const address_1 = document.querySelector('input[name = "address 1"]').value;
    const address_2 = document.querySelector('input[name = "address 2"]').value;
    const city = document.querySelector('input[name = "city"]').value;
    const state = document.querySelector('input[name = "state"]').value;
    const zip = document.querySelector('input[name = "zip"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            owner_name, address_1, address_2, city, state, zip
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok) {
        document.location.replace('/house');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.new-house').addEventListener('submit', addHouse);