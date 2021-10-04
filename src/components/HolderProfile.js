import React from 'react'

const HolderProfile = ({ dataHolder }) => {

    // const { policy_reference: policyReference, policy: { cover: cover }, vehicle: { make: make, model: model, colour: colour, reg: reg } } = dataHolder

    return (

        <div>
            {Object.keys(dataHolder).length === 0 ? 'Please login again' : <div>
                <h1>My Policy</h1>
                <h3>Policy Reference:</h3>
                <p>{dataHolder.policy_reference}</p>
                <h3>Cover type:</h3>
                <p>{dataHolder.policy.cover}</p>
                <h3>Car:</h3>
                <p>{`${dataHolder.vehicle.make} ${dataHolder.vehicle.model} ${dataHolder.vehicle.colour}- ${dataHolder.vehicle.reg}`}</p>
            </div>}

        </div>
    )
}

export default HolderProfile
