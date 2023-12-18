const form = document.querySelector('.feedback-form');
const inputEmail = form.elements.email;
const inputMessage = form.elements.message;

form.addEventListener('input', onFormInput);

function onFormInput() {
  const feedbackFormState = {
    email: inputEmail.value.trim(),
    message: inputMessage.value.trim(),
  };

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}

const savedFeedbackFormState = JSON.parse(
  localStorage.getItem('feedback-form-state')
);

if (savedFeedbackFormState) {
  inputEmail.value = savedFeedbackFormState.email;
  inputMessage.value = savedFeedbackFormState.message;
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (!inputEmail.value || !inputMessage.value) {
    alert('Please fill in both form fields.');
    return;
  }

  const lastValue = {
    email: inputEmail.value,
    message: inputMessage.value,
  };

  console.log(lastValue);
  localStorage.removeItem('feedback-form-state');

  event.currentTarget.reset();
}
