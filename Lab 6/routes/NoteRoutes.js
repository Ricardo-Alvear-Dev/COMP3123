const noteModel = require("../models/NotesModel");
const express = require("express");
const noteRoutes = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
noteRoutes.post("/notes", async (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }

  try {
    const note = new noteModel({
      noteTitle: req.body.content.noteTitle,
      noteDescription: req.body.content.noteDescription,
      priority: req.body.content.priority,
      dateAdded: req.body.content.dateAdded,
      dateUpdated: req.body.content.dateUpdated,
    });

    const savedNote = await note.save();
    res.status(201).send(savedNote);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while creating the Note.",
    });
  }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
noteRoutes.get("/notes", async (req, res) => {
  try {
    const notes = await noteModel.find();
    res.status(200).send(notes);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving notes.",
    });
  }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
noteRoutes.get("/notes/:noteId", async (req, res) => {
  try {
    const note = await noteModel.findById(req.params.noteId);
    if (!note) {
      return res.status(404).send({
        message: "Note not found with id " + req.params.noteId,
      });
    }
    res.status(200).send(note);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).send({
        message: "Note not found with id " + req.params.noteId,
      });
    }
    res.status(500).send({
      message: "Error retrieving note with id " + req.params.noteId,
    });
  }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
noteRoutes.put("/notes/:noteId", async (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }

  try {
    const note = await noteModel.findByIdAndUpdate(
      req.params.noteId,
      {
        noteTitle: req.body.content.noteTitle,
        noteDescription: req.body.content.noteDescription,
        priority: req.body.content.priority,
        dateAdded: req.body.content.dateAdded,
        dateUpdated: req.body.content.dateUpdated,
      },
      { new: true }, // Return the updated document
    );

    if (!note) {
      return res.status(404).send({
        message: "Note not found with id " + req.params.noteId,
      });
    }
    res.status(200).send(note);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).send({
        message: "Note not found with id " + req.params.noteId,
      });
    }
    res.status(500).send({
      message: "Error updating note with id " + req.params.noteId,
    });
  }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
noteRoutes.delete("/notes/:noteId", async (req, res) => {
  try {
    const note = await noteModel.findByIdAndDelete(req.params.noteId);
    if (!note) {
      return res.status(404).send({
        message: "Note not found with id " + req.params.noteId,
      });
    }
    res.status(200).send({ message: "Note deleted successfully!" });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).send({
        message: "Note not found with id " + req.params.noteId,
      });
    }
    res.status(500).send({
      message: "Could not delete note with id " + req.params.noteId,
    });
  }
});

module.exports = noteRoutes;
