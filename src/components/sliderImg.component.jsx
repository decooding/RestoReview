import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class SliderImg extends React.Component {
    render() {
        return (
            <div>
                <div className='container-fluid' >
                    <div className="row">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://astana.restolife.kz/upload/information_system_27/1/6/6/item_16674/information_items_property_19829.jpg"
                                        alt="First slide"
                                        style={{height: 400 }}
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://astana.restolife.kz/upload/information_system_31/2/3/1/item_23177/information_items_property_27755.jpg"
                                        alt="Second slide"
                                        style={{height: 400 }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://astana.restolife.kz/upload/information_system_31/2/3/8/item_23803/information_items_property_29528.jpg"
                                        alt="Third slide"
                                        style={{height: 400 }}
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
        )
    };
}

export default SliderImg;