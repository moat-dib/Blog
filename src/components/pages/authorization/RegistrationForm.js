import { useState } from 'react';
import { styled } from 'styled-components';
//import Select from 'react-select';

const RegistrationFormContainer = () => {
	const [formData, setFormData] = useState({
		email: '',
		login: '',
		password1: '',
		password2: '',
	});
	const { email, login, password1, password2 } = formData;

	const sendFormData = (formData) => {
		console.log(formData);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		sendFormData(formData);
	};
	const UserRoles = [
		{ value: 'admin', label: 'Администратор' },
		{ value: 'modeerator', label: 'Модератор' },
		{ value: 'user', label: 'Пользователь' },
	];

	return (
		<div style={{ marginLeft: 20 + '%' }}>
			<p>Форма регистрации пользователя</p>
			<form onSubmit={onSubmit}>
				<div>
					<input
						name="login"
						type="text"
						placeholder="Логин"
						value={login}
						onChange={({ target }) =>
							setFormData({
								...formData,
								login: target.value,
							})
						}
					/>
				</div>
				{/* <div>
            <Select options={productOptions}
            defaultValue={productOptions[0]} />
        </div> */}
				<div>
					<input
						name="email"
						type="email"
						placeholder="Почта"
						value={email}
						onChange={({ target }) =>
							setFormData({
								...formData,
								email: target.value,
							})
						}
					/>
				</div>
				<div>
					<input
						name="password"
						type="password"
						placeholder="Пароль"
						value={password1}
						onChange={({ target }) =>
							setFormData({
								...formData,
								password1: target.value,
							})
						}
					/>
				</div>
				<div>
					<input
						name="password"
						type="password"
						placeholder="Повторите пароль"
						value={password2}
						onChange={({ target }) =>
							setFormData({
								...formData,
								password2: target.value,
							})
						}
					/>
				</div>
				<button type="submit">Register</button>
			</form>
		</div>
	);
};
export const RegistrationForm = styled(RegistrationFormContainer)``;
