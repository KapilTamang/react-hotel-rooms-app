import React, { Component } from 'react';
import defaultBg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../Context';
import StyledHero from '../components/StyledHero';
import { FaCheck } from 'react-icons/fa';
import { HiBadgeCheck } from 'react-icons/hi';
import Hero from '../components/Hero';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBg
        };
    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return (
                <Hero>
                    <Banner
                        title="404"
                        subtitle="NO SUCH ROOM COULD BE FOUND"
                    >
                        <Link to="/rooms" className="btn-primary">
                            Back to Rooms
                </Link>
                    </Banner>
                </Hero>
            )
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
        const [mainImg, ...defaultImg] = images;
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary" >
                            Back to Rooms
                </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details
                            <div />
                            </h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info
                                <div />
                            </h3>
                            <h6>price : ${price}</h6>
                            <h6>size : {size} SQFT</h6>
                            <h6>
                                capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                            </h6>
                            <h6>pets allowed : {pets ? "yes" : "no"}</h6>
                            {breakfast && (
                                <h6><b><HiBadgeCheck style={{ color: "#F4511E" }} /></b>&nbsp;free breakfast inlcuded</h6>
                            )}
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras
                        <div />
                    </h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}><FaCheck style={{ color: "#F4511E" }} />&nbsp;&nbsp; {item}</li>
                        })}
                    </ul>
                </section>
            </>
        );
    }
}
