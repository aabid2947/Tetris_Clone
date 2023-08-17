
// Create divs to form blocks
function creatediv(noOFBlocks) {
    for (let i = 0; i < noOFBlocks; i++) {
        no_of_block = noOFBlocks;
        Block[i] = document.createElement("div");
        Block[i].style.position = 'relative';
        Block[i].style.width = 25 + "px";
        Block[i].style.height = 25 + "px";
        const image = document.createElement("img");
        image.src = 'image/Block.png';
        image.width = 25;
        image.height = 25;
        Block[i].appendChild(image);
    }


}

// The ramaining block is pushed downward after element of completed row is eleminated
function push_block_downward(i) {
    if (row[i - 12].firstChild && !row[i].firstChild) {
        row[i].appendChild(row[i - 12].firstChild);
        if (!(i + 12 > 239)) push_block_downward(i + 12);
    }
}

// To check whether the row is completely filled or not
function check_completed_row(row_num) {
    let j;
    if (row_num <= 0) return;
    let packed_row = false;
    for (let i = row_num; i > row_num - 12; i--) {
        if (!row[i].firstChild) {
            packed_row = false;
            break;
        }
        else packed_row = true;
    }
    if (packed_row) {

        for (j = row_num ; j >  row_num - 12; j--) {
            row[j].removeChild(row[j].firstChild);
        }
        setTimeout(  () =>{
        for (let i = j + 12; i >= 12; i--) {
            push_block_downward(i);   
        }
        },300);
        row_num = grid_size + 12;
    }
    check_completed_row(row_num - 12);

}

// To display upcoming block
function display_next_block(upcoming_block) {
    upcoming_block_image.style.width = 50 + "px";
    upcoming_block_image.style.height = 50 + "px";
    if (upcoming_block == 1) {
        upcoming_block_image.src = 'image/TBlock.png'
    }
    else if (upcoming_block == 2) {
        upcoming_block_image.src = 'image/LBlock.png'
        upcoming_block_image.style.width = 40 + "px";
        upcoming_block_image.style.height = 60 + "px";
    }
    else if (upcoming_block == 3) {
        upcoming_block_image.src = 'image/SquareBlock.png'
    }
    else if (upcoming_block == 4) {
        upcoming_block_image.src = 'image/ZBlock.png'
    }
    else if (upcoming_block == 5) {
        upcoming_block_image.src = 'image/ErectedBlock.png'
        upcoming_block_image.style.width = 25 + "px";
        upcoming_block_image.style.height = 75 + "px";
    }
    else if (upcoming_block == 6) {
        upcoming_block_image.src = 'image/ZBlock.png'
    }
    else if (upcoming_block == 7) {
        upcoming_block_image.src = 'image/TBlock.png'
    }

    else if (upcoming_block == 8) {
        upcoming_block_image.src = 'image/LBlock.png'
        upcoming_block_image.style.width = 40 + "px";
        upcoming_block_image.style.height = 60 + "px";
    }
    else if (upcoming_block == 9) {
        upcoming_block_image.src = 'image/SquareBlock.png'
    }
    else if (upcoming_block == 0) {
        upcoming_block_image.src = 'image/ErectedBlock.png'
        upcoming_block_image.style.width = 25 + "px";
        upcoming_block_image.style.height = 75 + "px";
    }
   
    display_board.appendChild(upcoming_block_image);

}


// To recolor the border
function recolor_border(){
    for (let i = 1; i <= grid_size; i++) {
        row[i].style.border = '0.5px ridge rgb(55,55,55)';
    }
}

// To potray the future position of blocks


// To move the blocks downward
function move_down(position, block_number) {
    if (row[position].firstChild && check_box) {
        move_possible = false;
        scaleY = 240;
    }
    else if (move_possible) {
        row[position].appendChild(Block[block_number]);
        total_move++;
    
    }
    scaleY_final_position = position;
}



