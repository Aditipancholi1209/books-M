import React from 'react'

const BooksTable = ({books,handleDelete,handleUpdate}) => {
    const columns=['ISBN','TITLE','AUTHOR NAME','PUBLISHED YEAR','ACTIONS'];
  return (
    <div className='table_container'>
      <table>
        <thead>
        <tr>
        {columns.map((item)=>{
            return <th>{item}</th>
        })}

        </tr></thead>
        <tbody>
            {books.length? books.map((item,index)=>{
                return <tr>
                    <td>{item.isbn}</td>
                    <td>{item.title}</td>
                    <td>{item.authorname}</td>
                    <td>{item.year}</td>
                    <td>
                        <button className='delete' onClick={()=>{handleDelete(index)}}>DELETE</button>

                        <button className='update' onClick={()=>{handleUpdate(item,index)}}>UPDATE</button></td>
                </tr>
            }): <tr>
            <td colspan="5"> No Data..</td>
          </tr>
        }
        </tbody>
      </table>
    </div>
  )
}

export default BooksTable
