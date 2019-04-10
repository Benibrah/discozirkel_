import React from "react";
import "./clublist.css";
import Club from "../club/Club";
import {connect} from "react-redux";
import {loadClubs} from "../../actions";


class ClubList extends React.Component {

    // componentDidMount = async () => {
    //     //Get all clubs nearby
    //     let reqClubs = await Axios.get("https://places.demo.api.here.com/places/v1/discover/explore;context=Y2F0PWRhbmNlLW5pZ2h0LWNsdWImZmxvdy1pZD02Y2Q1YjdiYi1kMDc2LTVkM2EtOGFjZC04YjkyNTY1MzgzZDJfMTU1MzU2MDg3NzMzOF8wXzc1MDMmb2Zmc2V0PTIwJnNpemU9MjA?at=52.2688736%2C10.5267696&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg").then(res => {
    //         this.setState({clubs: res.data.items})
    //     });
    // };

    componentDidMount() {
        this.props.dispatch(loadClubs());
    }

    render() {
        const {error, loading, clubs} = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>
        }

        return (
            <div className="Clublist">
                {clubs.map(club => {
                    return (<Club title={club.title}/>)
                })}
            </div>
        )
    };
}

const mapStateToProps = (state) => ({
    clubs: state.clubs,
    loading: state.loading,
    error: state.error
});
export default connect(mapStateToProps)(ClubList);
