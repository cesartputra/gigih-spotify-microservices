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
} = require('../models/song.model')

exports.getAllSongs = () => {
    const songs = getAllSongs()
    if (!songs) {
        throw {
            type: "not-found",
            message: "Cannot get playlist"
        }
    }

    return songs
}

exports.getSongById = (id) => {
    const song = getSongById(id)
    
    if (!song) {
        throw {
            type: "not-found",
            message: "Cannot find song by id"
        }
    }
    
    return song
}

exports.getSongsByTitle = (title) => {
    const songs = getSongsByTitle(title)
    
    if (!songs || songs.length === 0) {
        throw {
            type: "not-found",
            message: "Cannot find song by title"
        }
    }

    return songs
}

exports.getSongsByArtist = (artist) => {
    const songs = getSongsByArtist(artist)

    if (!songs || songs.length === 0) {
        throw {
            type: "not-found",
            message: "Cannot find song by artist"
        }
    }

    return songs
}

exports.getSongsBySearch = (search) => {
    const songs = getSongsBySearch(search)

    if (!songs || songs.length === 0) {
        throw {
            type: "not-found",
            message: "Cannot find song by search"
        }
    }

    return songs
}

exports.addNewSong = (newSong) => {
    const response = addNewSong(newSong)
    
    if (!response || response === false) {
        throw {
            type: "not-added",
            message: "Cannot add new song into playlist"
        }
    }
}

exports.updateSongById = (id, updatedSong) => {
    const response = updateSongById(id, updatedSong)

    if (!response || response === false) {
        throw {
            type: "not-updated",
            message: "Cannot update song by id"
        }
    }
}

exports.deleteSongById = (id) => {
    const response = deleteSongById(id)

    if (!response || response === false) {
        throw {
            type: "not-deleted",
            message: "Cannot delete song by id"
        }
    }
}

exports.updateSongPlayCount = (id) => {
    const response = updateSongPlayCount(id)
    
    if (!response || response === false) {
        throw {
            type: "not-deleted",
            message: "Cannot delete song by id"
        }
    }
}