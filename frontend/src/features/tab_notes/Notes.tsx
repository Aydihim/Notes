import React from "react";
import Form_add_note from "./Form_add_note";
import Notes_list from "./Notes_list";

function Notes (): JSX.Element {
    return (
        <>
        <Form_add_note />
        <Notes_list />
        </>
    )
}

export default Notes;