import React from 'react'

const Location = () => {
  return (
    <div>
    <img src=" images/stethoscope.jpg" id="backg" alt="doctor's stethoscope"/> 
    <body background="images/stethoscope.jpg" className="image1"></body>
    <header classclassName="header">
        <img src="images/logo1.jpg" id="logo" alt=""/>
            <nav className="navbar">
                    <a href="index.html">Home</a>
                     <a href="about.html">About</a>
                    <a href="services.html">Services</a>
                        <a href="location.html">Locations</a>
                        <a href="#">Contact</a>
                        
            
            </nav>
         
   </header>
   <div className="bbody">
        <div className="grid-container">
            <div className="grid-item"><a href="nairobi.html">Nairobi</a></div>
            <div className="grid-item"><a href="nakuru.html">Nakuru</a></div>
            <div className="grid-item"><a href="kisumu.html">Kisumu</a></div>
            <div className="grid-item"><a href="mombasa.html">Mombasa</a></div>
            <div className="grid-item"><a href="eldoret.html">Eldoret</a></div>
            <div className="grid-item"><a href="kiambu.html">Kiambu</a></div>
        </div>   
  </div>
   <footer>
    <p>Bridging the gap to better healthcare</p>
    <p> Cure Connect 2024</p>
   </footer>
</div>
  )
}

export default Location;