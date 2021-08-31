import React, { Component } from 'react';
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';



const NavBar = () => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>
        <div>
<blockquote class="blockquote text-center">
  <h2 class="mb-0">CLOUD BILLING</h2>
  <footer class="blockquote footer">SIMPLE | ACCURATE </footer>
</blockquote>
</div>

        </div>
        <div className='navbar__item'>
          <a href="/Home" style={{color: "white"}}> Home</a>
        </div>


        <div className='navbar__item'>
          <a href="/Contact" style={{color: "white"}}>Contact</a>
        </div>
        <div className='navbar__item'>
         <a href="/Help" style={{color: "white"}}> Help</a>
          </div>        
    </header>
);

export default NavBar;

const FooterContainer = styled.footer`


ul li a{
    color: var(--mainGrey);   
}

ul li a:hover{
    color: var(--mainLight);
}
`;

