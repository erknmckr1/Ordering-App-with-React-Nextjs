import Input from "../form/Input";
import Title from "@/components/ui/Title";
import { useFormik } from "formik";
import { profileSchema } from "../../schema/profile";
import axios from "axios";
import { toast } from "react-toastify";

function Account({ user }) {
  //! Form submit function
  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
        values
      );
      toast.success("Updated!");
      console.log(values);
    } catch (err) {
      console.log(err);
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: user?.fullName,
        phoneNumber: user?.phoneNumber,
        email: user?.email,
        address: user?.address,
        job: user?.job,
        bio: user?.bio,
      },
      onSubmit,
      validationSchema: profileSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber || "",
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email || "",
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "job",
      type: "text",
      placeholder: "Your Job",
      value: values.job || "",
      errorMessage: errors.job,
      touched: touched.job,
    },
    {
      id: 5,
      name: "address",
      type: "text",
      placeholder: "Your Address",
      value: values.address || "",
      errorMessage: errors.address,
      touched: touched.address,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "Your Bio",
      value: values.bio || "",
      errorMessage: errors.bio,
      touched: touched.bio,
    },
  ];
  return (
    <form onSubmit={handleSubmit} className="p-4 w-full flex-1 relative ">
      <Title addClass="text-[40px]">Account Setting</Title>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ))}
      </div>
      <button type="submit" className="btn mt-4 text-white">
        Update
      </button>
    </form>
  );
}

export default Account;
