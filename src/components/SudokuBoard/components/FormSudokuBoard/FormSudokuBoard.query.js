import axios from 'axios';

const getCellValues =  async () => {
    let data = await axios.get(`https://sugoku.herokuapp.com/board?difficulty=easy`)
        .then(data => {
            const newCellValues = data.data.board;
            return newCellValues;
        });
    return data;
}

export default getCellValues;