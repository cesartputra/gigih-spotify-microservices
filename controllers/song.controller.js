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
} = require('../services/song.service')

exports.getAllSongs = () => {
    try {
        const songs = getAllSongs()

        return {
            status: 'success',
            data: {
                songs
            }
        }
    } catch (err) {
        throw err
    }
}

exports.getSongById = (id) => {
    try {
        const song = getSongById(id)
        // console.log(song)
        return {
            status: 'success',
            data: {
                song
            }
        }
    } catch (err) {
        throw err
    }
}

exports.getSongsByTitle = (title) => {
    try {
        const songs = getSongsByTitle(title)

        return {
            status: 'success',
            data: {
                songs
            }
        }
    } catch (err) {
        throw err
    }
}

exports.getSongsByArtist = (artist) => {
    try {
        const songs = getSongsByArtist(artist)

        return {
            status: 'success',
            data: {
                songs
            }
        }
    } catch (err) {
        throw err
    }    
}

exports.getSongsBySearch = (search) => {
    try {
        const songs = getSongsBySearch(search)

        return {
            status: 'success',
            data: {
                songs
            }
        }
    } catch (err) {
        throw err
    } 
}

exports.addNewSong = (newSongBody) => {
    try {
        const newSong = {
            title: newSongBody.title,
            artist: newSongBody.artist
        }

        const addSong = addNewSong(newSong)

        return {
            status: 'success',
            message: 'Successfully added new song into playlist'
        }
    } catch (err) {
        throw err
    }
}

exports.updateSongById = (id, updateSongBody) => {
    try {
        const updateSong = {
            title: updateSongBody.title,
            artist: updateSongBody.artist
        }
    
        const updatedSong = updateSongById(id, updateSong)

        return {
            status: 'success',
            message: 'Successfully update song by id',
        }
    } catch (err) {
        throw err
    }
}

exports.deleteSongById = (id) => {
    try {
        const deletedSong = deleteSongById(id)

        return {
            status: 'success',
            message: 'Successfully delete song by id',
        }
    } catch (err) {
        throw err
    }
}

exports.updateSongPlayCount = (id) => {
    try {
        const updatedPlayCount = updateSongPlayCount(id)

        return {
            status: 'success',
            message: 'Successfully play song by id',
        }
    } catch (err) {
        throw err
    }
}