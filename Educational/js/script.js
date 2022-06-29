const searchbox = document.querySelector('#searchbox');
const searchbtn = document.querySelector('#searchbtn');
const html = document.querySelectorAll('.html');
const searchHeading = document.querySelectorAll('.searchHeading');

// console.log(searchHeading)

searchbtn.addEventListener('click', () => {

    let searchValue = searchbox.value.toUpperCase();

    for (let i = 0; i < searchHeading.length; i++) {
        let searchInText = (searchHeading[i].innerHTML).toUpperCase();

        if (searchInText.indexOf(searchValue) > -1) {
            html[i].style.display ="";
        }
        else {
            html[i].style.display ="none";

        }

    }


});








