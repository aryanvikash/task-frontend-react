import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Checkbox, Icon, Modal } from "semantic-ui-react";
import { deletetodo, markCompleteTodo } from "src/Redux/reducers/todos.reducer";

export default function TaskCard({ todo }: any) {
  const [OpenModel, setOpenModel] = useState(false);
  const dispatch = useDispatch();
  return (
    <Card>
      <Card.Content>
        <div className="flex justify-between mb-4">
          <Checkbox
            label="complete"
            checked={todo.completed}
            onChange={(e, data) => {
              dispatch(markCompleteTodo(data.checked, todo));
            }}
          />
          <Icon
            name="trash"
            className="text-gray-500  hover:text-red-500"
            onClick={() => {
              setOpenModel(true);
            }}
          />
        </div>
        <Card.Description>{todo?.content}</Card.Description>
      </Card.Content>
      <Modal
        size="tiny"
        open={OpenModel}
        onClose={() => {
          setOpenModel(false);
        }}
      >
        <Modal.Header>Delete Your Task</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete your task?</p>
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
              dispatch(deletetodo(todo));
              setOpenModel(false);
            }}
          >
            Yes Delete
          </Button>
        </Modal.Actions>
      </Modal>
    </Card>
  );
}
