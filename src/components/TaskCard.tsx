import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Checkbox, Icon, Modal } from "semantic-ui-react";
import {
  deletetodo,
  markCompleteTodo,
  upadteTodo,
} from "src/Redux/reducers/todos.reducer";

export default function TaskCard({ todo }: any) {
  const [OpenModel, setOpenModel] = useState(false);
  const [updateModal, setupdateModal] = useState(false);
  const updateinputRef = useRef<any>();

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
          <Icon
            name="edit"
            className="  text-blue-400 hover:text-blue-500"
            onClick={() => {
              setupdateModal(true);
            }}
          />
        </div>
        <Card.Description>{todo?.content}</Card.Description>
      </Card.Content>

      {/* Modals */}
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
      {/* update modal */}
      <Modal
        size="large"
        open={updateModal}
        onClose={() => {
          setupdateModal(false);
        }}
      >
        <Modal.Header>Delete Your Task</Modal.Header>
        <Modal.Content>
          <textarea
            rows={4}
            className="w-full ring-1 rounded"
            ref={updateinputRef}
            defaultValue={todo.content}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            negative
            onClick={() => {
              setupdateModal(false);
            }}
          >
            cancel
          </Button>
          <Button
            color="blue"
            onClick={() => {
              const text = updateinputRef.current.value;
              if (text) {
                dispatch(upadteTodo(todo, text));
                setOpenModel(false);
              }
            }}
          >
            Update
          </Button>
        </Modal.Actions>
      </Modal>
    </Card>
  );
}
