const {
    getAllSongs,
    getSongById,
    getSongsByTitle,
    getSongsByArtist,
    getSongsBySearch,
    addNewSong,
    updateSongById,
    deleteSongById,
    updateSongPlayCount
} = require('../controllers/song.controller')

const express = require('express')
const router = express.Router()

router.get("/artist", (req, res) => {
    try {
        const response = getSongsByArtist(req.query.artist)

        res.send(response)
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get("/title", (req, res) => {
    try {
        const response = getSongsByTitle(req.query.title)

        res.send(response)
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get("/search", (req, res) => {
    try {
        const response = getSongsBySearch(req.query.search)

        res.send(response)
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get("/", (req, res) => {
    try {
        const response = getAllSongs()

        res.send(response)
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get("/:id", (req, res) => {
    try {
        const response = getSongById(req.params.id)

        res.send(response)
    } catch (err) {
        res.status(400).send(err);
    }
})

router.post("/", (req, res) => {
    try {
        const newSongBody = {
            title: req.body.title,
            artist: req.body.artist
        }
        const response = addNewSong(newSongBody)
        
        res.send(response)
    } catch (err) {
        res.status(400).send(err);
    }
})

router.put("/:id", (req, res) => {
    try {
        const updateSongBody = {
            title: req.body.title,
            artist: req.body.artist
        }
        const response = updateSongById(req.params.id, updateSongBody)

        res.send(response)
    } catch (err) {
        res.status(400).send(err);
    }
})

router.delete("/:id", (req, res) => {
    try {
        const response = deleteSongById(req.params.id)

        res.send(response)
    } catch (err) {
        res.status(400).send(err);
    }
})

router.put("/:id/updatePlayCount", (req, res) => {
    try {
        const response = updateSongPlayCount(req.params.id)

        res.send(response)
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router;