import { H2 } from '../h2/h2';
import styled from 'styled-components';
const Div = styled.div``;
export const Content = ({ children, error }) =>
	error ? (
		<Div>
			<H2>Error</H2>
			<div>{error}</div>
		</Div>
	) : (
		children
	);
