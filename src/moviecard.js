import React from "react";

class MoviCard extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "The Avengers",
            plot: "SuperNatural Powers Shown In This Movie.",
            price: 199,
            rating: 8.9,
            stars: 0
        };
    }

    addStars = () => {
        this.setState({
            stars: this.state.stars + 0.5
        });
    }

    decStars = () => {
        this.setState({
            stars: this.state.stars - 0.5
        });
    }

    render() {
        const { title, plot, price, rating, stars } = this.state;
        return (
            <div className="main">
                <div className="movie-card">
                    {/* left side of movie card */}
                    <div className="left">
                        <img alt="Poster" src="https://image.tmdb.org/t/p/original/gVG94AhBSdFvFc08yECDsqA5Bkb.jpg"></img>
                    </div>

                    {/* right side of movie card */}
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/15604/15604339.png" onClick={this.decStars}></img>
                                <img alt="star" 
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                                    className="stars">
                                </img>
                                <img className="str-btn" alt="increases" src="https://cdn-icons-png.flaticon.com/128/7580/7580362.png" onClick={this.addStars}></img>
                                <span className="starCount">{stars}</span>
                            </div>
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MoviCard;
