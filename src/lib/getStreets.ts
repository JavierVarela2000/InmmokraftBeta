import opencage from 'opencage-api-client';

const obtenerInformacionUbicacion = async (latitud: number | string, longitud: number | string) => {
	try {
		const resultado = await opencage.geocode({
			q: `${latitud}, ${longitud}`,
			key: '92342d413f134df7b746e520aaa38728'
		});
		if (resultado.status.code === 200) {
			// Aquí puedes acceder a la información de la ubicación, como el nombre de la calle o avenida.
			return resultado.results[0].formatted;
		} else {
			console.error('Error al geocodificar la ubicación:', resultado.status.message);
		}
	} catch (error) {
		console.error('Error en la solicitud:', error);
	}
};

export default obtenerInformacionUbicacion;
