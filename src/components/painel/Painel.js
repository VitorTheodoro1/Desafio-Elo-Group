import { useCallback, useReducer } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { LeadsController } from "../../services/LeadsService";
import produce from "immer";
import "./Painel.css";

import * as React from "react";

const dragReducer = produce((draft, action) => {
  switch (action.type) {
    case "MOVE": {
      draft[action.from] = draft[action.from] || [];
      draft[action.to] = draft[action.to] || [];
      const [removed] = draft[action.from].splice(action.fromIndex, 1);
      draft[action.to].splice(action.toIndex, 0, removed);
      break;
    }
    default:
  }
});

export default function Painel() {
  const leadsController = new LeadsController();
  const [leadsCriados] = React.useState(leadsController.get());

  const [state, dispatch] = useReducer(dragReducer, {
    items: leadsCriados,
  });

  const onDragEnd = useCallback((result) => {
    if (result.reason === "DROP") {
      if (!result.destination) {
        return;
      }
      dispatch({
        type: "MOVE",
        from: result.source.droppableId, //qual lista
        to: result.destination.droppableId, //pra qual lista
        fromIndex: result.source.index,
        toIndex: result.destination.index,
      });
    }
  }, []);

  return (
    <div className="painel">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="items" type="PERSON">
          {(provided, snapshot) => {
            return (
              <div
                className={"div1"}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                Clientes em Potencial
                {state.items?.map((person, index) => {
                  return (
                    <Draggable
                      key={person.id}
                      draggableId={person.id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <div
                            className={"div2"}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className={"div3"}>
                              <span>{person.name}</span>
                            </div>
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
        <Droppable droppableId="items2" type="PERSON">
          {(provided, snapshot) => {
            return (
              <div
                className={"div4"}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                Dados Confirmados
                {state.items2?.map((person, index) => {
                  return (
                    <Draggable
                      key={person.id}
                      draggableId={person.id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <div
                            className={"div5"}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className={"div6"}>
                              <span>{person.name}</span>
                            </div>
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
        <Droppable droppableId="items3" type="PERSON">
          {(provided, snapshot) => {
            return (
              <div
                className={"div7"}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                Reunião Agendada
                {state.items3?.map((person, index) => {
                  return (
                    <Draggable
                      key={person.id}
                      draggableId={person.id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <div
                            className={"div8"}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className={"div9"}>
                              <span>{person.name}</span>
                            </div>
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
