import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
// import store from './redux/store'

<<<<<<< HEAD
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
=======
const store = {
    token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyMjcwMzc4MSwiaWF0IjoxNjIyNjY3NzgxfQ.ht-NPBgJBRI3FAbscD8si4ffkzuo1xX5DwouawHXIcw"
}

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
>>>>>>> e3a85006c59bc20cf05c6e832fae4e95b970d809
    document.getElementById('root')
);

