import React from 'react';
import './library-options.css'

export default function LibraryOptions() {
  return (
    <div className="options-container">
        <div className="chart">
          Chart
        </div>
        <div className="stats">
          <ul>
            <li><b>Total Games:</b> 2</li>
            <li><b>Favorite Genre:</b> Action</li>
            <li><b>Total Completed:</b> 1</li>
          </ul>
        </div>
        <div className="options">
          Platforms: 
          <span class="platform p-switch">Switch</span>
          <span class="platform p-xbox">Xbox</span>
          <br />
          Make my library visible to others? 
          <input type="checkbox" />
        </div>
        <div className="add-games">
          <form>
            <label htmlFor="add-games-field">
              Add Games
            </label>
            <input type="text" name="add-games-field" />
            <input type="submit" />
          </form>
        </div>
      </div>
  );
}