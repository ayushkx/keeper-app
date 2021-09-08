import React from 'react'

export default function Footer() {

    const day = new Date();
    let year = day.getFullYear();

    return (
        <div>
            <footer>
               <p>copyright &copy; {year}</p>
            </footer>
        </div>
    )
}