//                                 Blocks 
function Tshape(scaleY) {
    if (x) {
        creatediv(4);
        x = false;
    }

    if (no_of_rotation % 4 == 0) {
        move_down(scaleY + 12, 3);
        move_down(scaleY - 1, 0);
        move_down(scaleY, 1);
        move_down(1 + scaleY, 2);
        block_height = 12;
        block_width_left = 1;
        block_width_right = 1;
    }
    else if ((no_of_rotation - 1) % 4 == 0) {
        move_down(scaleY + 12, 3);
        move_down(scaleY, 1);
        move_down(1 + scaleY, 2);
        move_down(scaleY - 12, 0);
        block_height = 12;
        block_width_left = 0;
        block_width_right = 1;
    }
    else if ((no_of_rotation - 2) % 4 == 0) {
        move_down(scaleY, 1);
        move_down(1 + scaleY, 2);
        move_down(scaleY - 1, 3);
        move_down(scaleY - 12, 0);
        block_height = 0;
        block_width_left = 1;
        block_width_right = 1;
    }
    else if ((no_of_rotation - 3) % 4 == 0) {
        move_down(12 + scaleY, 2);
        move_down(scaleY, 1);
        move_down(scaleY - 1, 3);
        move_down(scaleY - 12, 0);
        block_height = 12;
        block_width_left = 1;
        block_width_right = 0;
    }
    check_box = true;
}


function Lshape(scaleY, no_of_rotation) {
    if (x) {
        creatediv(4);
        x = false;
    }
   
    if (no_of_rotation % 4 == 0) {
        move_down(12 + scaleY, 2);
        move_down(13 + scaleY, 3);
        move_down(scaleY, 1);
        move_down(scaleY - 12, 0);
        block_height = 12;
        block_width_left = 0;
        block_width_right = 1;
    }
    else if ((no_of_rotation - 1) % 4 == 0) {
        move_down(scaleY + 1, 2);
        move_down(scaleY, 1);
        move_down(scaleY - 1, 0);
        move_down(scaleY - 11, 3);
        block_height = 0;
        block_width_left = 1;
        block_width_right = 1;
    }
    else if ((no_of_rotation - 2) % 4 == 0) {
        move_down(scaleY + 12, 0);
        move_down(scaleY, 1);
        move_down(scaleY - 12, 2);
        move_down(scaleY - 13, 3);
        block_height = 12;
        block_width_left = 1;
        block_width_right = 0;
    }
    else if ((no_of_rotation - 3) % 4 == 0) {
        move_down(11 + scaleY, 3);
        move_down(scaleY - 1, 2);
        move_down(scaleY, 1);
        move_down(scaleY + 1, 0);
        block_height = 12;
        block_width_left = 1;
        block_width_right = 1;
    }
    check_box = true;
}


function Squareshape(scaleY) {
    check_box = true;
    if (x) {
        creatediv(4);
        x = false;
    }


    move_down(12 + scaleY, 2);
    move_down(13 + scaleY, 3);
    move_down(0 + scaleY, 0);
    move_down(1 + scaleY, 1);
    block_height = 12;
    block_width_left = 0;
    block_width_right = 1;
}


function Zshape(scaleY, no_of_rotation) {
    check_box = true;
    if (x) {
        creatediv(4);
        x = false;
    }

    if (no_of_rotation % 2 == 0) {
        move_down(12 + scaleY, 2);
        move_down(13 + scaleY, 3);
        move_down(scaleY - 1, 0);
        move_down(scaleY, 1);
        block_height = 12;
       block_width_left = 1;
        block_width_right = 1;

    }
    else {
        move_down(11 + scaleY, 2);
        move_down(scaleY - 1, 0);
        move_down(scaleY, 1);
        move_down(scaleY - 12, 3);
        block_height = 12;
        block_width_left = 1;
        block_width_right = 1; 
    }
}
function Straightshape(scaleY, rotate) {
    check_box = true;
    if (x) {
        creatediv(3);
        x = false;
    }

   
    if(no_of_rotation%2!=0 &&(scaleY%12!=0) && (scaleY-1%12!=0)) {
        move_down(1 + scaleY, 2);
        move_down(scaleY, 1);
        move_down(scaleY - 1, 0);
        block_height = 0;
        block_width_left = 1;
        block_width_right = 1;
    }
    else  {
        move_down(12 + scaleY, 2);
        move_down(scaleY, 1);
        move_down(scaleY - 12, 0);
        block_height = 12;
        block_width_left = 0;
        block_width_right = 0; 
    }
}




//    Start
const Box = document.getElementById("mydiv");
const Button = document.createElement('button');
const pause_button = document.querySelector("#pause_button");
const resume_button = document.querySelector("#resume_button")
const upcoming_block_image = document.createElement("img");
const display_board = document.querySelector("#display_next_block");

let Block = [];
let row = [];
let next = true;
let x = true;
let move_possible = true;
let scaleY = 0;
let score = 0;
let time_increment = 0
let total_move = 0;
let no_of_rotation = 0;
let check_box = true;
let current_scaleY = 0;
let no_of_block = 0;
let block_height = 0;
let block_width_left = 0;
let block_width_right = 0;
let final_scaleY = 12;
let scaleY_final_position = 0;
randomBlock = Math.floor(Math.random() * 10);
let grid_size = 240;


