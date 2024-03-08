import React from 'react';
import { Link } from "react-router-dom"
import './style.css'

const Home = ()=>{
    return(
        <div className="componente-home">
            <h1>Home</h1>
            <Link to= "/About">About</Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quidem itaque ullam laborum. Autem voluptates minus incidunt repellendus nam, itaque aut tenetur quis repudiandae excepturi, accusamus voluptas exercitationem. Quos, dolores.A.</p>
        </div>
    )
}

export default Home;

