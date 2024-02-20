export default function Submission(values) {
      const errors = {};
    
      const email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
      if (values.name === "") {
        errors.name = "Name is required";
      }
    
      if (!email_pattern.test(values.email) || values.email === "") {
        errors.email = "Please enter a valid email address";
      }
      
      if (values.contact === "") {
        errors.contact = "Contact is required";
      }
      if (values.password === "") {
        errors.password = "Password is required";
      }
      if (values.confirm_password === "" || values.confirm_password !== values.confirm_password) {
        errors.confirm_password = "Passwords don't match";
      }
    
      return errors;
    }