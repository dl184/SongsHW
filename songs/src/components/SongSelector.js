import React from 'react';

class SongSelector extends React.Component{
  render(){
    const songList = this.props.songs.map((song, index) => (
      <option key={song.id.attributes["im:id"]} value={index}>{song["im:name"].label}</option>
    ))
    return(
      <div className='selector'>
        <p>Select a Song...</p>
          <select onChange={this.props.onSelect}>
            {songList}
          </select>
      </div>
    )
  }
}

export default SongSelector;
