// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, TextField, Box, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

const InscriptionPage = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.get(`http://localhost:3000/Utilisateurs?mailUtilisateur=${data.mailUtilisateur}`);

      if (response.data.length > 0) {
        toast.error("Un compte existe déjà avec cette adresse e-mail");
      } else {
        // Utilisateur non trouvé, on peut procéder à l'inscription
        // Vous pouvez également supprimer ces lignes si vous ne souhaitez pas effacer les mots de passe du formulaire
        data.motDePasseConfirmation = undefined;
        data.motDePasse = undefined;

        await axios.post("http://localhost:3000/Utilisateurs", data);
        toast.success("Inscription réussie");
      }
    } catch (err) {
      console.error(err);
      toast.error("Erreur lors de l'inscription");
    }
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
                      message: "Veuillez saisir un nom de plus de 5 caractères",
                    },
                  })}
              />
              <TextField
                  id="outlined-basic"
                  label="Veuillez saisir votre email"
                  type="email"
                  variant="outlined"
                  {...register("mailUtilisateur", {
                    required: "Entrez votre adresse email",
                    pattern: {
                      value: /^([a-zA-Z0-9_-]+)@([a-zA-Z0-9_\\-]+)\.([a-zA-Z]{2,5})$/,
                      message: "Veuillez saisir une adresse email valide",
                    },
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
                      message: "Veuillez saisir un mot de passe de plus de 6 caractères",
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
                      message: "Veuillez saisir un mot de passe de plus de 6 caractères",
                    },
                  })}
              />
              <Button variant="contained" type="submit">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                S'inscrire
              </Button>
            </Stack>
          </form>
        </Box>
        <Toaster />
      </Stack>
  );
};

export default InscriptionPage;
