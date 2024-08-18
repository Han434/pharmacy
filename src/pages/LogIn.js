import React from "react";
import { TextField, Button, Container, Stack, Typography } from "@mui/material";

const logIn = () => {
    return (
        <Stack justifyContent={"center"} alignItems={"center"} minWidth="100vh" minHeight="100vh">
            <form>
                <Stack spacing={3}>
                    <Typography variant="h1" component="h1" sx={""}>
                        Log In
                    </Typography>
                    <TextField id="filled-basic" label="User Name" variant="filled" />
                    <TextField id="filled-basic" label="Password" variant="filled" />
                    <Button variant="contained">Submit</Button>
                    <Button variant="outline">Cancle</Button>
                </Stack>
            </form>
        </Stack>
    );
}

export default logIn;