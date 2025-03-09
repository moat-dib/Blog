import { styled } from 'styled-components';
const WeatherIconBig = styled.img`
	margin-top: 0px;
`;
const WeatherIconSmall = styled.img`
	margin-top: 0;

	margin-right: 0;
`;
const SmallComtainer = styled.div`
	margin-left: -30px;
`;
const BigComtainer = styled.div`
	padding-left: 60px;
`;
const WeatherBlockContainer = ({
	className,
	id,
	description,
	temp,
	pressure,
	windSpeed,
}) => (
	<div className={className}>
		<BigComtainer>
			{temp} °C
			<div>
				<WeatherIconBig
					src={require(`./icons/${id}.png`)}
					height={`35px`}
					width={`35px`}
					alt={description}
				></WeatherIconBig>
			</div>
		</BigComtainer>
		<SmallComtainer>
			<div>
				<WeatherIconSmall
					src={require(`./icons/wind.png`)}
					height={`20px`}
					width={`20px`}
					alt={'wind'}
				></WeatherIconSmall>
				{` `}
				{windSpeed}m/s
			</div>
			<div>
				<WeatherIconSmall
					src={require(`./icons/pressure.png`)}
					height={`20px`}
					width={`20px`}
					alt={'pressure'}
				></WeatherIconSmall>
				{` `}
				{pressure}hPa
			</div>
		</SmallComtainer>
	</div>
);
export const WeatherBlock = styled(WeatherBlockContainer)`
	display: flex;
	margin-left: -70px;
	justify-content: space-between;
	width: 200px;
`;
