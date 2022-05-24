import React from 'react';

import '../../styles.css'
import Button from 'react-bootstrap/Button';


export default function About() {

  return (

    <div style = {{color: '#080400', marginLeft:10}}>

        <h1 style = {{marginLeft: 10, fontFamily: 'Merriweather serif', fontSize: 45, marginTop: 10}}>About Me</h1>

        <div style = {styles.head}>
            <h1>Kellen Andrea</h1>
            <h4>Jr. Web Developer</h4>
        </div>

        <p style = {styles.paragraph}>
            Hey there!  My name is Kellen Andrea.  I recently graduated a full-stack coding bootcamp, and am seeking to become a Front-End Developer. 
            Please view my projects to have a better understanding of my current capability. 
            Thank you for your consideration, and if you'd like to get in touch with me please feel free to send me an e-mail!
        </p>

        <Button variant="outline-dark" style = {{marginLeft: 40}}>✉ kellen.andrea.416@gmail.com</Button>{' '}

    </div>

  );

}