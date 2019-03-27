import React from "react";
import Axios from "axios";
import "./clublist.css";
import Club from "../club/Club";


class ClubList extends React.Component {

    state = {
        clubs: [],
    };
    componentDidMount = async () => {
        //Get all clubs nearby
        let reqClubs = await Axios.get("https://places.demo.api.here.com/places/v1/discover/explore;context=Y2F0PWRhbmNlLW5pZ2h0LWNsdWImZmxvdy1pZD02Y2Q1YjdiYi1kMDc2LTVkM2EtOGFjZC04YjkyNTY1MzgzZDJfMTU1MzU2MDg3NzMzOF8wXzc1MDMmb2Zmc2V0PTIwJnNpemU9MjA?at=52.2688736%2C10.5267696&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg");
        reqClubs = reqClubs.data.items;

        //Set new state
        this.setState({clubs: reqClubs});
    };

    render() {
        const {clubs} = this.state;
        return (
            <div className="Clublist">
                {clubs.map(club => (
                    <Club title={club.title}/>
                ))}
            </div>
        );
    }
}

export default ClubList;
