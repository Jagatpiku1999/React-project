import "./TableData.css"
import axios from 'axios';
import React from 'react';
class TableData extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userData:[]
        }
    }

     componentDidMount(){
            let url='https://jsonplaceholder.typicode.com/users';
            axios.get(url).then((res)=>{
                console.log(res);
                this.setState({
                    userData:res.data
                })
            })
        }

        render(){
    return( 
    <div>
        <h3 className='hname'>Table Data</h3>
        

        <div>
            <table cellPadding={5} cellSpacing={0}>
                <tr>
                    <th id="td">ID</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th id="td1">Email</th>
                    
                </tr>

                {
                    this.state.userData.map((data)=> {
                        return(
                            <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            
                        </tr>
                        )
                        
                    }) 
                }
            </table>
        </div>

        </div>
    )
}
}

export default TableData;