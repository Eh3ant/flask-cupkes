async function getCupcakes() {
    const response = await axios.get('/api/cupcakes');
    const cupcakes = response.data.cupcakes;
    for (let cupcake of cupcakes) {
        $('#cupcake-list').append(`<li>${cupcake.flavor} - ${cupcake.size} - ${cupcake.rating} <img src="${cupcake.image}" width="50"</li>`);
    }
}

async function handleFormSubmit(evt) {
    evt.preventDefault();
    const flavor = $('#flavor').val();
    const size = $('#size').val();
    const rating = $('#rating').val();
    const image = $('#image').val();
    const newCupcake = { flavor, size, rating, image };

    const response = await axios.post('/api/cupcakes', newCupcake);
    const cupcake = response.data.cupcake;
    $('#cupcake-list').append(`<li>${cupcake.flavor} - ${cupcake.size} - ${cupcake.rating} <img src="${cupcake.image}" width="50"></li>`);
    $('#cupcake-form')[0].reset();
}

$(document).ready(function () {
    getCupcakes();
    $('#cupcake-form').on('submit', handleFormSubmit);
});