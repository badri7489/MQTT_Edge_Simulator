/**
 * Hive MQTT details,
 * Host: 876daecc390644b2aaddc4f4106f43fd.s2.eu.hivemq.cloud
 * Port: 8883
 * Username: passn8
 * pw: Aq1Sw2De3Fr4@iot
 *
 * Mosquitto MQTT broker.
 * Host:  3.138.206.184
 * PORT: 1883
 * Username: iotadmin
 * Password: Q1w2e3r4t5
 */

let option = {
	host: '3.138.206.184',
	port: 1883,
	username: 'iotadmin',
	password: 'Q1w2e3r4t5',
	protocol: 'mqtt',
};

import { connect } from 'mqtt';
const client = connect(option);

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

client.on('connect', async function () {
	const topics = [
		'prethingworx/tph_value1',
		'thingworx/tph_value2',
		'thingworx/tph_value3',
		'thingworx/tph_value4',
	];

	while (1) {
		topics.forEach((topic) => {
			client.publish(topic, (Math.random() * 60).toFixed(2).toString());
		});
		await delay(15000);
	}
});
