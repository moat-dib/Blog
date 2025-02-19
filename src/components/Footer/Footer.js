import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
const MyFooter = styled.footer`
	display: flex;
	border: 1px solid #000;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	background-color: #fff;
	box-shadow: rgb(0, 0, 0) 0px -2px 17px;
`;
const FooterContainer = (className) => {
	const [city, setCity] = useState('');
	const [temp, setTemp] = useState('');
	const [weather, setWeather] = useState('');
	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=5bb7a01cdf45b4f441f7563ed8b70b72',
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemp(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);

	return (
		<MyFooter className={className}>
			<div>
				<div>Web developer blog</div>
				<div>Web@developer.ru</div>
			</div>
			<div>
				<div>
					{city},{' '}
					{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div>
					{temp}...{weather}
				</div>
			</div>
		</MyFooter>
	);
};
export const Footer = styled(FooterContainer)``;
