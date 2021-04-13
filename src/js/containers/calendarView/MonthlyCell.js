import React, { useState, useEffect } from 'react';
import 'sass/app.css';
import KoreaAllData from 'api/KoreaAllData'
import { editDate } from 'js/containers/components/UserDataController';
import { useAddFormState } from 'js/stores/addFormState';
import { useErrorState } from 'js/stores/errorState';
import { useUserData } from 'js/stores/userData';
import { useDragAndDrop } from 'js/stores/dragAndDrop';



const MonthlyCell = (props) => {

	const { date, schedule } = props;
	const [ addFormState, setAddFormState ] = useAddFormState();
	const { active } = addFormState;
	const [ errorState, setErrorState ] = useErrorState();
	const [ userData, setUserData ] = useUserData();
	const [ dragAndDrop, setDragAndDrop ] = useDragAndDrop();
	const [ curDateStr, setCurDateStr ] = useState('');



	useEffect(
		() => {
			let newCurDateStr = date.getDate();
			if (schedule.length ===! 0) {
				newCurDateStr += ' (' + schedule.length + ')';
			}
			setCurDateStr(newCurDateStr);
		},
		[ schedule ]
	);



	const onClickDate = () => {
		if (!active) {
			setAddFormState({
				...addFormState,
				active: true,
				mode: 'add',
				title: '',
				curDate: date
			});
		}
	};

	const onClickSchedule = (e, schedule) => {
		e.stopPropagation();
		const { title, curDate } = schedule;

		if (!active) {
			setAddFormState({
				...addFormState,
				active: true,
				mode: 'edit',
				title: title,
				curDate: curDate
			});
		}
	};

	const onDropSchedule = (e) => {
		const newSchedule = editDate(dragAndDrop.to, dragAndDrop.from, userData.schedule);
		if (newSchedule !== false) {
			setUserData({ ...userData, schedule: newSchedule });
			setAddFormState({ ...addFormState, active: false });
			setErrorState({
				...errorState,
				active: true,
				mode: 'edit',
			});
		} else {
			setErrorState({
				...errorState,
				active: true,
				mode: 'fail',
			});
		}
	};

	const onDragCell = (e, schedule) => {
		setDragAndDrop({ ...dragAndDrop, from: schedule });
	};

	const onDragEnterCell = (e) => {
		const { title } = dragAndDrop.from;
		const newScheduleForm = { title: title, curDate: date };
		setDragAndDrop({ ...dragAndDrop, to: newScheduleForm });
	};



	return (
		<>
		
		<div className="monthly-cell" onClick={onClickDate} onDragEnter={onDragEnterCell} onDragEnd={onDropSchedule}>
			<p>{curDateStr}</p>
			<KoreaAllData />
			{schedule.map((a, i) => (
				<div
					key={i}
					className="monthly-schedule"
					onClick={(e) => onClickSchedule(e, a)}
					draggable
					onDragStart={(e) => onDragCell(e, a)}
				>
					<p>{a.title}</p>
				</div>
			))}
		</div>

		</>
	);
};

export default MonthlyCell;
