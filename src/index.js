import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

const Header = () => {
    const style = {};
    return (
        <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    )
}


const Menu = () => {
    return (
        <main className="menu">
            <h2>Menu</h2>
            <ul className="pizzas">
                {pizzaData.map((pizza) =>
                    <Pizza pizzaObj={pizza} key={pizza.name} />
                )}
            </ul>
        </main>
    )
}

const Pizza = (props) => {
    console.log(props);

    return (
        <li className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
                <h2>{props.pizzaObj.name}</h2>
                <p>{props.pizzaObj.ingredients}</p>
                <span>R {props.pizzaObj.price + 3}</span>
            </div>
        </li>
    )
}

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    // if (hour >= openHour && hour <= closeHour)
    //     alert("We're currently open")
    // else
    //     alert("Sorry we're closed")

    return (
        <div>
            <footer className="footer">{new Date().toLocaleTimeString()}. Come visit us or order online. </footer>
        </div>
    )
}



const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);