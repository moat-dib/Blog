import { Logo } from './components/logo';
import { ControlPanel } from './components/controlPanel';
import styles from './header.module.css';
import styled from 'styled-components';
const MyHeader = styled.header`
	width: 1000px;
	justify-content: space-between;
	box-shadow: 0px 0px 17px #000;
	position: fixed;
	top: 0px;
`;
const Annotation = styled.div`
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	font-style: italic;
	font-size: 18px;
	margin-right: 25%;
	margin-top: -15px;
`;
const HeaderContainer = (className) => (
	<MyHeader className={className}>
		<div className={styles.headerList}>
			<Logo />

			<Annotation>
				<p>
					Веб-технологии <br />
					Написание кода <br />
					Разбор ошибок
				</p>
			</Annotation>

			<ControlPanel />
		</div>
	</MyHeader>
);
export const Header = styled(HeaderContainer)``;
