const gridSquare = (gridId) => {
	counter = 1;
	const populateSquare = () => {
		let mark = document.createElement('div');
		if ((counter % 2) === 0) {
			mark.textContent = 'O';
			document.querySelector(gridId).append(mark);
			mark.classList.add(gridId.substr(1,3));
			position = gridId.substr(3,3);
			gameArray(position-1, 'Circle');
		} else {
			mark.textContent = 'X';
			document.querySelector(gridId).append(mark);
			mark.classList.add(gridId.substr(1,3));
			position = gridId.substr(3,3);
			gameArray(position-1, 'X');
		}
		document.querySelector(gridId).removeEventListener("click", populateSquare, false);
		counter++;
		return {counter}
	}
	return {populateSquare: populateSquare, counter}
}

const addListener = () => {
	for (i = 1; i < 10; i++) {
		let square = "#sq" + i;
		let squareCall = gridSquare(square);
		(document.querySelector(square)).addEventListener("click", squareCall.populateSquare)
	}
}

let array = [2,3,4,5,6,7,8,9,10]
const gameArray = (position, type) => {
	array[position] = type;
	(function(){
		if (array[0] === array[1] && array[1] === array[2]) {
			outputResult(array[0]);
		} else if (array[0] === array[4] && array[4] === array[8]) {
			outputResult(array[0]);
		} else if (array[0] === array[3] && array[3] === array[6]) {
			outputResult(array[0]);
		} else if (array[1] === array[4] && array[4] === array[7]) {
			outputResult(array[1]);
		} else if (array[2] === array[4] && array[4] === array[6]) {
			outputResult(array[2]);
		} else if (array[2] === array[5] && array[5] === array[8]) {
			outputResult(array[2]);
		} else if (array[3] === array[4] && array[4] === array[5]) {
			outputResult(array[3]);
		} else if (array[6] === array[7] && array[7] === array[8]) {
			outputResult(array[6]);
		}
	})();
}

const outputResult = (result) => {
	document.querySelector('.result').textContent = '';
	document.querySelector('.result').textContent = result + ' WINS!';
}

addListener();
