import React from 'react';
import Room from './Room';
import Loading from './Loading';

export default function RoomList({ rooms, loading }) {
    if (rooms.length === 0) {
        return <div className="empty-search">
            <h3>Unfortunately no rooms matched your search parameters.</h3>
        </div>
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {loading && <Loading />}
                {
                    rooms.map((item) => {
                        return <Room key={item.id} room={item} />
                    })
                }
            </div>
        </section>
    )
}
