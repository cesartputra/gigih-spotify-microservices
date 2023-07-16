let playlist = [
    {
        id: 1,
        title: 'Bertahan/Pergi',
        artist: ['Raisa'],
        playCount: 0
    },
    {
        id: 2,
        title: 'Lenggang Puspita',
        artist: ['Afgan'],
        playCount: 0
    },
    {
        id: 3,
        title: 'Biar Menjadi Kenangan',
        artist: ['Raisa', 'Ahmad Dhani'],
        playCount: 0
    },
]

exports.getAllSongs = () => {
    return playlist
}

exports.getSongById = (id) => {
    const song = playlist.find(song => song.id === parseInt(id))
    
    return song
}

exports.getSongsByTitle = (titleName) => {
    const songs = playlist.filter(song => song.title.toLowerCase().includes(titleName.toLowerCase()))
    
    return songs
}

exports.getSongsByArtist = (artistName) => {
    const songs = playlist.filter(song => song.artist.some(artist => artist.toLocaleLowerCase().includes(artistName.toLowerCase())))
    
    return songs
}

exports.getSongsBySearch = (search) => {
    const songs = playlist.filter(song => {
        const lowercaseTitle = song.title.toLowerCase().includes(search.toLowerCase())
        const lowercaseArtist = song.artist.some(artist => artist.toLocaleLowerCase().includes(search.toLowerCase()))

        return lowercaseTitle || lowercaseArtist
    })

    return songs
}

function getNewId() {
    let id = playlist[playlist.length-1].id + 1
    
    return id
}

exports.addNewSong = (newSong) => {
    playlist.push({
        id: getNewId(),
        title: newSong.title,
        artist: newSong.artist,
        playCount: 0
    })

    return true
}

exports.updateSongById = (id, updatedSong) => {
    let song = this.getSongById(id)
    song.title = updatedSong.title
    song.artist = updatedSong.artist
    song.playCount = 0

    return true
}

exports.deleteSongById = (id) => {
    const songIndex = playlist.findIndex(song => song.id === parseInt(id))
    playlist.splice(songIndex, 1)

    return true
}

exports.updateSongPlayCount = (id) => {
    let song = this.getSongById(id)
    song.playCount += 1

    return true
}