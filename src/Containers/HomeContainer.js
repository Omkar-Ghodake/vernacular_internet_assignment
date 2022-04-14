import React, { useEffect, useState } from 'react'
import Dates from '../components/Dates'
import TimeSlot from '../components/TimeSlot'

const HomeContainer = () => {

	const [data, setData] = useState()

	const getData = async () => {
		const response = await fetch('https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json')
		const json = await response.json()
		setData(json)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<>
			<div className="adjust-left mt-5 border-top border-2">
				<div className="container pt-5 px-5">
					<button className="larr-btn fs-5 mb-3 p-0 rounded"><i className="fa-solid fa-arrow-left"></i></button>
					<h1><span className='mixed-border pb-1'>Book</span> Demo session Slot</h1>
					<div className="mt-5">
						<h5 className='fw-bold'>Select Date</h5>
						<div className="row px-2">
							{
								data && data.map((element, index) => {
									return <Dates key={index} date={element.date} availablity={element.available} />
								})
							}
						</div>

						<h5 className='fw-bold mt-5'>Select Slot</h5>
						<div className="row px-2">
							<TimeSlot />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeContainer