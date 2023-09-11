import { Icon } from "@iconify-icon/react";
import Button from "../../../components/Button";
import Pagination from "../../../components/Pagination";
import Filter from "./filter";

export default function TugasTambahanModule({ baseURL }) {
	return (
		<>
			<div className="flex items-center justify-center gap-2 mb-8">
				<Button
					as="a"
					href={`${baseURL}/tugas-tambahan/create`}
					variant="primary"
					icon={<Icon icon="ic:baseline-plus" width={20} height={20} />}
					pill
				>
					Tambah Tugas Tambahan
				</Button>
				<Filter />
			</div>
			<table className="w-full border-collapse rounded-2xl overflow-hidden shadow table-auto" cellPadding={10}>
				<thead>
					<tr>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2">
								No
								<Icon icon="iconoir:sort" width={20} height={20} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2">
								Tugas Tambahan
								<Icon icon="iconoir:sort" width={20} height={20} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2">
								Unit Kerja
								<Icon icon="iconoir:sort" width={20} height={20} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2">
								Instansi
								<Icon icon="iconoir:sort" width={20} height={20} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2">
								Tanggal Mulai
								<Icon icon="iconoir:sort" width={20} height={20} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2">
								Tanggal Berakhir
								<Icon icon="iconoir:sort" width={20} height={20} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="text-sm border-2 border-white bg-gray-50">1</td>
						<td className="text-sm border-2 border-white bg-gray-50 max-w-[12rem] truncate">Ketua Departemen</td>
						<td className="text-sm border-2 border-white bg-gray-50">Tekknik Informatika</td>
						<td className="text-sm border-2 border-white bg-gray-50">Universitas Ibn Khaldun Bogor</td>
						<td className="text-sm border-2 border-white bg-gray-50">28 November 2020</td>
						<td className="text-sm border-2 border-white bg-gray-50">28 November 2024</td>
						<td className="text-sm border-2 border-white bg-gray-50">
							<div className="flex items-stretch gap-1">
								<Button.Icon
									as="a"
									href={`${baseURL}/tugas-tambahan/detail`}
									variant="info"
									icon={<Icon icon="fluent:info-24-filled" width={20} height={20} />}
								/>
								<Button.Icon
									as="a"
									href={`${baseURL}/tugas-tambahan/edit`}
									variant="secondary"
									icon={<Icon icon="bx:edit" width={20} height={20} />}
								/>
								<Button.Icon
									variant="danger"
									icon={<Icon icon="solar:trash-bin-2-bold-duotone" width={20} height={20} />}
								/>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<Pagination className="mt-8" />
		</>
	);
}
