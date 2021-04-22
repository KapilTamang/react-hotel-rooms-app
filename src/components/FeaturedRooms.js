import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';
import Loading from './Loading';
import Room from './Room';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const { featuredRooms: rooms, loading } = this.context;
        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading && <Loading />}
                    {
                        rooms.map(room => {
                            return <Room key={room.id} room={room} />;
                        })
                    }
                </div>
            </section>
        );
    };
}
