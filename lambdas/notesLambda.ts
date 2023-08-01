import { createNote, listNotes } from './notesOperations';
import { Note } from './types/Note';

type AppSyncEvent = {
  info: {
    fieldName: string;
  };
  arguments: {
    noteId: string;
    note: Note;
  };
};

exports.handler = async (event: AppSyncEvent) => {
  switch (event.info.fieldName) {
    case 'createNote':
      return await createNote(event.arguments.note);

    case 'listNotes':
      return await listNotes();

    default:
      return null;
  }
};

