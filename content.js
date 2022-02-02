const addButton = () => {
    const insert = document.querySelector(".nav-tabs");
    insert.insertAdjacentHTML("afterbegin", "<button>Add Song</button");
    console.log("Element Added");
};

addButton();
getCurrentTab();