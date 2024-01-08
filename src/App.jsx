export default function App() {
	return (
		<main className="h-svh w-svw ">
			<div
				className="w-full
        h-screen
        bg-yellow-100
        background-animate
        flex flex-col
        items-center
        justify-center"
			>
				<div className=" font-montserrat text-2xl mb-12">
					Welcome to Bryan's Portfolio!
				</div>
				<div className="relative">
					<div
						className="absolute inset-0 bg-gradient-to-r from-pink-600
            to-orange-600 rounded-2xl blur-xl opacity-55"
					></div>
					<div
						className=" relative ring-1 ring-gray-700/5 rounded-2xl
            px-6 py-2 shadow-md bg-yellow-200"
					>
						<div className=" font-montserrat text-4xl m-6">
							Website Coming Soon
							<span className="loading"></span>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
