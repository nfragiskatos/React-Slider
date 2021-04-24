import React from 'react';
import data from './data';
import People from './People';

function App () {
	return (
		<section className="section">
			<div className="title">
				<h2>
					<span>/</span>reviews
				</h2>
			</div>
			<People data={data} />
		</section>
	);
}

export default App;
