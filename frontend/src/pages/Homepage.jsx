import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStationeries } from '../steps/step1';
import Stationery from '../components/Stationery';
import Loading from '../components/Loading';
import Alert from '../components/Alert';
import Filter from '../components/Filter';
export default function Homepage() {

    const dispatch = useDispatch();
    const stationeriesstate = useSelector(state => state.getAllStationeriesReducer);
    const { stationeries, err, loading } = stationeriesstate;

    useEffect(() => {
        dispatch(getAllStationeries());
    }, []);

    return (
        <div>
            <Filter/>
            <div className="row justify-content-center">
                {loading ? (<Loading />) : err ? (<Alert err='something went wrong' />) : (
                    stationeries.map(stationery => {
                        return <div className="col-md-3 m-3" key={stationery._id}>
                            <div>
                                <Stationery stationery={stationery} />
                            </div>
                        </div>
                    })
                )}

            </div>
        </div>
    )
}