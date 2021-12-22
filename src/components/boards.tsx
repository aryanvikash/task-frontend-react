import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  Input,
  Loader,
  Modal,
  Ref,
  Tab,
  TextArea,
} from "semantic-ui-react";
import { addnewBoard, deleteboard } from "src/Redux/reducers/boards.reducer";
import { RootState } from "src/Redux/store";
import BoardItem from "./SingleBoard";

export default function Boards() {
  const [isOpenboardModel, setisOpenboardModel] = useState(false);
  const dispatch = useDispatch();
  // useselector to get the todos from the store
  const { loading, boards } = useSelector((state: RootState) => state.board);
  const newBoadref = useRef<any>();
  return (
    <div className="m-4">
      {loading ? (
        <Loader active />
      ) : (
        <div>
          <div className="flex justify-end">
            <Button
              secondary
              onClick={() => {
                setisOpenboardModel(true);
              }}
            >
              Add new Board
            </Button>
          </div>
          <Tab
            menu={{ color: "green", tabular: true }}
            panes={boards.map((board: any) => {
              return {
                menuItem: board.name,
                render: () => <BoardItem key={board.id} board={board} />,
              };
            })}
          />
          <Modal
            size="tiny"
            open={isOpenboardModel}
            onClose={() => {
              setisOpenboardModel(false);
            }}
          >
            <Modal.Header>Add new board</Modal.Header>
            <Modal.Content>
              <Ref innerRef={newBoadref}>
                <TextArea placeholder="board name" />
              </Ref>
            </Modal.Content>
            <Modal.Actions>
              <Button
                size="small"
                positive
                onClick={() => {
                  const name = newBoadref?.current?.value;
                  if (name) {
                    dispatch(addnewBoard(name));
                    setisOpenboardModel(false);
                  }
                }}
              >
                Add
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
      )}
    </div>
  );
}
