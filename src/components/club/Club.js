import React from "react";
import "./club.css";

class Club extends React.Component {

    clubProp = {
        imageSrc: 'https://loremflickr.com/600/600/music,party,club?random=' + Math.random(100),
        name: this.props.title,
        address: 'Hauptstraße 42',
        city: 'Braunschweig',
        zipCode: '38114',
        category: 'Studenten',
        rating: 4.5,
        reviewCount: 90
    };

    render() {
        return (
            <div className="Club">
                <div className="image-container">
                    <img src={this.clubProp.imageSrc} width="400px" height="300px" alt="ClubExamplePic"/>
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