import React from "react";

class MoviCard extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "The Avengers",
            plot: "SuperNatural Powers Shown In This Movie.",
            price: 199,
            rating: 8.9,
            stars: 0,
            fav: false,
            isInCart: false
        };
    }

    addStars = () => {
        if(this.state.stars >= 5){
            return;
        }
        this.setState({
            stars: this.state.stars + 0.5
        });
    }

    decStars = () => {
        if(this.state.stars <= 0){
            return;
        }
        this.setState({
            stars: this.state.stars - 0.5
        });
    }
    //Toggle Favourite button
    toggleFav= () => {
        this.setState({
            fav: !this.state.fav
        })
    }
  
    //Toggle add to cart button
    toggleCart= () => {
        this.setState({
            isInCart: !this.state.isInCart
        })
    }

    render() {
        const { title, plot, price, rating, stars,fav, isInCart} = this.state;
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

                            {/**conditional rendering on Favourite button */}
                            <button className={fav?"unfavourite-btn":"favourite-btn"}  onClick={this.toggleFav}>
                                {fav ? "Un-favourite":"Favourite"}
                            </button>
                             {/**Conditional Rendering on Add to Cart Button */}
                            <button className={isInCart?"unfavourite-btn":"cart-btn"}  onClick={this.toggleCart}>
                                {isInCart ? "Remove from Cart":"Add to Cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MoviCard;
