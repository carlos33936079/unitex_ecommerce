import React from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const proprietes = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
};

function SlideShow({ data }) {
    return (
        <div className="SlideShow_div">
            <div className="SlideShow_container">
                <Slide {...proprietes}>
                    {data.map((data) => {
                        return (
                            <div key={data.id}>
                                <div>
                                    <Link to={data.url}>
                                        <img
                                            key={data.id}
                                            src={data.path}
                                            alt={data.name}
                                        />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </Slide>
            </div>
        </div>
    );
}

export default SlideShow;