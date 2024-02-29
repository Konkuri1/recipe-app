import { KeyboardArrowRightRounded } from "@mui/icons-material";
import emptyIcon from "../../assets/images/undraw_Empty_re_opql.png";
import loadingIcon from "../../assets/images/infinite-spinner.svg";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [keyword, setkeyword] = useState("");
  const [loading, setLoading] = useState(false);

  const getRecipes = () => {
    setLoading(true);
    // prepare URL
    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
    url.searchParams.append(
      "apiKey",
      process.env.REACT_APP_SPOONACULAR_API_KEY
    );
    url.searchParams.append("query", keyword);
    // fetch recipes from API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // update recipes state
        setRecipes(data.results);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })

      .finally(() => setLoading(false));

    // update recipes state
  };
  useEffect(getRecipes, [keyword]);

  return (
    <>
      <Container sx={{ my: "2rem" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Enter a keyword to search recipes and hit enter"
          variant="outlined"
          onKeyDown={(event) =>
            event.key === "Enter" && setkeyword(event.target.value)
          }
        />

        <Grid
          sx={{ mt: "1rem", justifyContent: "center" }}
          container
          spacing={3}
        >
          {loading ? (
            <img src={loadingIcon} width="100%" />
          ) : recipes.length > 0 ? (
            recipes.map((recipe) => (
              <Grid key={recipe.id} item xs={4}>
                <Card sx={{ maxWidth: 345, height: "100%" }}>
                  <CardActionArea sx={{ height: "100%" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={recipe.image}
                      alt={recipe.title}
                    />
                    <CardContent sx={{ height: "100%" }}>
                      <Link to={`/recipes/${recipe.id}`}>
                        <Typography gutterBottom variant="h5" component="div">
                          {recipe.title}
                        </Typography>
                      </Link>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          ) : (
            <img src={emptyIcon} width="50%" />
          )}
        </Grid>
      </Container>
    </>
  );
}
