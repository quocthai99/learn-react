import React, { useState } from 'react'
import { actAddUser } from './reducer/action'
import { useSelector, useDispatch } from 'react-redux'

export default function AddUserPage() {

  const dispatch = useDispatch()


  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: ""
  })


  const handleOnChange = (e) => {
    const { name, value } = e.target
    setState({
      ...state,
      [name]: value
    })
  }

  const handleAddUser = (e) => {
    e.preventDefault()
    
    dispatch(actAddUser(state))
  }


  return (
    <div className='container'>
      <h1 className='text-center'>Add User</h1>
      <div className='row'>
        <div className='col-md-6 mx-auto'>
          <form onSubmit={handleAddUser}>
            <div className="form-group">
              <label>Tai khoan</label>
              <input type="text" name='taiKhoan' className="form-control" onChange={handleOnChange} />
            </div>
            <div className="form-group">
              <label>mat khau</label>
              <input type="text" name='matKhau' className="form-control" onChange={handleOnChange} />
            </div>
            <div className="form-group">
              <label>email</label>
              <input type="text" name='email' className="form-control" onChange={handleOnChange} />
            </div>
            <div className="form-group">
              <label>so dien thoai</label>
              <input type="text" name='soDt' className="form-control" onChange={handleOnChange} />
            </div>
            <div className="form-group">
              <label>ho ten</label>
              <input type="text" name='hoTen' className="form-control" onChange={handleOnChange} />
            </div>
            <button className='btn btn-success'>Add User</button>
          </form>
        </div>
      </div>
    </div>
  )
}
