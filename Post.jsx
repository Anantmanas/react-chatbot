// import React, { Component } from 'react';
// import PropTypes from "prop-types";
// import axios from 'axios';


// class Post extends Component {
//     constructor(props){
//         super(props);
//        this.state ={
//         response:"",
//        }
//     }

//     componentDidMount(){
//         const { steps } = this.props;
//         const {response} = steps;

//         this.setState({response})

//         axios.post(`/api`,userObject)
//         .then(res =>{
//             console.log(res.status)
//         }).catch(function(error){
//             console.log(error);
//         })

//     }

//     render(){
//         const {response} = this.state;
//         console.log(response)
//         return(
//             <div>{response.previousValue}</div>
//         );

//     }
// };

// Post.propTypes={
//     steps: PropTypes.object
// }
// Post.defaultProps ={
//     steps:undefined
// }
// export default Post;
