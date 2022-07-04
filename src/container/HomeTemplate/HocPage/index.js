import React from 'react'
import NhanVien from './nhanvien'
import SanPham from './sanpham'
import WidthCard from './width-card'


const WrapperCard = WidthCard(SanPham)

export default function HocPage() {
  return (
    <div className='container mt-5'>
        {WrapperCard()}
    </div>
  )
}
