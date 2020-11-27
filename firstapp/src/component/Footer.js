import React from 'react';

const Footer = (props) => {
    return(
        <React.Fragment>
            <footer>
            <center>
                <hr/>
                <h3>&copy; Sakshi Patel {props.year} {props.month}</h3>
            </center>
            </footer>
        </React.Fragment>

    )
}

export default Footer;