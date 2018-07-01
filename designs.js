// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
$(function() {
    'use strict';


    // dom pointers
    const canvasEl = $('#pixel_canvas');
    const sizePickerEl = $('#sizePicker');

    // Set color
    function setColor() {
        const colorVal = $('#colorPicker').val();
        return colorVal;
    }


    // delete grid
    function deleteGrid() {
        $(canvasEl).empty();
    }


    // create grid
    function makeGrid() {

        // Before adding new rows to the table, delete the existing ones first
        deleteGrid();

        const width = $('#input_width').val();
        const height = $('#input_height').val();

        for (let r = 0; r < width; r++) {
            const row = $('<tr></tr>');

            for (let c = 0; c < height; c++) {
                const cell = $('<td></td>');
                $(row).append(cell);

                // Event listener that sets background-color for each pixel
                $(cell).click(function() {
                    cell.css('background-color', setColor());
                });
            }

}
