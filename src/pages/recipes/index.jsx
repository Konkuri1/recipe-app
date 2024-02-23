import { Card, CardContent, CardMedia, Container, Grid, TextField, Typography, } from "@mui/material";
export default function Recipes () {
  return (
    <>
      <Container sx= {{my: '2rem'}}maxwidth="sm">
        <TextField 
        fullWidth
        id="outlined-basic" 
        label="Enter a keyword to search recipes and hit enter" 
        variant="outlined" />

        <Grid sx={{ mt: "1rem"}} Container spacing={3}>
            <Grid item xs={4}>
            <Card>
                <CardMedia 
                sx= {{ height:140 }}
                
                image="https://images.unsplash.com/photo-1708279753272-1ab957e2d07e?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </Card>
            <CardContent>
                <Typography variant="h5">Recipe Name</Typography>
            </CardContent>
            </Grid>
            
        </Grid>
      </Container>
    </>
  );
}