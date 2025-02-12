const validateEmail = (email) => {    
    const emailRegex = /^[^@\s]+@[a-z]+(?:\.[a-z]{2,3})+(?:,\s*[^@\s]+@[a-z]+(?:\.[a-z]{2,3})+)*$/;    
    return emailRegex.test(email) ? null : 'Please enter a valid email address.';
}
const validatePassword = (password) => {
    // Minimum length check
    if (password.length < 8 || password.length > 40) {
        return 'Password must be between 8 and 40 characters long';
    }

    // Check for at least one alphabet
    if (!/[a-zA-Z]/.test(password)) {
        return 'Password must contain at least one alphabet';
    }

    // Check for at least one digit
    if (!/\d/.test(password)) {
        return 'Password must contain at least one digit';
    }

    // Check for at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return 'Password must contain at least one special character';
    }
    // If all checks pass, return null (no error)
    return null;
};

const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;

    // Check if all 10 digits are not the same
    const isNotAllSameDigits = !/(\d)\1{9}/.test(phone);

    return phoneRegex.test(phone) && isNotAllSameDigits ? null : 'Please enter a valid mobile number.';
};
const validateName = (name) => {
  const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
  return nameRegex.test(name) ? null : 'Only alphabets.';
};


export const validationFormInput = (name, value) => {
  switch (name) {
    case "email":
      return validateEmail(value);
    case "password":
      return validatePassword(value);
    case "phone":
      return validatePhone(value);
    case "username":
      return validateName(value);
    case "firstName":
      return validateName(value);
    case "lastName":
      return validateName(value);      
    default:
      return null;
    }
  };
  