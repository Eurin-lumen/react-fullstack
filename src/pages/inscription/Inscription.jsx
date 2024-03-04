import React from "react";
import { Button, TextField, Box, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

const InscriptionPage = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data, errors);
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100vh"
      backgroundColor="#bdc3c7"
    >
      <Box width={400} sx={{ backgroundColor: "#ffff", padding: 3 }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Inscription
        </Typography>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack flexDirection="column" gap={2}>
            <TextField
              id="outlined-basic"
              label="Veuillez saisir votre nom"
              variant="outlined"
              {...register("nomUtilisateur", {
                required: "Entrez un nom",
                minLength: {
                  value: 5,
                  message: "Veuillez saisir un nom de + de 5 caractères",
                },
              })}
            />
            <TextField
              id="outlined-basic"
              label="Veuillez saisir votre email"
              type="email"
              variant="outlined"

              {...register("motDePasse", {
                required: "Entrez votre addresse email",
                pattern: "^([a-zA-Z0-9_\-]+)@([a-zA-Z0-9_\-]+)\.([a-zA-Z]{2,5})$",
              })}
            />
            <TextField
              id="outlined-basic"
              label="Veuillez saisir un mot de passe"
              type="password"
              variant="outlined"
              {...register("motDePasse", {
                required: "Entrez un mot de passe",
                minLength: {
                  value: 6,
                  message: "Veuillez saisir un mot de passe de + de 6 caractères",
                },
              })}
            />
            <TextField
              id="outlined-basic"
              label="Veuillez confirmer le mot de passe"
              type="password"
              variant="outlined"
              {...register("motDePasseConfirmation", {
                required: "Entrez un mot de passe",
                minLength: {
                  value: 6,
                  message: "Veuillez saisir un mot de passe de + de 6 caractères",
                },
              })}
            />
            <Button variant="contained" type="submit">
              S'inscrire
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
};

export default InscriptionPage;
