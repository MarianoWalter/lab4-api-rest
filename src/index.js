import app from './app';

function main() {
	const port = 4000;
	app.listen(port, () => console.info('Corriendo en puerto ' + port));
}

main();
