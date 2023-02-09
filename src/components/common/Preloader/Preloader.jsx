import preloader from './../../../assets/icons8-loading-circle.gif'

let Preloader = (props) => {
    return <div style={ { backgroungColor: 'white' } }>
    <img src={preloader} style={ { width: '50px' } } />
    </div>
}

export default Preloader;