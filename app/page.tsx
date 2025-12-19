
import { Input } from "@/components/ui/input";


export default function Home() {
	return (
		<main>
			{/* // HERO SECTION */}
			<div className="bg-linear-to-r from-blue-600 to-blue-400 py-20 px-4">
				<div className="container mx-auto max-w-4xl text-center">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
						TEMUKAN GYM PALING COCOK UNTUK KAMU!
					</h1>

					{/* Search Bar */}
					<div className="relative max-w-2xl mx-auto">
						<Input
							type="text"
							placeholder="Cari dengan nama atau lokasi..."
							className="w-full pl-12 pr-4 py-6 text-lg rounded-lg bg-gray-100"
						/>
					</div>
				</div>
			</div>

			


		</main>
	);
}
