import { Box } from "@mui/material";
import { Button, Input } from "components/common";
import { useForm } from "react-hook-form";
import styles from "./styles";

const Form = () => {
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      emailAddress: "",
      city: "",
      subject: "",
      message: "",
    },
    mode: "all",
    criteriaMode: "all",
  });

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.imageWrapper}>
        <Box component="img" src="/contactUs.png" sx={styles.image} />
      </Box>
      <Box sx={styles.formWrapper}>
        <Box sx={styles.heading}>Online Contact Form</Box>
        <Box sx={styles.description}>
          Have a question or need assistance? Fill out the form below, and our
          support team will get back to you as soon as possible.
        </Box>
        <Box sx={styles.container}>
          <Box sx={styles.registerHeading}>Registration Information</Box>
          <Box sx={styles.form}>
            <Input
              name="name"
              label="Name"
              customStyles={styles.input}
              errors={errors}
              control={control}
              placeholder="Ved Vhardan Shani"
            />
            <Input
              name="emailAddress"
              label="Email Address"
              customStyles={styles.input}
              errors={errors}
              control={control}
              placeholder="vedvhardanshani@gmail.com"
            />
            <Input
              name="city"
              label="City"
              customStyles={styles.input}
              errors={errors}
              control={control}
              placeholder="Enter your City"
            />
            <Input
              name="subject"
              label="Subject"
              customStyles={styles.input}
              errors={errors}
              control={control}
              placeholder="Enter your subject"
            />
            <Input
              name="message"
              label="Message (250 words maximum)"
              errors={errors}
              control={control}
              placeholder="Enter your message"
            />
          </Box>
          <Button as="GradientButton" label="Next" />
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
