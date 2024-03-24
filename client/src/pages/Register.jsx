import { Form, redirect, useNavigation } from "react-router-dom";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

export const action = async (data) => {
  console.log(data);
  return null;
  // const formData = await request.formData();
  // const data = Object.fromEntries(formData);
  // try {
  //   await customFetch.post("/auth/register", data);
  //   return redirect("/login");
  // } catch (error) {
  //   return error;
  // }
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
        <FormRow type="text" name="location" defaultValue="earth" />
        <FormRow
          type="email"
          name="email"
          defaultValue="omalearumona@gmail.com"
        />
        <FormRow type="password" name="password" defaultValue="password" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
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
