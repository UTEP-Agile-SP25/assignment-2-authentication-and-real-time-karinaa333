import { signUp, logout, login, onAuthStateChanged } from "./auth";
import { db } from "./config";
import { doc, setDoc, collection, deleteDoc, onSnapshot } from "firebase/firestore"

const saveCity = async function() {
    const cityName = document.getElementById("cityname").value.trim()
    const population = document.getElementById("population").value.trim()
    const country = document.getElementById("country").value.trim()

    try {
        const cityRef = doc(db, "cities", cityName.toLowerCase() + "-" + country.toLowerCase())

        await setDoc(cityRef, {
            name: cityName,
            population: population,
            country: country,
            time: new Date()
        })
        console.log("City Successfully created")
        document.getElementById("cityname").value = ""
        document.getElementById("population").value = ""
        document.getElementById("country").value = ""
    }catch(error) {
        console.error("Error saving city", error)
    }
}

const addCity = document.querySelector("#addCity")
addCity.addEventListener("submit", (event)=> {
    event.preventDefault()
    saveCity()
})