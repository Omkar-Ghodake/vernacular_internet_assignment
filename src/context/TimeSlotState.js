import React, { createContext, useState } from 'react'

const TimeSlotContext = createContext()

const TimeSlotState = (props) => {

	const [timeSlot, setTimeSlot] = useState()

	return (
		<TimeSlotContext.Provider value={{ timeSlot, setTimeSlot }}>
			{props.children}
		</TimeSlotContext.Provider>
	)
}

export default TimeSlotState
export { TimeSlotContext }