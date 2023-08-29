import React from "react";
import Form_add_note from "./Form_add_note";
import Notes_list from "./Notes_list";

function Notes (): JSX.Element {
    return (
        <div className="notes-list-form">
        <Notes_list />
        <Form_add_note />
        </div>
    )
}

export default Notes;