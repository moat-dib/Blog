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
const HeaderContainer = (className) => (
	<header className={className}>
		<div className={styles.headerList}>
			<Logo className={styles.headerBlock1} />

			<div className={styles.headerBlock3}>
				<p>
					Веб-технологии <br />
					Написание кода <br />
					Разбор ошибок
				</p>
			</div>

			<ControlPanel />
		</div>
	</header>
);
export const Header = styled(HeaderContainer)``;
