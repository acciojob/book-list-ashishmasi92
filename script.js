//your JS code here. If required.

let table = document.querySelector(".table")
let titleInput = document.querySelector("#title")
let authorInput = document.querySelector("#author")
let isbnInput = document.querySelector("#isbn")
let form = document.querySelector("form")
let submitBtn = document.querySelector("#submit")
let booklist = document.querySelector("#book-list")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let title = titleInput.value;
    let author = authorInput.value
    let isbn = isbnInput.value
    let delBtn = document.createElement("button")
    delBtn.className = "delete"
    delBtn.textContent = "X"


    if(!title|| !author||!isbn){
        alert("you forget to fill the input")
        return
    }

    let arr = [title, author, isbn]
    let tr = document.createElement("tr")

    for (let i = 0; i <= 3; i++) {
        let td = document.createElement("td")
        if (i <= 2) {
            td.innerHTML = arr[i]

        }

        tr.append(td)
    }

    delBtn.addEventListener("click", (e) => {
        let btn = e.target
        let del_row = btn.parentElement.parentElement
        del_row.remove()




    })


    let x = tr.lastElementChild
    x.append(delBtn)


    booklist.append(tr)
    titleInput.value = ""
    authorInput.value = ""
    isbnInput.value = ""
})








