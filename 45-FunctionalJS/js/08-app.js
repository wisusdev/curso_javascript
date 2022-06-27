// Closures
const getClient = () => {
	const name = 'Jesús';

	function showName(){
		console.log(name);
	}

	return showName;
}

const client = getClient();

client();