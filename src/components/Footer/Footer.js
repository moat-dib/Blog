import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { WeatherBlock } from './WeatherBlock';
const MyFooter = styled.footer`
	display: flex;
	border: 1px solid #000;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	height: 120px;
	padding: 10px 40px;
	background-color: #fff;
	box-shadow: rgb(0, 0, 0) 0px -2px 17px;
`;
const weatherContainer = styled(WeatherBlock)`
	margin-left: -100px;
	border: 1px solid #000;
`;
const FooterContainer = (className) => {
	const [city, setCity] = useState('');
	const [temp, setTemp] = useState('');
	const [weather, setWeather] = useState('');
	const [weatherID, setWeatherID] = useState('04d');
	const [pressure, setPressure] = useState('0');
	const [windSpeed, setWindSpeed] = useState('0');
	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=5bb7a01cdf45b4f441f7563ed8b70b72',
		)
			.then((res) => res.json())
			.then(({ name, main, weather, wind }) => {
				setCity(name);
				setTemp(Math.round(main.temp));
				setWeather(weather[0].description);
				setWeatherID(weather[0].icon);
				setPressure(main.grnd_level);
				setWindSpeed(wind.speed);
			});
	}, []);

	return (
		<MyFooter className={className}>
			<div>
				<div>Web developer blog</div>
				<div>kharin-m@ya.ru</div>
			</div>
			<div>
				<div>
					{city},{` `}
					{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<WeatherBlock
					className={className}
					id={weatherID}
					description={weather}
					temp={temp}
					pressure={pressure}
					windSpeed={windSpeed}
				/>
			</div>
		</MyFooter>
	);
};
export const Footer = styled(FooterContainer)``;
