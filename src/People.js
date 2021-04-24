import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Person from './Person';

function People ({ data }) {
	const [ people, setPeople ] = useState(data);
	const [ index, setIndex ] = useState(0);

	useEffect(
		() => {
			const lastIndex = people.length - 1;
			if (index < 0) {
				setIndex(lastIndex);
			}
			if (index > lastIndex) {
				setIndex(0);
			}
		},
		[ index, people ]
	);

	useEffect(
		() => {
			let slider = setInterval(() => {
				setIndex(index + 1);
			}, 3000);
			return () => clearInterval(slider);
		},
		[ index ]
	);

	const getPosition = (personIndex) => {
		let position = 'nextSlide';
		if (personIndex === index) {
			position = 'activeSlide';
		}

		if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
			position = 'lastSlide';
		}
		return position;
	};

	return (
		<div className="section-center">
			{people.map((person, personIndex) => {
				return <Person key={person.id} person={person} position={getPosition(personIndex)} />;
			})}
			<button onClick={() => setIndex(index - 1)} className="prev">
				<FiChevronLeft />
			</button>
			<button onClick={() => setIndex(index + 1)} className="next">
				<FiChevronRight />
			</button>
		</div>
	);
}

export default People;
