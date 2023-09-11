import { Icon } from "@iconify-icon/react";
import Button from "../../../components/Button";
import Pagination from "../../../components/Pagination";
import Filter from "./filter";

export default function PengajaranModule({ baseURL }) {
	return (
		<>
			<div className="flex items-center justify-center gap-2 my-8">
				<Button
					as="a"
					href={`${baseURL}/pengajaran/create`}
					variant="primary"
					icon={<Icon icon="ic:baseline-plus" width={20} height={20} />}
					pill
				>
					Tambah Pengajaran
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
								Mata Kuliah
								<Icon icon="iconoir:sort" width={20} height={20} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2">
								Jenis Mata Kuliah
								<Icon icon="iconoir:sort" width={20} height={20} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2">
								Bidang Keilmuan
								<Icon icon="iconoir:sort" width={20} height={20} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2">
								Kelas
								<Icon icon="iconoir:sort" width={20} height={20} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2">
								Jumlah Mahasiswa
								<Icon icon="iconoir:sort" width={20} height={20} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200">
							<div className="flex items-center gap-2">
								SKS
								<Icon icon="iconoir:sort" width={20} height={20} />
							</div>
						</th>
						<th className="text-sm border-2 border-white bg-gray-200"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="text-sm border-2 border-white bg-gray-50">1</td>
						<td className="text-sm border-2 border-white bg-gray-50 max-w-[10rem]">
							<p className="truncate">Kecakapan Intropolasi</p>
						</td>
						<td className="text-sm border-2 border-white bg-gray-50">Wajib</td>
						<td className="text-sm border-2 border-white bg-gray-50"></td>
						<td className="text-sm border-2 border-white bg-gray-50">REG_B</td>
						<td className="text-sm border-2 border-white bg-gray-50"></td>
						<td className="text-sm border-2 border-white bg-gray-50">2.00</td>
						<td className="text-sm border-2 border-white bg-gray-50">
							<div className="flex items-stretch gap-1">
								<Button.Icon
									as="a"
									href={`${baseURL}/pengajaran/detail`}
									variant="info"
									icon={<Icon icon="fluent:info-24-filled" width={20} height={20} />}
								/>
								<Button.Icon
									as="a"
									href={`${baseURL}/pengajaran/edit`}
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
					<tr>
						<td className="text-sm border-2 border-white bg-gray-50">2</td>
						<td className="text-sm border-2 border-white bg-gray-50 max-w-[10rem]">
							<p className="truncate">Verifikasi dan Validasi Perangkat Lunak</p>
						</td>
						<td className="text-sm border-2 border-white bg-gray-50">Wajib</td>
						<td className="text-sm border-2 border-white bg-gray-50"></td>
						<td className="text-sm border-2 border-white bg-gray-50">REG_B</td>
						<td className="text-sm border-2 border-white bg-gray-50"></td>
						<td className="text-sm border-2 border-white bg-gray-50">2.00</td>
						<td className="text-sm border-2 border-white bg-gray-50">
							<div className="flex items-stretch gap-1">
								<Button.Icon
									as="a"
									href={`${baseURL}/pengajaran/detail`}
									variant="info"
									icon={<Icon icon="fluent:info-24-filled" width={20} height={20} />}
								/>
								<Button.Icon
									as="a"
									href={`${baseURL}/pengajaran/edit`}
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
					<tr>
						<td className="text-sm border-2 border-white bg-gray-50">3</td>
						<td className="text-sm border-2 border-white bg-gray-50 max-w-[10rem]">
							<p className="truncate">Kecakapan Intropolasi</p>
						</td>
						<td className="text-sm border-2 border-white bg-gray-50">Wajib</td>
						<td className="text-sm border-2 border-white bg-gray-50"></td>
						<td className="text-sm border-2 border-white bg-gray-50">REG_B</td>
						<td className="text-sm border-2 border-white bg-gray-50"></td>
						<td className="text-sm border-2 border-white bg-gray-50">2.00</td>
						<td className="text-sm border-2 border-white bg-gray-50">
							<div className="flex items-stretch gap-1">
								<Button.Icon
									as="a"
									href={`${baseURL}/pengajaran/detail`}
									variant="info"
									icon={<Icon icon="fluent:info-24-filled" width={20} height={20} />}
								/>
								<Button.Icon
									as="a"
									href={`${baseURL}/pengajaran/edit`}
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
					<tr>
						<td className="text-sm border-2 border-white bg-gray-50">4</td>
						<td className="text-sm border-2 border-white bg-gray-50 max-w-[10rem]">
							<p className="truncate">Verifikasi dan Validasi Perangkat Lunak</p>
						</td>
						<td className="text-sm border-2 border-white bg-gray-50">Wajib</td>
						<td className="text-sm border-2 border-white bg-gray-50"></td>
						<td className="text-sm border-2 border-white bg-gray-50">REG_B</td>
						<td className="text-sm border-2 border-white bg-gray-50"></td>
						<td className="text-sm border-2 border-white bg-gray-50">2.00</td>
						<td className="text-sm border-2 border-white bg-gray-50">
							<div className="flex items-stretch gap-1">
								<Button.Icon
									as="a"
									href={`${baseURL}/pengajaran/detail`}
									variant="info"
									icon={<Icon icon="fluent:info-24-filled" width={20} height={20} />}
								/>
								<Button.Icon
									as="a"
									href={`${baseURL}/pengajaran/edit`}
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
