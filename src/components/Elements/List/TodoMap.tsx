import { useCallback } from "react";
import { TodoItem } from "./TodoItem";
import { useTodoStore } from "../../../stores";
import { Todo } from "../../../types";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export const TodoMap = ({ filteredItems, setFilteredItems }: any) => {
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleComplete = useTodoStore((state) => state.toggleComplete);

  const onDragEnd = useCallback(
    (result: any) => {
      if (!result.destination) {
        return;
      }

      if (result.source.index === result.destination.index) {
        return;
      }

      const newFilteredItems = Array.from(filteredItems);
      const [removed] = newFilteredItems.splice(result.source.index, 1);
      newFilteredItems.splice(result.destination.index, 0, removed);

      setFilteredItems(newFilteredItems);
    },
    [filteredItems, setFilteredItems]
  );

  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <div
          style={{
            width: "100%",
          }}
        >
          <Droppable droppableId="droppable-1">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  width: "100%",
                }}
              >
                {filteredItems.map((todoItem: Todo, index: number) => (
                  <Draggable
                    key={todoItem.id}
                    draggableId={todoItem.id.toString()}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TodoItem
                          key={todoItem.id}
                          todo={todoItem}
                          onUpdateTodo={updateTodo}
                          onDeleteTodo={deleteTodo}
                          onToggleComplete={toggleComplete}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </ul>
  );
};
