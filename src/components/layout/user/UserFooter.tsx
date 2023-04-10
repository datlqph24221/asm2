const UserFooter = () => {
    return <footer className='pt-14'>
        <div className='container mx-auto grid grid-cols-4 gap-10 mb-24 leading-8 pl-28'>
            <div>
                <h3 className='text-2xl'>Tìm cửa hàng</h3>
                <p>Tìm cửa hàng gần nhất</p>
                <p>Mua hàng từ xa</p>
                <p className='text-red-500'>Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</p>
                <h2 className='text-2xl pb-5'>Phương thức thanh toán</h2>
                <div className='grid grid-cols-4 gap-3'>
                    <img src="./Rectangle.png" alt="" />
                    <img src="./Rectangle (1).png" alt="" className='mb-4' />
                    <img src="./Rectangle (2).png" alt="" />
                    <img src="./Rectangle (3).png" alt="" />
                    <img src="./Rectangle (4).png" alt="" />
                </div>
            </div>
            <div>
                <p>Gọi mua hàng: 1800.2044 (8h00 - 22h00)</p>
                <p>Gọi khiếu nại: 1800.2063 (8h00 - 21h30)</p>
                <p>Gọi bảo hành: 1800.2064 (8h00 - 21h00)</p>
                <h2 className=' mt-7 mb-3'>Đối tác dịch vụ bảo hành</h2>
                <h3 className='text-lg'>Điện Thoại - Máy tính</h3>
                <h2 className='text-2xl mt-12'>Trung tâm bảo hành uỷ quyền Apple</h2>
                <img src="./footer-img1.png" className='mt-5' alt="" />
            </div>
            <div>
                <p>Mua hàng và thanh toán Online</p>
                <p>Mua hàng trả góp Online</p>
                <p>Tra thông tin đơn hàng</p>
                <p>Tra điểm Smember</p>
                <p>Tra thông tin bảo hành</p>
                <b>Tra cứu hoá đơn VAT điện tử</b>
                <p>Trung tâm bảo hành chính hãng</p>
                <p>Quy định về việc sao lưu dữ liệu</p>
                <p className='text-red-500'>Dịch vụ bảo hành điện thoại</p>
            </div>
            <div>
                <p>Quy chế hoạt động</p>
                <p>Chính sách Bảo hành</p>
                <p>Liên hệ hợp tác kinh doanh</p>
                <p>Khách hàng doanh nghiệp (B2B)</p>
                <p className='text-red-500'>Ưu đãi thanh toán</p>
                <p>Tuyển dụng</p>
            </div>
        </div>
        <div className='bg-gray-200 pb-20'>
            <div className='container mx-auto grid grid-cols-3 gap-4 leading-8'>
                <div>
                    <p>Điện thoại iPhone 13 - Điện thoại iPhone 12 - Điện thoại iPhone 11</p>
                    <p>Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max</p>
                    <p>iPhone cũ giá rẻ - iPhone 13 cũ - iPhone 12 cũ - iPhone 11 cũ</p>
                </div>
                <div>
                    <p>Điện thoại iPhone - Điện thoại Samsung - Điện thoại Samsung A</p>
                    <p>Điện thoại OPPO - Điện thoại Xiaomi - Điện thoại Vivo - Điện thoại Nokia</p>
                    <p>Samsung Fold 3 - Samsung S22 - Samsung A73 - Samsung A53</p>
                </div>
                <div>
                    <p>Laptop - Laptop HP - Laptop Dell - Laptop Acer</p>
                    <p>Microsoft Surface - Laptop Lenovo - Laptop Asus</p>
                    <p>Máy tính để bàn - Màn hình máy tính - Camera - Camera hành trình</p>
                </div>
            </div>
            <p className='container mx-auto mt-20 '>Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</p>
        </div>
    </footer>
}

export default UserFooter