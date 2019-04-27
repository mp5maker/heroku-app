import React from 'react';
import render from 'react-dom';

window.onload = init;

function init() {
    var gamesAbomination = document.getElementById('games-abomination');
    render(
        <h1>Hello World</h1>,
        gamesAbomination
    )
}
