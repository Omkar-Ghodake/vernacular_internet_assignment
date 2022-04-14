import React, { useContext } from 'react'
import { TimeSlotContext } from '../context/TimeSlotState'

const TimeSlot = (props) => {

	const contextTimeSlot = useContext(TimeSlotContext)
	const { timeSlot } = contextTimeSlot

	console.log(timeSlot)

	return (
		<>
			<div className="col-md-2">
				<button className="slot-button w-100">
					{timeSlot && timeSlot.map((slot, index) => {
						return <span key={index}>{slot.hour} PM {(index < timeSlot.length - 1) && '-'} </span>
					})}
				</button>
			</div>
		</>
	)
}

export default TimeSlot