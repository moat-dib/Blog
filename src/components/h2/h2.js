import styled from 'styled-components';
const h2Container = ({ children, className }) => {
	return <h2 className={className}>{children}</h2>;
};
export const H2 = styled(h2Container)`
	margin: 40px;
`;
