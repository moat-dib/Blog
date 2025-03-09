import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../Icon/icon';
const LargeText = styled.div`
	line-height: 46px;
	margin-left: 20px;
	font-size: 38px;
	font-weight: bold;
`;
const SmallTex = styled.div`
	margin-left: 20px;
	line-height: 22px;
	font-size: 18px;
	font-weight: bold;
`;
const logo = styled.p`
	font-size: 52px;
	vertical-align: bottom;
	padding-left: 10px;
	margin-right: 180px;
`;
const LogoContainer = ({ className }) => (
	<Link className={className} to="/">
		<div>
			<Icon id="fa-code" size="70px" margin="8px 10px 0 20px" />
			{/* <logo> &#8249; &#8260; &#8250; </logo> */}
		</div>
		<div>
			<LargeText>Блог</LargeText>
			<SmallTex>вeб-разработчика</SmallTex>
		</div>
	</Link>
);
export const Logo = styled(LogoContainer)`
	display: flex;
	font-size: 48px;
	font-weight: bold;

	margin-right: 12%;
	margin-bottom: 0;
	padding-bottom: 0;
`;
