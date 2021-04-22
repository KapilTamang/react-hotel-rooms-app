import React, { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
};

export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    } = context;


    //get unique types
    let types = getUnique(rooms, 'type');
    // add all
    types = ['all', ...types];
    // map to jsx
    types = types.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    });

    let capacities = getUnique(rooms, 'capacity');

    capacities = capacities.map((item, index) => {
        return <option key={index} value={item}> {item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="Search rooms" />
            <form className="filter-form">
                {/** select type**/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/** end of select type**/}
                {/**  select guests**/}
                <div className="form-group">
                    <label htmlFor="capacity">capacity</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {capacities}
                    </select>
                </div>
                {/** end of select guests**/}
                {/**select price **/}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input
                        type="range"
                        name="price"
                        id="price"
                        value={price}
                        min={minPrice}
                        max={maxPrice}
                        className="form-control"
                        onChange={handleChange} />
                </div>
                {/**end of select price **/}
                {/**select size **/}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/**end of select size **/}
                {/** extras **/}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" checked={breakfast} name="breakfast" id="breakfast" onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" checked={pets} name="pets" id="breakfast" onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/** end of extras **/}
            </form>
        </section>
    )
}
