import { Form, redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="Omale" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="Arumona"
        />
        <FormRow type="text" name="location" defaultValue="Nigeria" />
        <FormRow
          type="email"
          name="email"
          defaultValue="omalearumona@gmail.com"
        />
        <FormRow type="password" name="password" defaultValue="password" />
        <SubmitBtn formBtn />
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
          `
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
