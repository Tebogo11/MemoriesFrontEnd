import React, { useState, useEffect } from "react";
import { Grow, Grid, Container } from "@material-ui/core";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
//redux
import { useDispatch } from "react-redux";
//Actions
import { getPosts } from "../../actions/posts";
const Home = () => {
  const [currentId, setcurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setcurrentId={setcurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setcurrentId={setcurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
