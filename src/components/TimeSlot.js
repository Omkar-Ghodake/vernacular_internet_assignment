import React, { useContext, useState } from 'react'
import { TimeSlotContext } from '../context/TimeSlotState'

const TimeSlot = (props) => {

	const contextTimeSlot = useContext(TimeSlotContext)
	const { timeSlot } = contextTimeSlot

	const [slotArray, setSlotArray] = useState([])

	return (
		<>

			{!timeSlot ?
				<h3>Pickup a date to see the available time slots</h3> :
				<div className="col-md-2">
					<button className="slot-button w-100">
						{timeSlot.map((slot, index) => {
							return <span key={index}>{slot.hour} PM {(index < timeSlot.length - 1) && '-'} </span>
						})}
					</button>
				</div>
			}
		</>
	)
}

export default TimeSlot