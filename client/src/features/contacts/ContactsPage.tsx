import { useAppSelector, useAppDispatch } from "../../app/store/store";
import { decrement, increment, } from "./counterReducer";
import { Button, ButtonGroup, Typography } from "@mui/material";

export default function ContactsPage() {
  const {data} = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <Typography variant="h2" gutterBottom>
        Contacts Page
      </Typography>
      <Typography variant="body1" gutterBottom>
        The data is: {data}
      </Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch(decrement(5))} color="warning">Decrement by 5</Button>
        <Button onClick={() => dispatch(decrement(1))} color="error">Decrement</Button>
        <Button onClick={() => dispatch(increment(1))} color="success">Increment</Button>
        <Button onClick={() => dispatch(increment(5))} color="primary">Increment by 5</Button>
      </ButtonGroup>
    </>
  )
}