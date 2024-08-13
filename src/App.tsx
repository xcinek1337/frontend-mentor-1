import './App.css';

function App() {
	return (
		<section className='font-Outfit w-screen h-screen bg-slate-300 flex justify-center items-center'>
			<div className='flex flex-col gap-6 px-4 pt-4 pb-10 w-[320px] h-[499px] bg-white rounded-[20px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
        <img alt='qrcode' className='rounded-[20px] w-[288px] h-[288px]' src='./image-qr-code.png'/>
        <div className='flex flex-col px-4 gap-4 text-center'>
					<p className='font-extrabold text-[22px] text-slate-900 leading-[1.2] '>Improve your front-end skills by building projects</p>
					<p className='text-[15px] text-slate-500 tracking-[0.2px] leading-[1.4]'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
				</div>
			</div>
		</section>
	);
}

export default App;
