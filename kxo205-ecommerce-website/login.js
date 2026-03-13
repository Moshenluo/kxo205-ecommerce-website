const form = document.querySelector('form'); // 选择表单元素
const username = document.querySelector('input[name=uname]'); // 选择name属性等于uname的输入元素
const password = document.querySelector('input[name=psw]'); // 选择name属性等于psw的输入元素
const errorMessage = document.getElementById('error-message'); // 选择id属性等于error-message的元素

form.addEventListener('submit', (event) => {
	if (username.value === '' || password.value === '') { // 如果用户名或密码为空
		event.preventDefault(); // 阻止表单提交
		errorMessage.innerHTML = '请填写所有字段'; // 显示错误消息
		username.classList.add('empty-field'); // 添加empty-field类到用户名输入框
		password.classList.add('empty-field'); // 添加empty-field类到密码输入框
	} else {
		errorMessage.innerHTML = ''; // 清空错误消息
		username.classList.remove('empty-field'); // 从用户名输入框中删除empty-field类
		password.classList.remove('empty-field'); // 从密码输入框中删除empty-field类
	}
});