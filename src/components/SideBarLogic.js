const dropdown = () => {
    let dropdown = document.getElementsByClassName("dropdown-btn");
    let i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function (event) {
            event.stopPropagation();
            this.classList.toggle("active");
            let dropdownContent = this.nextElementSibling;
            dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
            // if (dropdownContent.style.display === "block") {
            //     dropdownContent.style.display = "none";
            // } else {
            //     dropdownContent.style.display = "block";
            // }
        });
    }
}

export default dropdown;