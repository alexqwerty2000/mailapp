export const feedbackValidate = inputs =>{
    const errors = {};
    if (!inputs.email) {
        errors.email = 'Введите ваш email';
      }
      
      if (!inputs.msg || !inputs.length) {
        errors.msg = 'Вы забыли ввести сообщение';
      }
      return errors;
}