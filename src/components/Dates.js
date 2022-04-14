import React, { useContext } from 'react'
import { TimeSlotContext } from '../context/TimeSlotState'

const Dates = (props) => {

	const contextTimeSlot = useContext(TimeSlotContext)
	const { setTimeSlot } = contextTimeSlot

	const date = new Date(props.date)

	const renderSwitchDay = (param) => {
		switch (param) {
			case 0:
				return 'Sun'
			case 1:
				return 'Mon'
			case 2:
				return 'Tues'
			case 3:
				return 'Wed'
			case 4:
				return 'Thurs'
			case 5:
				return 'Fri'
			case 6:
				return 'Sat'
			default:
				return 'N/A'
		}
	}

	return (
		<>
			<div className="col-md-1 col-sm-3">
				<div className="card" onClick={() => {setTimeSlot(props.availablity)}}>
					<div className="card-body text-center py-2 px-2">
						<div className="day">{renderSwitchDay(date.getDay())}</div>
						<div className="date">{date.getDate()}</div>
						<div className="month">{date.getMonth()}</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Dates