import styled from 'styled-components';
import { Link, Navigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Button, H2, AuthFormError } from '../../../components';
import { useResetForm } from '../../../hooks';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { selectUserRole } from '../../../selectors';
import { setUser } from '../../../actions';
import { server } from '../../../bff/server';
import { ROLE } from '../../../bff/constants';
const authSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин ')
		.matches(/^\w+$/, 'Неверный логин. Допускаются только буквы и цифры')
		.min(3, 'Неверный логин.Минимум 3 символа')
		.max(15, 'Неверный логин.Максимум 15 символа'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(/^[\w#-%]+$/, 'Неверный пароль. Допускаются только буквы, цифры, #,%')
		.min(6, 'Неверный пароль.Минимум 3 символа')
		.max(30, 'Неверный пароль.Максимум 30 символа'),
});

const AuthorizationComtainer = ({ className }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authSchema),
	});
	const dispatch = useDispatch();
	const [serverError, setServerError] = useState(null);
	const roleId = useSelector(selectUserRole);
	useResetForm(reset);

	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error !== null) {
				setServerError(`Server error: ${error}`);
				return;
			}
			console.log('res', res);
			dispatch(setUser(res));
		});
	};
	const formError = errors?.login?.message || errors?.password?.message;
	const errorMessage = formError || serverError;

	const StyledLink = styled(Link)`
		text-align: center;
		text-decoration: underline;
		padding-left: 33%;
		padding-top: 40px;
		margin: 20px 0;
		font-size: 18px;
	`;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}
	return (
		<div className={className}>
			<H2>Authorization</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<Input
						name="login"
						type="text"
						placeholder="Логин"
						{...register('login', {
							onChange: () => setServerError(null),
						})}
					/>
				</div>
				<div>
					<Input
						name="password"
						type="password"
						placeholder="Пароль"
						{...register('password', {
							onChange: () => setServerError(null),
						})}
					/>
				</div>
				{errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
				<Button type="submit" disabled={!!formError}>
					Enter
				</Button>

				<StyledLink to="/register">Register</StyledLink>
			</form>
		</div>
	);
};
export const Authorization = styled(AuthorizationComtainer)`
	display: flex;
	align-items: center;
	flex-direction: column;

	& > form {
		dsiplay: flex;
		flex-direction: column;
	}
`;
