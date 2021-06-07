import React from 'react';

const year = new Date().getFullYear();
function Footer(){
    return(
        <footer>
        <button>+</button>
        <p>
            Copyrights © {year}
        </p>
        </footer>
    );
}
export default Footer;