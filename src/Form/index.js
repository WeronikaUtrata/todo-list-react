import { FormContainer, StyledInput, Button } from "./styled";
import { useState, useRef } from "react";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const contentTrimmed = newTaskContent.trim();

        if (!contentTrimmed) {
            return;
        }
        
        addNewTask(contentTrimmed);
        setNewTaskContent("");
        inputRef.current.focus();
    }

    return (
        <FormContainer onSubmit={onFormSubmit}>
            <StyledInput
                value={newTaskContent}
                ref={inputRef}
                autoFocus
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </FormContainer>
    );
};

export default Form;