import React, { useState } from 'react';
import quotes from '../quotes.json'

const QuoteBox = () => {

    const colors = ["#D5ECF5", "#DCB0FF", "#F3C5FF", "#FF9671", "#FFC75F", "#F9F871", "#FF8066", "#FBEAFF", "#4FFBDF", "#FEFEDF", "#5FFBF1"]

    const indexColor = Math.floor(Math.random() * colors.length)

    document.body.style = `background: ${colors[indexColor]}`


    const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length))

    const shuffle = () => {
        setIndex(Math.floor(Math.random() * quotes.length))

    }

    return (
        <div className='quotebox' style={{ background: 'gray', color: colors[indexColor] }}>
            <h1 className='quote'>
                <box-icon type='solid' name='quote-alt-left'></box-icon>
                {quotes[index].quote}
            </h1>
            <h2 className="author">
                {quotes[index].author}
            </h2>
            <button onClick={shuffle} style = {{background: colors[indexColor]}}>
                <box-icon name='shuffle'></box-icon>
            </button>
        </div>
    );
};

export default QuoteBox;