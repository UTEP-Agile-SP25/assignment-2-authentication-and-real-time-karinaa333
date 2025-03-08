import { signUp, logout, login, onAuthStateChanged } from "./auth";
import { db } from "./config";
import { doc, setDoc, collection, deleteDoc, onSnapshot } from "firebase/firestore"

const saveBook = async function() {
    const bookName = document.getElementById("bookname").value.trim()
    const published = document.getElementById("published").value.trim()
    const author = document.getElementById("author").value.trim()

    try {
        const bookRef = doc(db, "books", bookName.toLowerCase() + "-" + author.toLowerCase())

        await setDoc(bookRef, {
            name: bookName,
            published: published,
            author: author,
            time: new Date()
        })
        console.log("Book Successfully created")
        document.getElementById("bookname").value = ""
        document.getElementById("published").value = ""
        document.getElementById("author").value = ""
    }catch(error) {
        console.error("Error saving book", error)
    }
}

const deleteBook = async function(collection, docID) {
    try {
        await deleteDoc(doc(db, collection, docID))
        console.log(`Document with ID ${docID} deleted successfully`)
    }catch(error) {
        console.error("Error deleting book ", error)
    }
}

const addBookForm = document.querySelector("#addBook")
addBookForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    saveBook()
})

const deleteBookForm = document.querySelector("#deleteBook")
deleteBookForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const book = document.getElementById("bookID").value
    deleteBook("books",book)
})

const bookCollection = collection(db, "books")
onSnapshot(bookCollection, (snapshot)=>{
    const tableBody = document.getElementById("table-body")
    tableBody.innerHTML = ""

    snapshot.forEach((doc)=>{
        const data = doc.data()
        const row = document.createElement("tr")

        row.innerHTML = `
        <td> ${doc.id}</td>
        <td> ${data.name}</td>
        <td> ${data.author}</td>
        <td> ${data.published}</td>`

        tableBody.appendChild(row)
    })
})