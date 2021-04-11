import React, { useState, useEffect } from 'react';
import 'sass/app.css';
import { useCalendarState } from 'js/stores/calendarState';
const ControlView = () => {
	const [ calendarState, setCalendarState ] = useCalendarState();
	const { mode, date } = calendarState;
	const [ curDateStr, setCurDateStr ] = useState('');

	useEffect(
		() => {
			let newCurDate;
			if (mode === 'monthly') {
				newCurDate = date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월';
			} else if (mode === 'weekly') {
				let lastDate = parseInt((date.getDate() + (6 - date.getDay())) / 7) + 1;
				newCurDate = date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + lastDate + '주';
			}
			setCurDateStr(newCurDate);
		},
		[ date, mode ]
	);

	const onClickLeft = () => {
		changeDate(-1);
	};

	const onClickRight = () => {
		changeDate(1);
	};

	const onClickDateView = () => {
		setCalendarState({ ...calendarState, date: new Date() });
	};

	const changeDate = (value) => {
		let newDate;
		if (mode === 'weekly') {
			newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + value * 7);
		} else if (mode === 'monthly') {
			newDate = new Date(date.getFullYear(), date.getMonth() + value, date.getDate());
		}
		setCalendarState({ ...calendarState, date: newDate });
	};

		return (
		<div id="control-view">
			<div id="week-controller">
				<div id="date-view">{curDateStr}</div>
				<nav>
					<button className="btn prevBtn" onClick={onClickLeft}> &lt; </button>
					<button className="btn todayBtn" onClick={onClickDateView}> 오늘 </button>
					<button className="btn nextBtn" onClick={onClickRight}> &gt; </button>
				</nav>
			</div>
		</div>
	);
};

export default ControlView;
