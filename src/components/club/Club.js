import React from "react";
import "./club.css";

class Club extends React.Component {
    clubProp = {
        imageSrc: 'https://images.pexels.com/photos/1449791/pexels-photo-1449791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        name: this.props.title,
        address: 'Hauptstraße 42',
        city: 'Braunschweig',
        state: 'DE',
        zipCode: '38114',
        category: 'Studenten',
        rating: 4.5,
        reviewCount: 90
    };

    render() {
        return (
            <div className="Club">
                <div className="image-container">
                    <img src={this.clubProp.imageSrc} width="300px" height="200px" alt="ClubExamplePic"/>
                </div>
                <h2>{this.clubProp.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{this.clubProp.address}</p>
                        <p>{this.clubProp.city}</p>
                        <p>{this.clubProp.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.clubProp.category}</h3>
                        <h3 className="rating">{this.clubProp.rating}</h3>
                        <p>90 reviews</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Club;