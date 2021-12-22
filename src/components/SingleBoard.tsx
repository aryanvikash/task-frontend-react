import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  Form,
  Grid,
  Header,
  Loader,
  Modal,
  Ref,
  TextArea,
} from "semantic-ui-react";
import { deleteboard } from "src/Redux/reducers/boards.reducer";
import { addtodo, fetchtodo } from "src/Redux/reducers/todos.reducer";
import { RootState } from "src/Redux/store";
import TaskCard from "./TaskCard";

export default function BoardItem({ board }: any) {
  const dispatch = useDispatch();
  // ref for text area
  const addtaskRef = useRef<any>();
  // selctor for the todos
  const { loading, todos } = useSelector((state: RootState) => state.todo);
  const [OpenModel, setOpenModel] = useState(false);
  useEffect(() => {
    dispatch(fetchtodo(board.id));
  }, [board.id, dispatch]);

  return (
    <div>
      {loading ? (
        <Loader active />
      ) : (
        <Grid columns={3} stackable divided>
          {/* incomplete tasks */}
          <Grid.Column>
            <Header>New Task</Header>
            <Card.Group>
              {todos
                ?.filter((todo: any) => {
                  return todo.completed === false;
                })
                ?.map((todo: any) => {
                  return <TaskCard key={todo.id} todo={todo} />;
                })}
            </Card.Group>
          </Grid.Column>
          {/* Add ToDO */}
          <Grid.Column>
            {/* Input box  */}
            <div className=" flex justify-center py-2">
              <h1 className="text-green-400 ">{board.name}</h1>
            </div>
            <Form>
              <div className="flex flex-col gap-6 ">
                <Ref innerRef={addtaskRef}>
                  <TextArea placeholder="add new Task" />
                  {/* <textarea ref={addtaskRef} /> */}
                </Ref>
                <Button
                  color="green"
                  onClick={() => {
                    const text = addtaskRef?.current?.value;
                    console.log(text);
                    if (text) {
                      dispatch(addtodo(board.id, text));
                    }
                  }}
                >
                  Add Task
                </Button>
              </div>
            </Form>
          </Grid.Column>
          {/* Completed todos */}
          <Grid.Column>
            <Header>Completed Tasks</Header>
            {todos
              ?.filter((todo: any) => {
                return todo.completed === true;
              })
              ?.map((todo: any) => {
                return <TaskCard key={todo.id} todo={todo} />;
              })}
          </Grid.Column>
        </Grid>
      )}
      <div className="fixed bottom-10 right-1/2 ">
        <Button
          color="red"
          onClick={() => {
            setOpenModel(true);
          }}
        >
          Delete current Board
        </Button>
      </div>

      {/* model */}
      <Modal
        size="tiny"
        open={OpenModel}
        onClose={() => {
          setOpenModel(false);
        }}
      >
        <Modal.Header>Delete current board</Modal.Header>

        <Modal.Content>
          <p className=" text-lg font-extrabold text-red-500">Attention !! </p>
          <p>Do you want to delete this Board ? </p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            negative
            onClick={() => {
              setOpenModel(false);
            }}
          >
            cancel
          </Button>
          <Button
            positive
            onClick={() => {
              dispatch(deleteboard(board.id));
              setOpenModel(false);
            }}
          >
            Yes Delete
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