// Display score on scoreBoard
const score_board = document.querySelector("#display_score");
score_board.innerHTML = score;
score_board.style.fontSize = 30 + "px";
score_board.style.fontWeight = 1000;

// Display Level
const display_level = document.querySelector("#display_level");
display_level.innerHTML = 0;
display_level.style.fontSize = 30 + "px";
display_level.style.fontWeight = 900;

// Images Sources
const play_button = document.createElement("img");
play_button.src = 'image/Play.png'

//  Creating rows and columns
for (let i = 1; i <= grid_size; i++) {
    row[i] = document.createElement("div");
    Box.append(row[i]);
    row[i].style.position = 'relative';
    row[i].style.border = '0.5px ridge rgb(55,55,55)';
    row[i].style.margin = 0;
    row[i].style.padding = 0;
}

// Event listener to start the game
const StartButton = document.getElementById("StartButton");
StartButton.addEventListener("click", begin);

// Changing resume Button into play Button
resume_button.onclick = () => {
    next = true;
    pause_button.style.display = 'inline';
    resume_button.style.display = 'none';

}

// Pause the Game
pause_button.onclick = () => {
    resume_button.style.display = 'inline';
    pause_button.style.display = 'none'
    next = false;
}


// Event listener to handle left and right movement and roatation also
document.addEventListener("keydown", move);
function move(event) {
    if (event.key.startsWith('Arrow')) {
        recolor_border();
        switch (event.key) {
            case 'ArrowUp':
                break;
            case 'ArrowDown':
                break;
            case 'ArrowLeft':
                if ((scaleY-block_width_left-1) % 12 == 0) scaleY;
                else scaleY--;
                break;
            case 'ArrowRight':
                if ((scaleY + block_width_right) % 12 == 0) scaleY;
                else scaleY++;;
                break;
        }
    }
    else if (event.key == 'Enter') {
        recolor_border();
        no_of_rotation++;
        check_box = false;
    }

}

// Beginning pf the game
function begin() {
    document.querySelector("#front_panel").style.display = 'none'
    document.querySelector("#main_container").style.display = 'flex';
    StartButton.style.display = 'none';
    pause_button.style.display = 'inline';

    future_random_block = Math.floor(Math.random()*10);
    display_next_block(future_random_block);
    let timerId = null;
    total_move = 0;
    no_of_rotation = 0;
    move_possible = true;
    scaleY = (Math.floor(Math.random() * 10 + 14));
    timerId = setInterval(frame, 400 - time_increment);
  

    function frame() {
        if (scaleY > (240 - block_height)) {
            clearInterval(timerId);
            score += 5;
            score_board.innerHTML = score;
            if (time_increment % 100 == 0) display_level.innerHTML++;
            x = true;
            if (next) {
              if(time_increment > 150)  time_increment += 10;
              else if(time_increment < 150 ) time_increment += 5;
              else if(time_increment < 100 ) time_increment += 2;
              else if(time_increment < 50 ) time_increment += 1;
            }
            display_board.removeChild(upcoming_block_image);
            randomBlock = future_random_block;
            recolor_border();
            check_completed_row(grid_size);
            if(scaleY_final_position >12) {
            begin();
            }
            else{
                document.querySelector("#main_container").style.display = 'none';
                document.querySelector("#front_panel").style.display = 'flex';
                pause_button.style.display = 'none'
                StartButton.style.display = 'block';
            }

        }
        else if (next) {
            if (randomBlock == 1) {
                Tshape(scaleY, no_of_rotation);
            }
            else if (randomBlock == 2) {
                Lshape(scaleY, no_of_rotation);
            }
            else if (randomBlock == 3) {
                Squareshape(scaleY, no_of_rotation);
            }
            else if (randomBlock == 4) {
                Zshape(scaleY, no_of_rotation);
            }
            else if (randomBlock == 5) {
                Straightshape(scaleY, no_of_rotation);
            }
            else if (randomBlock == 6) {
                Zshape(scaleY, no_of_rotation);

            }
            else if (randomBlock == 7) {
                Tshape(scaleY, no_of_rotation);

            }
            else if (randomBlock == 8) {
                Lshape(scaleY, no_of_rotation);

            }
            else if (randomBlock == 9) {
                Squareshape(scaleY, no_of_rotation);

            }
            else if (randomBlock == 0) {
                Straightshape(scaleY, no_of_rotation);
            }

            scaleY += 12;
        }

    }

}



