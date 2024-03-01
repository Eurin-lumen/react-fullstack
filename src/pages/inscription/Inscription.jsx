import React from "react";
import { Button, TextField, Box, Stack, Typography } from "@mui/material"; // Assurez-vous d'importer Typography depuis @mui/material
import InscriptionForm from "./Inscription"; // Renommez le composant pour éviter les conflits de noms

export default function InscriptionPage() {
  // Renommez le nom de la fonction pour éviter les conflits de noms
  return (
    <Stack alignItems={"center"} justifyContent={"center"} width={"100%"} height={"100vh"} backgroundColor={"#bdc3c7"} >
      <Box width={400} sx={
        {
          backgroundColor: "#ffff",
          padding: 3,
        }
      } >
        <Typography variant="h4" sx={{textAlign:"center"}}>Inscription</Typography> <br />
        <form action="" method="post">
          <Stack flexDirection={"column"} gap={2}>

            <TextField id="outlined-basic" label="Veuillez saisir votre nom" variant="outlined" />

            <TextField id="outlined-basic" label="Veuillez saisir un mot de passe"  type="password" variant="outlined" />

            <TextField id="outlined-basic" label="Veuillez confirmer le mot de passe"  type="password" variant="outlined" />


            <Button variant="contained" type="submit">S'inscrire </Button>

          </Stack>


        </form>
      </Box>

    </Stack>
  );
}
 