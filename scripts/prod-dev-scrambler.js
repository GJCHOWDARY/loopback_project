function buildQuery(rows) {
	let count = 0;
	let overflow = 0;
	let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	let queries = [];
	rows.forEach((row) => {
		let name = alpha[count] + (overflow > 0 ? overflow : '');
		let query = `WHEN id=${row.id} THEN '${name}'`;
		queries.push(query);
		console.log(query);
		if (count === 25) {
			count = 0;
			overflow++;
		} else {
			count++;
		}
	})

}

const Groups = app.models.Matter;
Groups.find().then((result) => {
	buildQuery(result);
	callback(null, {});
});