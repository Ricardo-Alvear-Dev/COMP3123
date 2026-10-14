const mongoose = require("mongoose");

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const NoteSchema = new mongoose.Schema({
  noteTitle: {
    type: String,
    required: [true, "Note title is required"],
  },
  noteDescription: {
    type: String,
    required: [true, "Note description is required"],
  },
  priority: {
    type: String,
    required: [true, "Priority is required"],
    enum: ["HIGH", "LOW", "MEDIUM", "MEDUIM"], // Supports both standard spelling and exercise typo
    uppercase: true,
  },
  dateAdded: {
    type: String,
    required: [true, "Date added is required"],
  },
  dateUpdated: {
    type: String,
    required: [true, "Date updated is required"],
  },
});

const noteModel = mongoose.model("Note", NoteSchema);

module.exports = noteModel;
