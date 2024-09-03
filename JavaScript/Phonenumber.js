function verifyPhoneNumber(number) {
    // Remove any non-digit characters
    number = number.replace(/\D/g, '');

    // Check if the number is exactly 10 digits and starts with 6, 7, 8, or 9
    if (/^[6-9]\d{9}$/.test(number)) {
        return true;  // Valid phone number
    } else {
        return false; // Invalid phone number
    }
}

// Example usage:
const phoneNumber1 = "9876543210";
const phoneNumber2 = "1234567890";

console.log(`${phoneNumber1} is ${verifyPhoneNumber(phoneNumber1) ? 'valid' : 'invalid'}`);
console.log(`${phoneNumber2} is ${verifyPhoneNumber(phoneNumber2) ? 'valid' : 'invalid'}`);
